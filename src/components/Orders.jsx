import { Eye, Package, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Orders() {
  const [orders] = useState([
    {
      id: "d4063ddb-9778-4d65-94b9-8a47650e6818",
      user: "Ma Pérez",
      email: "maria.perez@gmail.com",
      total: "USD 195.00",
      status: "completed",
      date: "2024-01-15",
      items: 3,
    },
    {
      id: "08aecde2b-9596-469b-ae22-a9bd8ec5b266",
      user: "John Doe",
      email: "john.doe@gmail.com",
      total: "USD 195.00",
      status: "pending",
      date: "2024-01-14",
      items: 2,
    },
    {
      id: "87e4abe0-66f6-4f5e-8b82-e49a14f45f5e",
      user: "Melissa Segovia",
      email: "melissa.segovia@gmail.com",
      total: "USD 233.00",
      status: "processing",
      date: "2024-01-13",
      items: 1,
    },
    {
      id: "7a12695b-e672-46ce-8e84-5fc3071a817f",
      user: "Antonio Soto",
      email: "antonio.soto@gmail.com",
      total: "USD 460.00",
      status: "completed",
      date: "2024-01-12",
      items: 5,
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} />;
      case "processing":
        return <Package size={16} />;
      case "pending":
        return <Clock size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <div className="page-container">
      <div className="page-actions">
        <h2 className="page-title">Orders</h2>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={{ fontFamily: "monospace" }}>
                  {order.id.substring(0, 8)}...
                </td>
                <td>
                  <div className="table-user-info">
                    <div className="table-user-name">{order.user}</div>
                    <div className="table-user-email">{order.email}</div>
                  </div>
                </td>
                <td>{order.date}</td>
                <td>{order.items}</td>
                <td>
                  <div className={`status-badge status-${order.status}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </td>
                <td className="table-user-name">{order.total}</td>
                <td>
                  <button className="btn-icon view" title="View order details">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
