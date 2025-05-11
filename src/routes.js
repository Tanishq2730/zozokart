import React from "react";

const HomePageOne = React.lazy(() => import("./pages/HomePageOne"));
const ProductDetailsPageOne = React.lazy(() =>
  import("./pages/ProductDetailsPageOne")
);
const ProductDetailsPageTwo = React.lazy(() =>
  import("./pages/ProductDetailsPageTwo")
);
const CartPage = React.lazy(() => import("./pages/CartPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const AccountPage = React.lazy(() => import("./pages/AccountPage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));
const SignInOtpPage = React.lazy(() => import("./pages/auth/SignInOtpPage"));
const SignUp = React.lazy(() => import("./pages/auth/SignUp"));
const SignUpOtpPage = React.lazy(() => import("./pages/auth/SignUpOtpPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

const Dashboard = React.lazy(() => import("./pages/profile/Dashboard"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const ReturnsPolicy = React.lazy(() => import("./pages/ReturnsPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const ShippingPolicy = React.lazy(() => import("./pages/ShippingPolicy"));
const RefundPolicy = React.lazy(() => import("./pages/RefundPolicy"));
const VerifyOtp = React.lazy(() => import("./pages/auth/VerifyOtp"));
const OrderSuccess = React.lazy(() => import("./pages/OrderSuccess"));

const routes = [
  { path: "/", exact: true, name: "Home", component: HomePageOne },
  {
    path: "/product-details/:slug",
    exact: false,
    name: "Product Details One",
    component: ProductDetailsPageOne
  },
  {
    path: "/product-details-two",
    exact: true,
    name: "Product Details Two",
    component: ProductDetailsPageTwo
  },
  { path: "/cart", exact: true, name: "Cart", component: CartPage },
  { path: "/checkout", exact: true, name: "Checkout", component: CheckoutPage },
  { path: "/category", exact: true, name: "Checkout", component: CategoryPage },
  { path: "/product", exact: true, name: "Product", component: ProductPage },
  { path: "/account", exact: true, name: "Account", component: AccountPage },

  { path: "/contact", exact: true, name: "Contact", component: ContactPage },

  { path: "/sign-in", exact: true, name: "Sign In", component: SignIn },
  {
    path: "/sign-in-otp-page",
    exact: true,
    name: "Verify OTP",
    component: SignInOtpPage
  },

  {
    path: "/sign-up",
    exact: true,
    name: "Sign Up",
    component: SignUp
  },
  {
    path: "/sign-up-otp-page",
    exact: true,
    name: "Sign Up",
    component: SignUpOtpPage
  },
  // {
  //   path: "/verify-otp",
  //   exact: true,
  //   name: "Verify OTP",
  //   component: VerifyOtp
  // },

  { path: "/about", exact: true, name: "About", component: AboutPage },

  {
    path: "/privacy-policy",
    exact: true,
    name: "Privacy Policy",
    component: PrivacyPolicy
  },
  {
    path: "/returns-policy",
    exact: true,
    name: "Returns Policy",
    component: ReturnsPolicy
  },
  {
    path: "/terms-conditions",
    exact: true,
    name: "Terms and Conditions",
    component: TermsConditions
  },
  {
    path: "/shipping-policy",
    exact: true,
    name: "Shipping Policy",
    component: ShippingPolicy
  },
  {
    path: "/refund-policy",
    exact: true,
    name: "Refund Policy",
    component: RefundPolicy
  }
];

const privateRoutes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/order-success",
    exact: true,
    name: "Order Success",
    component: OrderSuccess
  }
];

export default { routes, privateRoutes };
