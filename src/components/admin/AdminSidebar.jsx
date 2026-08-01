import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "📦",
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: "🥛",
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icon: "👥",
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: "💳",
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: "⚙️",
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#212529",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Amar Organic Milk
      </h3>

      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "block",
            textDecoration: "none",
            color:
              location.pathname === item.path
                ? "#ffc107"
                : "#fff",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "10px",
            background:
              location.pathname === item.path
                ? "#343a40"
                : "transparent",
          }}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
}

export default AdminSidebar;