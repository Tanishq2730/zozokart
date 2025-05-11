import React, { useEffect, useState } from "react";
import { getOrders } from "../../api/dashboardAPI";
import { getTransactions } from "../../api/transactionAPI";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      if (data.success) {
        setTransactions(data.data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="table-responsive">
      <table className="p-3 table table-striped table-bordered  text-16">
        <thead>
          <tr>
            <th className="text-18 py-5">ID</th>
            {/* <th className="text-18 py-5">User Name</th> */}
            <th className="text-18 py-5">Order ID</th>
            <th className="text-18 py-5">Payment ID</th>
            <th className="text-18 py-5">Payment Signature</th>
            <th className="text-18 py-5">Payment Method</th>
            <th className="text-18 py-5">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>
            <tr key={transaction._id} className="py-5">
              <td className="py-5">
                {transaction._id}
              </td>
              <td className="py-5">
                {transaction.orderId.orderUniqueId}
              </td>
              <td className="py-5">
                {transaction.paymentId}
              </td>
              <td className="py-5">
                {transaction.paymentSignature}
              </td>
              <td className="py-5">
                {transaction.paymentMethod}
              </td>
              <td className="py-5">
                {transaction.amount}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
