import React, { useEffect, useState } from "react";
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
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 fw-semibold" style={{fontSize:'18px'}}>💳 Transaction History</h5>
        </div>

        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-3 text-muted">Loading transactions...</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light text-nowrap">
                  <tr>
                    <th>ID</th>
                    <th>Order ID</th>
                    <th>Payment ID</th>
                    <th>Signature</th>
                    <th>Method</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 ? (
                    transactions.map((txn) => (
                      <tr key={txn._id} className="text-nowrap">
                        <td className="text-break small text-muted" style={{ maxWidth: 120 }}>
                          {txn._id}
                        </td>
                        <td>{txn.orderId?.orderUniqueId || "N/A"}</td>
                        <td className="small">{txn.paymentId}</td>
                        <td className="text-break small text-muted" style={{ maxWidth: 140 }}>
                          {txn.paymentSignature}
                        </td>
                        <td>
                          <span className="badge bg-light text-dark px-2 py-1">
                            {txn.paymentMethod}
                          </span>
                        </td>
                        <td className="fw-bold text-success">₹{txn.amount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        No transactions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
