import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function CommonCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav className="header-nav">
      <div className="nav-container">
        {categories.map((category) => (
          <div
            key={category._id}
            className="nav-item"
            onMouseEnter={() => setActiveCategory(category._id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button
              className={`nav-button ${activeCategory === category._id ? "active" : ""}`}
              onClick={() => navigate("/product", { state: { categoryId: category._id } })}
            >
              {category.name}
              <MdKeyboardArrowDown style={{ marginLeft: '5px', fontSize: '20px' }} />
            </button>

            {activeCategory === category._id && (
              <div className="mega-dropdown">
                <div className="dropdown-column">
                  <h4>Featured {category.name}</h4>
                  <div className="featured-links">
                    <a href="#">New Arrivals</a>
                    <a href="#">Best Sellers</a>
                  </div>
                </div>
                <div className="dropdown-column">
                  <h4>Categories</h4>
                  <ul>
                    <li><a href="#">All {category.name}</a></li>
                    <li><a href="#">Premium {category.name}</a></li>
                    <li><a href="#">Trending Now</a></li>
                    <li><a href="#">New Releases</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Shop By</h4>
                  <ul>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Rating</a></li>
                    <li><a href="#">Popularity</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Top Brands</h4>
                  <div className="brands">
                    <a href="#">Brand 1</a>
                    <a href="#">Brand 2</a>
                    <a href="#">Brand 3</a>
                    <a href="#">Brand 4</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
