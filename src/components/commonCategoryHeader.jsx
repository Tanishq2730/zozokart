import { useNavigate } from "react-router-dom";
import {
  fetchCategories,
  fetchSubCategoriesOne,
  fetchSubCategoriesTwo
} from "../api/homeAPI";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function CommonCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategoriesOne, setSubCategoriesOne] = useState([]);
  const [subCategoriesTwo, setSubCategoriesTwo] = useState([]);
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

  const getSubCategoriesOne = async () => {
    try {
      const data = await fetchSubCategoriesOne();
      if (data.success) {
        console.log(data.data);
        setSubCategoriesOne(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSubCategoriesTwo = async () => {
    try {
      const data = await fetchSubCategoriesTwo();
      if (data.success) {
        console.log(data.data);
        setSubCategoriesTwo(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
    getSubCategoriesOne();
    getSubCategoriesTwo();
  }, []);

  return (
    <nav className="header-nav">
      <div className="nav-container">
        {categories.map(category =>
          <div
            key={category._id}
            className="nav-item"
            onMouseEnter={() => setActiveCategory(category._id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button
              className={`nav-button ${activeCategory === category._id
                ? "active"
                : ""}`}
              onClick={() =>
                navigate("/product", { state: { categoryId: category._id } })}
            >
              {category.name}
              <MdKeyboardArrowDown
                style={{ marginLeft: "5px", fontSize: "20px" }}
              />
            </button>

            {activeCategory === category._id &&
              <div className="mega-dropdown">
                {subCategoriesOne
                  .filter(sub1 => sub1.categoryId === category._id)
                  .map(sub1 =>
                    <div key={sub1._id} className="dropdown-column">
                      <h4>
                        {/* {sub1.name} */}
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            navigate("/product", {
                              state: {
                                categoryId: category._id,
                                subCategoryOneId: sub1._id
                              }
                            });
                          }}
                        >
                          {sub1.name}
                        </a>
                      </h4>
                      <ul>
                        {subCategoriesTwo
                          .filter(sub2 => sub2.subCategoryOneId === sub1._id)
                          .map(sub2 =>
                            <li key={sub2._id}>
                              <a
                                href="#"
                                onClick={e => {
                                  e.preventDefault();
                                  navigate("/product", {
                                    state: {
                                      categoryId: category._id,
                                      subCategoryOneId: sub1._id,
                                      subCategoryTwoId: sub2._id
                                    }
                                  });
                                }}
                              >
                                {sub2.name}
                              </a>
                            </li>
                          )}
                      </ul>
                    </div>
                  )}
              </div>}
          </div>
        )}
      </div>
    </nav>
  );
}
