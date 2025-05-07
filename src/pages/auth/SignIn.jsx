import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../../helper/ColorInit";
import HeaderOne from "../../components/HeaderOne";
import FooterOne from "../../components/FooterOne";
import BottomFooter from "../../components/BottomFooter";
import Map from "../../components/Map";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showToast } from "../../components/ToastifyNotification";
import { login } from "../../api/authAPI";

const SignIn = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState('');

	const [emailOrPhone, setEmailOrPhone] = useState('');

	const sendOtp = async (e) => {
		e.preventDefault();
		try {
			if(!emailOrPhone){
				showToast('error','Email or Phone number is required')
				return;
			}
			const data = {
				emailOrPhone:emailOrPhone
			}
			const response = await login(data);
			if (response.success == true) {
				showToast('success', response.message)
				navigate('/sign-in-otp-page', { state: { emailOrPhone } }); // Redirect upon successful login
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
				<div className="container">
					<div className="row">
						{/* <div className="col-md-7 p-0"></div> */}
						<div className="col-md-5 m-auto">
							<div className="border bg-white shadow border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-20 h-100 w-100">
								<h4 className="text-xxl mb-0">Sign In </h4>
								<hr />

								<form onSubmit={sendOtp}>

									<div className="mb-24">
										<label
											htmlFor="username"
											className="text-neutral-900  mb-8 fw-medium"
										>
											Please Enter Your Register Mobile No. or Email{" "}
											<span className="text-danger">*</span>{" "}
										</label>
										<input
											type="text"
											className="common-input"
											id="username"
											placeholder="Email or mobile no."
											onChange={(e) => setEmailOrPhone(e.target.value)}
										/>
									</div>

									<div className="mb-10 mt-20">
										<div className="flex-align gap-48 flex-wrap">
											{/* <a href="/otp-page" className="btn btn-main py-18 px-40">
												Submit
											</a> */}
											<button className="btn btn-main py-18 px-40" type="submit">Submit</button>
										</div>
									</div>
								</form>
								<div className="mt-20">
									<Link
										to="/sign-up"
										className="me-1 text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
									>
										Sign Up
									</Link>
									<span style={{ fontSize: "12px" }}>
										(If you not Register please clink on Sign Up)
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* FooterOne */}
			<FooterOne />

			{/* BottomFooter */}
			<BottomFooter />
		</>
	);
};

export default SignIn;
