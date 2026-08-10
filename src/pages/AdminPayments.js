import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { getAllPayments } from "../services/paymentService";

function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPayments();
  }, []);

  useEffect(() => {
    const searchText = search.toLowerCase();

    const results = payments.filter((payment) => {
      return (
        String(payment.customer_name || "")
          .toLowerCase()
          .includes(searchText) ||
        String(payment.email || "")
          .toLowerCase()
          .includes(searchText) ||
        String(payment.payment_method || "")
          .toLowerCase()
          .includes(searchText)
      );
    });

    setFilteredPayments(results);
  }, [search, payments]);

  const loadPayments = async () => {
    try {
      const data = await getAllPayments();

      setPayments(data.payments || []);
      setFilteredPayments(data.payments || []);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="container-fluid mt-4">
          <h2>Loading Payments...</h2>
        </div>
      </AdminLayout>
    );
  }

  const totalRevenue = filteredPayments.reduce(
    (sum, payment) =>
      sum + Number(payment.total || 0),
    0
  );

  return (
    <AdminLayout>
      <div className="container-fluid mt-4">

        <h2 className="mb-4">
          Payment Management
        </h2>

        {/* Summary */}
        <div className="row mb-4">

          <div className="col-md-4">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h5>Total Payments</h5>
                <h2>{filteredPayments.length}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h5>Total Revenue</h5>
                <h2>
                  ${totalRevenue.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h5>Payment Records</h5>
                <h2>
                  {payments.length}
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Search */}
        <div className="row mb-4">

          <div className="col-md-6">

            <input
              type="text"
              className="form-control"
              placeholder="Search customer, email or payment method..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

        {/* Payment Table */}
        <div className="table-responsive">

          <table className="table table-bordered table-hover">

            <thead className="table-primary">

              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>

            </thead>

            <tbody>

              {filteredPayments.length === 0 ? (

                <tr>
                  <td
                    colSpan="7"
                    className="text-center"
                  >
                    No payment records found.
                  </td>
                </tr>

              ) : (

                filteredPayments.map((payment) => (

                  <tr key={payment.id}>

                    <td>
                      #{payment.id}
                    </td>

                    <td>
                      {payment.customer_name}
                    </td>

                    <td>
                      {payment.email}
                    </td>

                    <td>
                      {payment.payment_method}
                    </td>

                    <td>
                      $
                      {Number(
                        payment.total
                      ).toFixed(2)}
                    </td>

                    <td>
                      <span
                        className={
                          payment.status ===
                          "Delivered"
                            ? "badge bg-success"
                            : payment.status ===
                              "Cancelled"
                            ? "badge bg-danger"
                            : "badge bg-warning text-dark"
                        }
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        payment.created_at
                      ).toLocaleString()}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminPayments;