import React from 'react';

const OrderList = () => {
  const orders = [
    {
      id: 1,
      userName: 'John Doe',
      product: 'Martial Arts Gloves',
      quantity: 2,
      price: '₹30',
      status: 'Delivered',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      product: 'Karate Uniform',
      quantity: 1,
      price: '₹50',
      status: 'Shipped',
    },
    {
      id: 3,
      userName: 'Sam Johnson',
      product: 'Training Shoes',
      quantity: 1,
      price: '₹70',
      status: 'Processing',
    },
  ];

  return (
    <div className='table-responsive'>

      <table className='p-3 table table-striped table-bordered  text-16'>
        <thead>
          <tr>
            <th className='text-18 py-5'>ID</th>
            <th className='text-18 py-5'>User Name</th>
            <th className='text-18 py-5'>Product</th>
            <th className='text-18 py-5'>Quantity</th>
            <th className='text-18 py-5'>Price</th>
            <th className='text-18 py-5'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className='py-5'>
              <td className='py-5'>{order.id}</td>
              <td className='py-5'>{order.userName}</td>
              <td className='py-5'>{order.product}</td>
              <td className='py-5'>{order.quantity}</td>
              <td className='py-5'>{order.price}</td>
              <td className='py-5'>
                 <span class="badge bg-success">{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
