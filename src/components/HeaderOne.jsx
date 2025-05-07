import { Search, ShoppingCart, User, MapPin, Gift } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../reducers/authReducer";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";

export default function HeaderOne() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      if (data.success) {
        console.log(data.data)
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleLogout = () => {
        // Dispatch the logout action
        dispatch({ type: LOGOUT });
    };

    // cart system
    const cart = useSelector((state) => state.cart?.cart) || {}; // ✅ Ensure cart is always an array

    // Calculate total quantity of items
    const totalQuantity = cart.items?.length > 0 
    ? cart.items?.reduce((total, item) => total + parseInt(item.quantity), 0) 
    : 0; // ✅ If cart is empty, totalQuantity = 0

    // Calculate total price
    const totalAmount = cart.items?.length > 0 
    ? cart.items?.reduce((total, item) => total + item.quantity * (item.product_variation?.sale_price || 0), 0) 
    : 0; // ✅ If cart is empty, totalAmount = 0





  // const categories = [
  //   "All",
  //   "MX Player",
  //   "Sell",
  //   "Best Sellers",
  //   "Today's Deals",
  //   "Mobiles",
  //   "Electronics",
  //   "Customer Service",
  //   "Amazon Pay",
  //   "Prime",
  //   "Home & Kitchen",
  //   "New Releases",
  //   "Fashion",
  //   "Computers",
  //   "Car & Motorbike",
  // ];

  return (
    <div className="headers">
      <div className="mainheader text-dark px-5 py-5">
        <div className="container-fluid">
          <header className="align-items-center justify-content-between">
            {/* Logo */}
            <div className="row">
              <div className="col-md-4 m-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="h3 fw-bold mb-0 logo"
                      onClick={() => navigate(`/`)}
                    >
                      <img src="/assets/images/logo/logo.png" alt="Logo" />
                    </div>
                  </div>
                  <div className="col-md-6 m-auto">
                    <div className="location">
                      <MapPin />
                      <div className="locationDe">
                        <span>Delivery to Udaipur 313001</span>
                        <p>Update Location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar with Dropdown */}
              <div className="col-md-4 m-auto">
                <div className="input-group w-100">
                  {/* Dropdown for Categories */}
                  <select className="form-select bg-light searchdropdown">
                    {categories && categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  {/* Search Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Amazon"
                  />

                  {/* Search Button */}
                  <button className="btn btn-light">
                    <Search className="text-dark" />
                  </button>
                </div>
              </div>

              {/* Navigation Icons */}
              <div className="col-md-4 m-auto">
                <div className="d-flex gap-4 justify-content-end align-items-center">
                  <div className="text-center cursor-pointer">
                    <Link className="account" to={!isAuthenticated ? "/sign-in":"/dashboard"}>
                      <User size={20} />
                      <div className="small">{!isAuthenticated ? "Account":"Dashboard"}</div>
                    </Link>
                  </div>

                  {/* <div className="text-center cursor-pointer">
                    <span className="return">Return & Orders</span>
                  </div> */}
                  
                  <div className="text-center cursor-pointer">
                    <Link className="account" to={"/seller-sign-in"}>
                      <Gift size={20} />
                      <div className="small">Become a seller</div>
                    </Link>
                  </div>

                  <div
                    className="text-center position-relative cursor-pointer"
                    onClick={() => navigate(`/cart`)}
                  >
                    <ShoppingCart size={20} />
                    <div className="small">Cart</div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalQuantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="headerCategory">
        <nav className="headcat text-white py-5">
          <div className="container-fluid mx-auto flex space-x-4 m-auto px-4">
            {categories && categories.map((category) => (
              <span
              key={category._id}
              className="cursor-pointer hover:underline whitespace-nowrap"
              >
                {console.log(category.name)}
                {category.name}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
