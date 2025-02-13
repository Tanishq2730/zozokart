import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPass from "./pages/auth/ForgotPass";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import AboutPage from "./pages/AboutPage";
import "animate.css/animate.min.css";
import SubscriptionCalendar from "./components/SubscriptionCalendar";
import Dashboard from "./pages/profile/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import TermsConditions from "./pages/TermsConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import A2Ghee from "./pages/subpages/A2Ghee";
import A2Milk from "./pages/subpages/A2Milk";
import OtpPage from "./pages/auth/OtpPage";
import VerifyOtp from "./pages/auth/VerifyOtp";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/product-details" element={<ProductDetailsPageOne />} />
        <Route exact path="/product-details-two" element={<ProductDetailsPageTwo />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/category" element={<CategoryPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/subscription" element={<SubscriptionPlan />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />

        <Route exact path="/subs" element={<SubscriptionCalendar />} />

        {/* auth */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/otp-page" element={<OtpPage />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/forgot-pass" element={<ForgotPass />} />
        <Route exact path="/verify-otp" element={<VerifyOtp />} />


        {/* profile */}
        <Route exact path="/dashboard" element={<Dashboard />} />

        {/* other pages */}
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/returnpolicy" element={<ReturnsPolicy />} />
        <Route exact path="/termscondition" element={<TermsConditions />} />
        <Route exact path="/shipping" element={<ShippingPolicy />} />
        <Route exact path="/refundpolicy" element={<RefundPolicy />} />

        {/* subpages */}
        <Route exact path="/a2ghee" element={<A2Ghee />} />
        <Route exact path="/a2milk" element={<A2Milk />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
