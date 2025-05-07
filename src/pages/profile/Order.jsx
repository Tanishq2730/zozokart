import React, { useEffect, useState } from "react";
import { getOrders } from "../../api/dashboardAPI";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      if (data.success) {
        setOrders(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  // const orders = [
  //   {
  //     id: 1,
  //     userName: 'John Doe',
  //     product: 'Martial Arts Gloves',
  //     quantity: 2,
  //     price: '₹30',
  //     status: 'Delivered',
  //   },
  //   {
  //     id: 2,
  //     userName: 'Jane Smith',
  //     product: 'Karate Uniform',
  //     quantity: 1,
  //     price: '₹50',
  //     status: 'Shipped',
  //   },
  //   {
  //     id: 3,
  //     userName: 'Sam Johnson',
  //     product: 'Training Shoes',
  //     quantity: 1,
  //     price: '₹70',
  //     status: 'Processing',
  //   },
  // ];

  return (
    <div className="table-responsive">
      <table className="p-3 table table-striped table-bordered  text-16">
        <thead>
          <tr>
            <th className="text-18 py-5">ID</th>
            {/* <th className="text-18 py-5">User Name</th> */}
            <th className="text-18 py-5">Product</th>
            <th className="text-18 py-5">Quantity</th>
            <th className="text-18 py-5">Price</th>
            <th className="text-18 py-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order =>
            <tr key={order.orderId} className="py-5">
              <td className="py-5">
                {order.orderUniqueId}
              </td>
              <td className="py-5">
                {order.orderRows[0].productId.name}
              </td>
              <td className="py-5">
                {order.orderRows[0].quantity}
              </td>
              <td className="py-5">
                {order.total}
              </td>
              <td className="py-5">
                <span class="badge bg-success">
                  {order.orderStatus}
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
