import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import {
  getSettings,
  updateSettings,
} from "../services/settingsService";

function AdminSettings() {
  const [formData, setFormData] = useState({
    store_name: "",
    store_email: "",
    store_phone: "",
    store_address: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getSettings();

      setFormData({
        store_name: data.settings.store_name || "",
        store_email: data.settings.store_email || "",
        store_phone: data.settings.store_phone || "",
        store_address: data.settings.store_address || "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.store_name.trim()) {
      alert("Store name is required.");
      return;
    }

    try {
      setSaving(true);

      const data = await updateSettings(formData);

      alert(
        data.message ||
          "Settings updated successfully."
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="container-fluid mt-4">
          <h2>Loading Settings...</h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container-fluid mt-4">

        <h2 className="mb-4">
          Store Settings
        </h2>

        <div className="card">

          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">
              Amar Organic Milk Settings
            </h4>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              {/* Store Name */}
              <div className="mb-3">

                <label className="form-label">
                  Store Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="store_name"
                  value={formData.store_name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Store Email */}
              <div className="mb-3">

                <label className="form-label">
                  Store Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="store_email"
                  value={formData.store_email}
                  onChange={handleChange}
                />

              </div>

              {/* Store Phone */}
              <div className="mb-3">

                <label className="form-label">
                  Store Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="store_phone"
                  value={formData.store_phone}
                  onChange={handleChange}
                />

              </div>

              {/* Store Address */}
              <div className="mb-3">

                <label className="form-label">
                  Store Address
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="store_address"
                  value={formData.store_address}
                  onChange={handleChange}
                />

              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="btn btn-success"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : "Save Settings"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminSettings;