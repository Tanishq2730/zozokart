import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Preloader from '../../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../../helper/ColorInit'
import HeaderOne from '../../components/HeaderOne'
import FooterOne from '../../components/FooterOne'
import BottomFooter from '../../components/BottomFooter'
import Map from '../../components/Map'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { verifyLoginOTP } from '../../api/authAPI'
import { showToast } from '../../components/ToastifyNotification'
import { LOGIN_SUCCESS } from '../../reducers/authReducer'
import { syncCartWithDatabase } from '../../actions/cartActions'

const SignInOtpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State for 4 inputs

    const location = useLocation();

    const emailOrPhone = location.state?.emailOrPhone || '';

    useEffect(() => {
        if(!emailOrPhone){
            navigate('/sign-in')
        }
    }, [emailOrPhone])

    const handleInputChange = (value, index) => {
        if (value.length > 1) return; // Ensure single character input

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus on the next input if value is entered and index < 3
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, 6); // Get up to 4 characters
        const newOtp = [...otp];
        for (let i = 0; i < pasteData.length; i++) {
            if (i < 6) {
                newOtp[i] = pasteData[i];
            }
        }
        setOtp(newOtp);

        // Optionally, move focus to the last filled input
        const lastFilledIndex = pasteData.length - 1;
        if (lastFilledIndex < 6) {
            const nextInput = document.getElementById(`otp-${lastFilledIndex}`);
            if (nextInput) nextInput.focus();
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const data = {
                emailOrPhone: emailOrPhone,
                otp: otp.join(""),
            }
            if(!otp.join("")){
                showToast('error','Otp is required')
                return;
            }
            const response = await verifyLoginOTP(data); // Make sure login function returns token

            if (response.success == true) {
                showToast('success', response.message)
                localStorage.setItem('token', response.token); // Store token in localStorage
                // localStorage.setItem('user', JSON.stringify(response.data.customer));
                dispatch({ type: LOGIN_SUCCESS, payload: { response } }); // Dispatch LOGIN_SUCCESS action

                // Sync cart with database after login
                dispatch(syncCartWithDatabase());

                navigate('/dashboard', { state: {} }); // Redirect upon successful login
                // navigate('/verify-otp'); // Redirect upon successful login
            } else {
                // setError(response.message);
                showToast('error', response.message)
            }

        } catch (error) {
            // setError(error); // Handle login errors
            showToast('error', error)
        }
    };

    return (

        <>
            {/* Preloader */}
            <Preloader />

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#299E60" />

            {/* ColorInit */}
            <ColorInit color={false} />

            {/* HeaderOne */}
            <HeaderOne />
            <section className="py-80 auth-bg ">
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-md-7 p-0'>
                        </div> */}
                        <div className="col-md-5 m-auto">
                            <form onSubmit={verifyOtp}>
                                <div className="border bg-white shadow border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-20 h-100 w-100">
                                    <h4 className="text-xxl mb-0">Enter OTP here </h4>
                                    <hr />
                                    <label
                                        htmlFor="otp"
                                        style={{
                                            fontWeight: "500",
                                            marginBottom: "8px",
                                            color: "#212529",
                                        }}
                                    >
                                        Enter OTP <span style={{ color: "#dc3545" }}>*</span>{" "}
                                    </label>
                                    <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                                        <div style={{ display: "flex", gap: "5px", marginTop: "8px" }}>
                                            {otp.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    maxLength="1"
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        textAlign: "center",
                                                        fontSize: "18px",
                                                        border: "1px solid #ced4da",
                                                        borderRadius: "5px",
                                                    }}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                    onPaste={handlePaste}
                                                    id={`otp-${index}`}
                                                    required
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-10 mt-20">
                                        <div className="flex-align gap-48 flex-wrap">
                                            <button className="btn btn-main py-18 px-40" type="submit">Verify</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* FooterOne */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>

    )
}

export default SignInOtpPage