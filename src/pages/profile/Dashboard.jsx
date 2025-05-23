import React, { useEffect, useState } from "react";
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
import { ChevronRight, List, LogOut, UserRound } from "lucide-react";
import CommonCategoryHeader from "../../components/commonCategoryHeader";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const user = useSelector((state) => state.auth?.user);

  const [activeTab, setActiveTab] = useState("accountDetail");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <>
      <Preloader />
      <ScrollToTop smooth color="#299E60" />
      <ColorInit color={false} />
      <HeaderOne />
      <CommonCategoryHeader/>
      <Breadcrumb title={"Dashboard"} />

      <section className="pt-30" style={{ backgroundColor: "#f1f3f6" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <section className="">
                <div className="col-12 d-flex dashcardtop p-10">
                  <img
                    src="/zozo_cart_website/assets/images/common/profile-pic.jpg"
                    alt=""
                    width="100px"
                    className="rounded"
                  />
                  <div className="ms-10 mt-3 dashdetail">
                    <span className="text-dark">Hello,</span>
                    <h5 className="text-18 mb-0">{user.name}</h5>
                  </div>
                </div>
              </section>
              <section>
                <div className="dashcardtop mt-20 mb-20">
                  <div className="menuList">
                    <Link to="/order-list" >
                      <div className="innerMenuLists">
                        <div className="iconlist">
                          <List />
                          <h5 className="mb-0">My Orders</h5>
                        </div>
                        <ChevronRight />
                      </div>
                    </Link>
                    <hr className="m-0" />
                    <div className="innerMenuList">
                      <div className="iconlist">
                        <UserRound />
                        <h5 className="mb-0">Account Setting</h5>
                      </div>
                      <Link to="#" className="mt-10" onClick={() => setActiveTab("accountDetail")}>
                        <div className="innerList">
                          <span>Account Information</span>
                        </div>
                      </Link>
                      <Link to="#" onClick={() => setActiveTab("addresses")}>
                        <div className="innerList">
                          <span>Manage Address</span>
                        </div>
                      </Link>
                      <Link to="#" onClick={() => setActiveTab("transaction")}>
                        <div className="innerList">
                          <span>Transaction</span>
                        </div>
                      </Link>
                      <Link to="#" onClick={() => setActiveTab("notification")}>
                        <div className="innerList">
                          <span>All Notification</span>
                        </div>
                      </Link>
                    </div>
                    <hr className="m-0" />
                    <Link to="#" onClick={handleLogout}>
                      <div className="innerMenuLists">
                        <div className="iconlist">
                          <LogOut />
                          <h5 className="mb-0">Logout</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-9 mb-20">
              <div className="dashcardtop p-10">
              {activeTab === "orders" && <OrderList />}
              {activeTab === "transaction" && <TransactionList />}
              {activeTab === "notification" && <NotificationList />}
              {activeTab === "addresses" && <Addresses />}
              {activeTab === "accountDetail" && <AccountDetail />}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
      <BottomFooter />
    </>
  );
};

export default Dashboard;
