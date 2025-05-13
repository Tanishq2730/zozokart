import React, { use, useEffect, useState } from "react";
import Card from "./common/card";
import { fetchFilters, fetchProducts } from "../api/productAPI";
import { useLocation } from "react-router-dom";

const ProductPageSection = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [filtersData, setFiltersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const location = useLocation();
  const { categoryId, searchKey } = location.state || {};

  const getProducts = async (filters) => {
    setLoading(true);
    try {
      const transformedFilters = Object.entries(filters)
        .filter(([_, value]) => value && value.length > 0)
        .reduce((acc, [key, values]) => {
          let formattedKey = key;

          if (key === "PRICE_RANGE" || key === "DISCOUNT") {
            acc[formattedKey] = values[0]; // Assuming [min, max]
          } else {
            acc[formattedKey] = values;
          }

          return acc;
        }, {});

      const data = await fetchProducts(transformedFilters);
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFiltersFromBackend = async () => {
    try {
      const data = await fetchFilters();
      if (data.success) {
        setFiltersData(data.data);
      }
    } catch (error) {
      console.error("Error fetching filters:", error);
    } finally {
      setFiltersLoading(false);
    }
  };

  useEffect(() => {
    getFiltersFromBackend();
  }, []);
  useEffect(() => {
    getProducts(selectedFilters);
  }, [selectedFilters]);
  useEffect(() => {
    if (categoryId) {
      setSelectedFilters({ CATEGORIES: [categoryId], searchKey: searchKey });
    } else {
      setSelectedFilters({ searchKey: searchKey });
    }
  }, [categoryId, searchKey]);

  const toggleFilter = (filterType, optionValue) => {
    // Receive optionValue
    setSelectedFilters((prev) => {
      const currentValues = prev[filterType] || [];
      let newValues;

      if (filterType === "PRICE_RANGE" || filterType === "DISCOUNT") {
        newValues = currentValues.includes(optionValue) ? [] : [optionValue];
      } else {
        newValues = currentValues.includes(optionValue)
          ? currentValues.filter((v) => v !== optionValue)
          : [...currentValues, optionValue];
      }

      return {
        ...prev,
        [filterType]: newValues,
      };
    });
  };

  const filteredProducts = products;

  // if (loading || filtersLoading) {
  //   return <div>Loading products and filters...</div>;
  // }

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 border-end">
          <div className="mainfiltercard">
            <div className="filtercard">
              <h6 className="mb-4">Filters</h6>
            </div>
            <div className="">
              {filtersData.map((filter) => (
                <div key={filter.title} className="filtercard">
                  <div className="headfilter">
                    <h4>{filter.title.replace("_", " ")}</h4>
                  </div>
                  {filter.options.map((option) => {
                    const isChecked =
                      selectedFilters[filter.title]?.includes(option.value) ||
                      false;
                    return (
                      <div key={option.value} className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={option.value}
                          checked={isChecked}
                          onChange={() =>
                            toggleFilter(filter.title, option.value)
                          } // Pass option.value
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.value}
                        >
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Listing Section */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-3">
                  <div className="catCard">
                    <Card key={product._id} product={product} />
                  </div>
                </div>
              ))
            ) : (
              <div>No product found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSection;
