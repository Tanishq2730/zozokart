import { Search, ShoppingCart, User, MapPin, Gift } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../reducers/authReducer";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productAPI";

// Add styles
const searchStyles = {
  searchContainer: {
    transition: "all 0.3s ease",
  },
  searchInput: {
    transition: "all 0.3s ease",
  },
  searchButton: {
    transition: "background-color 0.3s ease",
  },
  suggestionItem: {
    transition: "background-color 0.2s ease",
  },
};

export default function HeaderOne() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const user = useSelector((state) => state.auth?.user);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [skipFetch, setSkipFetch] = useState(false);

  useEffect(() => {
    if (skipFetch) {
      setSkipFetch(false); // Reset flag
      return;
    }
    const delayDebounce = setTimeout(() => {
      const fetchSuggestions = async () => {
        if (query.trim()) {
          setLoading(true);
          try {
            const response = await fetchProducts({ searchKey: query }); // Pass query if needed
            if (response.success) {
              setSuggestions(response.data);
              setShowDropdown(true);
            }
          } catch (error) {
            console.error("Error fetching suggestions:", error);
          } finally {
            setLoading(false);
          }
        } else {
          setSuggestions([]);
          setShowDropdown(false);
        }
      };

      fetchSuggestions();
    }, 300); // Debounce by 300ms

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (suggestion) => {
    setSkipFetch(true);
    setQuery(suggestion);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    // if (query.trim()) {
    navigate("/product", {
      state: { categoryId: categoryId, searchKey: query },
    });
    // }
  };

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      if (data.success) {
        console.log(data.data);
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
  const totalQuantity =
    cart.items?.length > 0
      ? cart.items?.reduce((total, item) => total + parseInt(item.quantity), 0)
      : 0; // ✅ If cart is empty, totalQuantity = 0

  // Calculate total price
  const totalAmount =
    cart.items?.length > 0
      ? cart.items?.reduce(
          (total, item) =>
            total + item.quantity * (item.product_variation?.sale_price || 0),
          0
        )
      : 0; // ✅ If cart is empty, totalAmount = 0

  return (
    <div className="headers">
      <div className="mainheader text-dark px-5 py-5">
        <div className="container">
          <header className="align-items-center justify-content-between">
            {/* Logo */}
            <div className="row">
              <div className="col-md-2">
                <div
                  className="h3 fw-bold mb-0 logo"
                  onClick={() => navigate(`/`)}
                >
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </div>
              </div>

              {/* Search Bar with Dropdown */}
              <div className="col-md-6 m-auto">
                <div
                  className="position-relative searchBar"
                  style={searchStyles.searchContainer}
                >
                  <div className="input-group" style={{ alignItems: "center" }}>
                    <Search className="text-white" size={18} />
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="Search products, brands and more"
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                      style={{
                        ...searchStyles.searchInput,
                        height: "40px",
                        fontSize: "14px",
                        backgroundColor: "#f0f5ff",
                        border: "1px solid #f8f9fa",
                        borderRadius: "2px 0 0 2px",
                        padding: "0 16px",
                      }}
                    />
                  </div>

                  {loading && (
                    <div
                      className="position-absolute end-0 p-2"
                      style={{ top: "40px" }}
                    >
                      <div
                        className="spinner-border spinner-border-sm text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}

                  {showDropdown && suggestions.length > 0 && (
                    <div
                      className="position-absolute w-100 mt-1"
                      style={{ zIndex: 1000 }}
                    >
                      <ul className="list-unstyled bg-white border rounded shadow py-2 mb-0">
                        {suggestions.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelect(item.name)}
                            className="px-3 py-2 cursor-pointer"
                            style={{
                              ...searchStyles.suggestionItem,
                              fontSize: "14px",
                              cursor: "pointer",
                            }}
                            onMouseOver={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#f8f9fa")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "transparent")
                            }
                          >
                            <Search size={14} className="me-2 text-muted" />
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Icons */}
              <div className="col-md-4 m-auto">
                <div className="d-flex gap-4 justify-content-around align-items-center">
                  <div className="text-center cursor-pointer">
                    <Link
                      className="account"
                      to={!isAuthenticated ? "/sign-in" : "/dashboard"}
                    >
                      <User size={20} />
                      <div
                        className="small"
                        style={{ textTransform: "capitalize" }}
                      >
                        {!isAuthenticated
                          ? "Account"
                          : user?.name || "My Account"}
                      </div>
                    </Link>
                  </div>

                  {/* <div className="text-center cursor-pointer">
                    <span className="return">Return & Orders</span>
                  </div> */}
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

                  <div className="text-center cursor-pointer">
                    <Link className="account" to={"/seller-sign-in"}>
                      <Gift size={20} />
                      <div className="small">Become a seller</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Categories Navigation */}
      
    </div>
  );
}
