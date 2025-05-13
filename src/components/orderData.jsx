// orderList.jsx
import React from 'react';

const OrderData = () => {
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
              {['On the way', 'Delivered', 'Cancelled', 'Returned'].map((status, index) => (
                <div className="form-check" key={index}>
                  <input className="form-check-input" type="checkbox" id={`status-${index}`} />
                  <label className="form-check-label" htmlFor={`status-${index}`}>{status}</label>
                </div>
              ))}
            </div>
            <div>
              <h6 className="fw-bold mt-20">ORDER TIME</h6>
              {['Last 30 days', '2024', '2023', '2022', '2021', 'Older'].map((year, index) => (
                <div className="form-check" key={index}>
                  <input className="form-check-input" type="checkbox" id={`time-${index}`} />
                  <label className="form-check-label" htmlFor={`time-${index}`}>{year}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="col-md-9">
          <div className="input-group mb-3 px-3">
            <input type="text" className="form-control" placeholder="Search your orders here" />
            <button className="btn btn-primary" type="button">
              <i className="bi bi-search"></i> Search Orders
            </button>
          </div>

          {/* Order Card */}
          <div className="card mb-3 mx-3 productDetailing">
            <div className="row g-0 align-items-center p-20">
              <div className="col-md-2 text-center">
                <img src="/assets/images/product/p4.png" className="img-fluid p-2" alt="product" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title mb-1">BIRDE Super Stylish Clog Men White Sandal...</h5>
                  <p className="card-text mb-0 text-muted">Color: White &nbsp;&nbsp; Size: 8</p>
                  <p className="card-text fw-bold mt-2">&#8377;239</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3">
                  <p className="mb-1 text-success"><i className="bi bi-circle-fill text-success"></i> Delivered on Oct 13, 2023</p>
                  <p className="text-muted mb-2">Your item has been delivered</p>
                  <a href="#" className="text-primary text-decoration-none">
                    <i className="bi bi-star-fill"></i> Rate & Review Product
                  </a>
                </div>
              </div>
            </div>
          </div>

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
