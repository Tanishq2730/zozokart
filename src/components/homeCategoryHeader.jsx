import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";
import { useEffect, useState } from "react";

export default function HomeCategoryHeader() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
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
                    onClick={() =>
                      navigate("/product", {
                        state: { categoryId: category._id },
                      })
                    }
                  >
                    <img
                      src="/assets/images/category/categoryImg.png"
                    />
                    <span>{category.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
