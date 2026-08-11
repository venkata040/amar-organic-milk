import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: "🥛",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "📦",
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
      name: "Messages",
      path: "/admin/messages",
      icon: "📩",
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
        background: "#212529",
        color: "#fff",
        padding: "20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          lineHeight: "1.3",
        }}
      >
        Amar Organic Milk
      </h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "block",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            textDecoration: "none",

            color:
              location.pathname === item.path
                ? "#ffc107"
                : "#fff",

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