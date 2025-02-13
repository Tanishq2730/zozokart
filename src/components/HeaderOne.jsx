import { Search, ShoppingCart, User, MapPin } from "lucide-react";


export default function HeaderOne() {
  const categories = [
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Electronics",
    "Customer Service",
    "Amazon Pay",
    "Prime",
    "Home & Kitchen",
    "New Releases",
    "Fashion",
    "Computers",
    "Car & Motorbike",
  ];
  return (
    <div className="headers">
      <div className="mainheader text-dark px-5 py-5">
        <div className="container-fluid">
          <header className="align-items-center justify-content-between">
            {/* Logo */}
            <div className="row">
              <div className="col-md-4 m-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="h3 fw-bold mb-0 logo">
                        <img src="assets/images/logo/logo.png" />
                    </div>
                  </div>
                  <div className="col-md-6 m-auto">
                    <div className="location">
                      <MapPin />
                      <div className="locationDe">
                        <span>Delivery to Udaipur 313001</span>
                        <p>Update Location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="col-md-4 m-auto">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Amazon"
                  />
                  <button className="btn btn-light">
                    <Search className="text-dark" />
                  </button>
                </div>
              </div>

              {/* Navigation Icons */}
              <div className="col-md-4 m-auto">
                <div className="d-flex gap-4 justify-content-end align-items-center">
                  <div className="text-center cursor-pointer">
                    <User size={20} />
                    <div className="small">Account</div>
                  </div>

                  <div className="text-center cursor-pointer">
                    <span className="return">Return & Orders</span>
                  </div>

                  <div className="text-center position-relative cursor-pointer">
                    <ShoppingCart size={20} />
                    <div className="small">Cart</div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="headerCategory">
        <nav className="headcat text-white py-5">
          <div className="container-fluid mx-auto flex space-x-4 m-auto px-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className="cursor-pointer hover:underline whitespace-nowrap"
              >
                {category}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
