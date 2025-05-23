import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function HomeCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

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

  // Sample subcategories data (you can replace this with your API data)
  const subCategories = {
    featured: {
      title: "Featured",
      items: [
        "New Arrivals",
        "Best Sellers",
        "Top Rated",
        "Most Popular",
        "Featured Brands",
      ],
    },
    shopBy: {
      title: "Shop By",
      items: ["Price Range", "Discount", "Brand", "Rating", "Availability"],
    },
    priceRange: {
      title: "Price Range",
      items: [
        "Under ₹499",
        "₹500 - ₹999",
        "₹1000 - ₹1999",
        "₹2000 - ₹4999",
        "Above ₹5000",
      ],
    },
    collections: {
      title: "Collections",
      items: [
        "Premium Collection",
        "Trending Now",
        "New Releases",
        "Special Offers",
        "Clearance Sale",
      ],
    },
  };

  return (
    <>
      <style>
        {`
          .headerCategory {
            position: relative;
            z-index: 1000;
          }

          .innercatcard {
            position: relative;
            cursor: pointer;
          }

          .category-header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            position: relative;
            flex-direction: column;
          }

          .category-header img {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }

          .submenu {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            width: 400px;
            box-shadow: 0 4px 16px 0 rgba(0,0,0,.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            text-align: left;
          }

          .innercatcard:hover .submenu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .submenu-categories {
            width: 200px;
            background: #f9f9f9;
            padding: 15px 0;
            border-right: 1px solid #eee;
          }

          .submenu-category {
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s;
          }

          .submenu-category:hover {
            background: white;
            color: #2874f0;
          }

          .submenu-category.active {
            background: white;
            color: #2874f0;
          }

          .submenu-items {
            flex: 1;
            padding: 15px 20px;
            display: none;
          }

          .submenu-items.active {
            display: block;
          }

          .submenu-items-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .submenu-items-list a {
            color: #666;
            text-decoration: none;
            font-size: 14px;
            padding: 4px 0;
            transition: color 0.2s;
          }

          .submenu-items-list a:hover {
            color: #2874f0;
          }

          .arrow-icon {
            font-size: 16px;
            color: #000;
          }
        `}
      </style>
      <div className="headerCategory">
        <nav className="headcat text-white py-5">
          <div className="container-fluid">
            <div className="innerCategory">
              {categories &&
                categories.map((category) => (
                  <div
                    key={category._id}
                    className="innercatcard"
                    onMouseEnter={() => setActiveCategory(category._id)}
                    onMouseLeave={() => {
                      setActiveCategory(category._id);
                      setActiveSubCategory(category._id);
                    }}
                  >
                    <div className="category-header">
                      <img
                        src="/assets/images/category/categoryImg.png"
                        alt={category.name}
                      />
                      <div>
                        <span>{category.name}</span>
                        <MdKeyboardArrowDown className="arrow-icon" />
                      </div>
                    </div>

                    {activeCategory === category._id && (
                      <div className="submenu">
                        <div className="submenu-categories">
                          {Object.keys(subCategories).map((key) => (
                            <div
                              key={key}
                              className={`submenu-category ${
                                activeSubCategory === key ? "active" : ""
                              }`}
                              onMouseEnter={() => setActiveSubCategory(key)}
                            >
                              <span>{subCategories[key].title}</span>
                              <MdKeyboardArrowRight className="arrow-icon" />
                            </div>
                          ))}
                        </div>
                        {Object.keys(subCategories).map((key) => (
                          <div
                            key={key}
                            className={`submenu-items ${
                              activeSubCategory === key ? "active" : ""
                            }`}
                          >
                            <div className="submenu-items-list">
                              {subCategories[key].items.map((item, index) => (
                                <a key={index} href="#">
                                  {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
