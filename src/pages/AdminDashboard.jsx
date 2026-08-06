import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import { getDashboardStats } from "../services/dashboardService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    todaysOrders: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      {/* Keep your existing dashboard content here */}
    </AdminLayout>
  );
}

export default AdminDashboard;