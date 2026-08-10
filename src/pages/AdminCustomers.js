import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { getAllCustomers } from "../services/userService";

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCustomers();
  }, []);

  useEffect(() => {
    const results = customers.filter((customer) => {
      const searchText = search.toLowerCase();

      return (
        customer.full_name
          .toLowerCase()
          .includes(searchText) ||
        customer.email
          .toLowerCase()
          .includes(searchText) ||
        customer.phone
          .toLowerCase()
          .includes(searchText)
      );
    });

    setFilteredCustomers(results);
  }, [search, customers]);

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers();

      setCustomers(data.customers || []);
      setFilteredCustomers(data.customers || []);
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
          <h2>Loading Customers...</h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container-fluid mt-4">

        <h2 className="mb-4">
          Customer Management
        </h2>

        {/* Search */}
        <div className="row mb-4">

          <div className="col-md-6">

            <input
              type="text"
              className="form-control"
              placeholder="Search by name, email or phone..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="col-md-6 text-end">

            <strong>
              Total Customers: {filteredCustomers.length}
            </strong>

          </div>

        </div>

        {/* Customers Table */}
        <div className="table-responsive">

          <table className="table table-bordered table-hover">

            <thead className="table-primary">

              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>

            </thead>

            <tbody>

              {filteredCustomers.length === 0 ? (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center"
                  >
                    No customers found.
                  </td>
                </tr>

              ) : (

                filteredCustomers.map((customer) => (

                  <tr key={customer.id}>

                    <td>{customer.id}</td>

                    <td>{customer.full_name}</td>

                    <td>{customer.email}</td>

                    <td>{customer.phone}</td>

                    <td>
                      <span
                        className={
                          customer.role === "admin"
                            ? "badge bg-danger"
                            : "badge bg-success"
                        }
                      >
                        {customer.role}
                      </span>
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

export default AdminCustomers;