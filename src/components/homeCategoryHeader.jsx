import { Link, useNavigate } from "react-router-dom";
import { fetchCategories, fetchSubCategoriesOne, fetchSubCategoriesTwo } from "../api/homeAPI";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IMAGE_URL } from "../utils/api-config";

export default function HomeCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategoriesOne, setSubCategoriesOne] = useState([]);
  const [subCategoriesTwo, setSubCategoriesTwo] = useState([]);
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
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        navigate("/product", {
                          state: {
                            categoryId: category._id
                          }
                        });
                      }}
                    >
                      <div className="category-header">
                        <img
                          src={`${IMAGE_URL}/${category.image}`}
                          alt={category.name}
                        />
                        <div>
                          <span>{category.name}</span>
                          <MdKeyboardArrowDown className="arrow-icon" />
                        </div>
                      </div>
                    </a>

                    {activeCategory === category._id && (
                      <div className="submenu">
                        <div className="submenu-categories">
                          {subCategoriesOne
                            .filter(sub1 => sub1.categoryId === category._id)
                            .map(sub1 => (
                              <div
                                key={sub1._id}
                                className={`submenu-category ${activeSubCategory === sub1._id ? "active" : ""}`}
                                onMouseEnter={() => setActiveSubCategory(sub1._id)}
                              >
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
                                  <span>{sub1.name}</span>
                                </a>
                                <MdKeyboardArrowRight className="arrow-icon" />
                              </div>
                            ))}
                        </div>

                        {subCategoriesOne
                          .filter(sub1 => sub1.categoryId === category._id)
                          .map(sub1 => (
                            <div
                              key={sub1._id}
                              className={`submenu-items ${activeSubCategory === sub1._id ? "active" : ""}`}
                            >
                              <div className="submenu-items-list">
                                {subCategoriesTwo
                                  .filter(sub2 => sub2.subCategoryOneId === sub1._id)
                                  .map(sub2 => (
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
