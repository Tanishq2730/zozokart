// orderList.jsx
import React, { useEffect, useState } from "react";
import { getOrders } from "../api/dashboardAPI";
import { IMAGE_URL } from "../utils/api-config";

const OrderData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ orderStatus: [], orderTime: [] });

  const fetchOrders = async () => {
    try {
      const data = await getOrders(filters);
      if (data.success) {
        setOrders(data.data);
        setFilterOrders(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () => {
      fetchOrders();
    },
    [filters]
  );

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];

      return { ...prevFilters, [category]: newValues };
    });
  };

  const orderStatus = [
    "Pending",
    "Processing",
    "Out For Delivery",
    "Delivered",
    "Cancelled",
    "Returned",
    "Payment Failed",
    "Refunded"
  ];
  const currentYear = new Date().getFullYear();
  const orderTimes = [
    "Last 30 days",
    ...Array.from({ length: 5 }, (_, i) => (currentYear - i).toString()),
    "Older"
  ];

  const handleSearch = () => {
    const keyword = searchQuery.toLowerCase();
  
    const filtered = orders.filter(order =>
      order.orderRows[0]?.productId?.name?.toLowerCase().includes(keyword)
    );
  
    setFilterOrders(filtered);
  };

  useEffect(() => {
    const keyword = searchQuery.toLowerCase();
  
    const filtered = orders.filter(order =>
      order.orderRows[0]?.productId?.name?.toLowerCase().includes(keyword) || 
      order.orderStatus.toLowerCase().includes(keyword)
    );
  
    setFilterOrders(filtered);
  }, [searchQuery, orders]);

  return (
    <div className="container my-20 my-5">
      <div className="row">
        {/* Breadcrumb */}

        {/* Sidebar Filters */}
        <div className="col-md-3 px-4 filter">
          <div className="border bg-white p-20 ">
            <h5>Filters</h5>
            <hr />
            <div className="mb-3">
              <h6 className="fw-bold">ORDER STATUS</h6>
              {orderStatus.map((status, index) =>
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`status-${index}`}
                    checked={filters.orderStatus.includes(status)}
                    onChange={() => handleFilterChange("orderStatus", status)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`status-${index}`}
                  >
                    {status}
                  </label>
                </div>
              )}
            </div>
            <div>
              <h6 className="fw-bold mt-20">ORDER TIME</h6>
              {orderTimes.map((year, index) =>
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`time-${index}`}
                    checked={filters.orderTime.includes(year)}
                    onChange={() => handleFilterChange("orderTime", year)}
                  />
                  <label className="form-check-label" htmlFor={`time-${index}`}>
                    {year}
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="col-md-9">
          <div className="input-group mb-3 px-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search your orders here"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
            />
            <button className="btn btn-primary" type="button">
              <i className="bi bi-search" /> Search Orders
            </button>
          </div>
          {/* Order Card */}
          {filterOrders.map(order =>
            <div className="card mb-3 mx-3 productDetailing">
              <div className="row g-0 align-items-center p-20">
                <div className="col-md-2 text-center">
                  <img
                    src={`${IMAGE_URL}/${order.orderRows[0]?.productVariationId?.image || order.orderRows[0]?.productId?.images.mainImage}`}
                    className="img-fluid p-2"
                    alt="product"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title mb-1">
                      {order.orderRows[0].productId.name}
                    </h5>
                    {/* <p className="card-text mb-0 text-muted">
                      Color: White &nbsp;&nbsp; Size: 8
                    </p> */}
                    <p className="card-text fw-bold mt-2">
                      &#8377;{order.total}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3">
                    <p className="mb-1 text-success">
                      <i className="bi bi-circle-fill text-success" />
                      {order.orderStatus} on{" "}
                      {new Date(order.createdAt).toString().slice(0, 25)}
                    </p>
                    <p className="text-muted mb-2">
                      Your item has been {order.orderStatus}
                    </p>
                    <a href="#" className="text-primary text-decoration-none">
                      <i className="bi bi-star-fill" /> Rate & Review Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* No More Results */}
          {/* <div className="text-center py-4">
            <button className="btn btn-outline-primary" disabled>No More Results To Display</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderData;
