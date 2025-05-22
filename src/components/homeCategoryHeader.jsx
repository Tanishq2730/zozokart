import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function HomeCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

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

          .category-header span {
            margin-right: 0px; /* Add space for the arrow */
          }

          .arrow-icon {
            font-size: 20px;
            color: currentColor;
          }

          .innercatcard:hover .arrow-icon {
            transform: translateY(0%) rotate(-180deg);
          }

          .submenu {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 600px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-radius: 8px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 1000;
          }

          .innercatcard:hover .submenu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .submenu-content {
            display: flex;
            padding: 24px;
            gap: 32px;
          }

          .submenu-column {
            flex: 1;
          }

          .submenu-column h4 {
            color: #333;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .submenu-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .submenu-links a {
            color: #666;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s ease;
          }

          .submenu-links a:hover {
            color: #000;
          }

          /* Adjust submenu position for items near the right edge */
          .innercatcard:nth-last-child(-n+3) .submenu {
            left: auto;
            right: 0;
          }
        `}
      </style>
      {/* Categories Navigation */}
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
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div
                      className="category-header"
                      onClick={() =>
                        navigate("/product", {
                          state: { categoryId: category._id },
                        })
                      }
                    >
                      <img src="/assets/images/category/categoryImg.png" />
                      <div>
                        <span>{category.name}</span>
                        <MdKeyboardArrowDown
                          className="arrow-icon"
                          style={{ color: "#000" }}
                        />
                      </div>
                    </div>

                    {activeCategory === category._id && (
                      <div className="submenu">
                        <div className="submenu-content">
                          <div className="submenu-column">
                            <h4>Featured {category.name}</h4>
                            <div className="submenu-links">
                              <a href="#">New Arrivals</a>
                              <a href="#">Best Sellers</a>
                              <a href="#">Top Rated</a>
                            </div>
                          </div>
                          <div className="submenu-column">
                            <h4>Shop By</h4>
                            <div className="submenu-links">
                              <a href="#">Price</a>
                              <a href="#">Discount</a>
                              <a href="#">Brand</a>
                              <a href="#">Rating</a>
                            </div>
                          </div>
                          <div className="submenu-column">
                            <h4>Collections</h4>
                            <div className="submenu-links">
                              <a href="#">Premium {category.name}</a>
                              <a href="#">Trending Now</a>
                              <a href="#">New Releases</a>
                              <a href="#">Special Offers</a>
                            </div>
                          </div>
                        </div>
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
