import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
} from "../services/adminOrderService";

import DashboardCards from "../components/admin/DashboardCards";

import "./AdminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    const results = orders.filter((order) =>
      order.customer_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredOrders(results);
  }, [search, orders]);

  const loadOrders = async () => {
    try {
      const data = await getAllOrders();

      setOrders(data.orders);
      setFilteredOrders(data.orders);
    } catch (error) {
      console.error(error);
      alert("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (index, value) => {
    const updated = [...filteredOrders];

    updated[index].status = value;

    setFilteredOrders(updated);
  };

  const handleUpdate = async (order) => {
    try {
      await updateOrderStatus(order.id, order.status);

      alert("Order updated successfully.");

      loadOrders();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">

      <h2 className="text-center mb-4">
        Amar Organic Milk Admin Dashboard
      </h2>

      <DashboardCards orders={orders} />

      <div className="row mb-4">

        <div className="col-md-6">

          <input
            className="form-control"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      <div className="table-responsive">

        <table className="table table-bordered table-hover">

          <thead>

            <tr>

              <th>ID</th>

              <th>Customer</th>

              <th>Phone</th>

              <th>Email</th>

              <th>City</th>

              <th>Payment</th>

              <th>Total</th>

              <th>Status</th>

              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order, index) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer_name}</td>

                <td>{order.phone}</td>

                <td>{order.email}</td>

                <td>{order.city}</td>

                <td>{order.payment_method}</td>

                <td>${Number(order.total).toFixed(2)}</td>

                <td>

                  <select
                    className="form-select"
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        index,
                        e.target.value
                      )
                    }
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </td>

                <td>
                  {new Date(
                    order.created_at
                  ).toLocaleString()}
                </td>

                <td>

                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handleUpdate(order)
                    }
                  >
                    Save
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

export default AdminOrders;