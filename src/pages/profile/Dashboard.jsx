import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../../helper/ColorInit";
import HeaderOne from "../../components/HeaderOne";
import FooterOne from "../../components/FooterOne";
import BottomFooter from "../../components/BottomFooter";
import Breadcrumb from "../../components/Breadcrumb";
import OrderList from "./Order";
import Download from "./Download";
import Addresses from "./Addresses";
import AccountDetail from "./AccountDetail";
import Wallet from "./Wallet";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../reducers/authReducer";
import TransactionList from "./Transaction";
import NotificationList from "./Notification";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
  const user = useSelector(state => state.auth?.user);

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/sign-in')
    }
  }, [isAuthenticated])
  
  const handleLogout = () => {
      // Dispatch the logout action
      dispatch({ type: LOGOUT });
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

      {/* main section */}

      <Breadcrumb title={"Dashboard"} style={{ marginBottom: "0px" }} />

      <section className="pt-10 pb-10">
        <div className="container">
          <div
            className="col-12 d-flex px-20 py-30 dashcardtop"
            style={{
            //   backgroundImage: "url(assets/images/common/web-banner.jpg)",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          >
            <img
              src="assets/images/common/profile-pic.jpg"
              alt=""
              width="100px"
              className="rounded"
            />
            <div className="ms-10 mt-3 dashdetail">
              <h5 className="text-18 mb-0">{user.name}</h5>
              <p className="mb-0">{user.email}</p>
              <p className="mb-0">{user.phone}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-30 mb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-3 border py-30">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active st-active text-black"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Dashboard
                </button>
                <button
                  className="nav-link st-active text-black"
                  id="v-pills-order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-order"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-order"
                  aria-selected="false"
                >
                  Orders
                </button>
                <button
                  className="nav-link st-active text-black"
                  id="v-pills-transaction-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-transaction"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-transaction"
                  aria-selected="false"
                >
                  Transactions
                </button>
                <button
                  className="nav-link st-active text-black"
                  id="v-pills-addresses-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-addresses"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-addresses"
                  aria-selected="false"
                >
                  Addresses
                </button>
                <button
                  className="nav-link st-active text-black"
                  id="v-pills-accountdetail-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-accountdetail"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-accountdetail"
                  aria-selected="false"
                >
                  Account details
                </button>
                <button
                  className="nav-link st-active text-black"
                  id="v-pills-notification-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-notification"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-notification"
                  aria-selected="false"
                >
                  All Notifications
                </button>
                {/* <button
                  className="nav-link st-active text-black"
                  id="v-pills-wallet-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-wallet"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-wallet"
                  aria-selected="false"
                >
                  Wallet
                </button> */}
                <button
                  className="nav-link st-active text-black"
                  // id="v-pills-wallet-tab"
                  // data-bs-toggle="pill"
                  // data-bs-target="#v-pills-wallet"
                  type="button"
                  role="tab"
                  // aria-controls="v-pills-wallet"
                  aria-selected="false"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content border p-20" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h4>Dashboard</h4>
                  <hr></hr>
                  <h5 className="text-16">Hello {user.name}</h5>
                  <p className="mb-20">
                    From your account dashboard you can view your recent orders,
                    manage your shipping and billing addresses, and edit your
                    password and account details.
                  </p>
                  <div className="row">
                    <div className="col-md-4 mb-10">
                      <div className="p-20 border">
                        <Link>
                          <h2 className="mb-0 me-10 text-26">06</h2>
                          <h5 className="text-18 mt-0">Total Orders</h5>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="p-20 border">
                        <Link>
                          <h2 className="mb-0 me-10 text-26">06</h2>
                          <h5 className="text-18 mt-0">Downloads</h5>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="p-20 border">
                        <Link>
                          <i className="ph ph-map-pin-area text-22"></i>
                          <h5 className="text-18 mt-0">Addresses</h5>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10 text-26">
                      <div className="p-20 border">
                        <i className="ph ph-user text-22"></i>
                        <h5 className="text-18 mt-0">Account details</h5>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="p-20 border">
                        <h2 className="mb-0 me-10 text-26">
                          <b> ₹ 500.00</b>
                        </h2>
                        <h5 className="text-18 mt-0">Wallet Balance</h5>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="p-20 border">
                        <button onClick={handleLogout}>
                          <i className="ph ph-sign-out text-22"></i>
                          <h5 className="text-18 mt-0">Logout</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-order"
                  role="tabpanel"
                  aria-labelledby="v-pills-order-tab"
                >
                  <h4>Orders</h4>
                  <hr></hr>
                  <OrderList />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-transaction"
                  role="tabpanel"
                  aria-labelledby="v-pills-transaction-tab"
                >
                  <h4>Transactions</h4>
                  <hr></hr>
                  <TransactionList />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-notification"
                  role="tabpanel"
                  aria-labelledby="v-pills-notification-tab"
                >
                  <h4>Notifications</h4>
                  <hr></hr>
                  <NotificationList />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-download"
                  role="tabpanel"
                  aria-labelledby="v-pills-download-tab"
                >
                  <h4>Download</h4>
                  <hr></hr>
                  <Download />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-addresses"
                  role="tabpanel"
                  aria-labelledby="v-pills-addresses-tab"
                >
                  
                  <Addresses />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-accountdetail"
                  role="tabpanel"
                  aria-labelledby="v-pills-accountdetail-tab"
                >
                  <h4>Account Detail</h4>
                  <hr></hr>
                  <AccountDetail />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-wallet"
                  role="tabpanel"
                  aria-labelledby="v-pills-wallet-tab"
                >
                  <h4>Wallet</h4>
                  <hr></hr>
                  <Wallet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex align-items-start"></div>

      {/* main section close */}

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default Dashboard;
