function DashboardCards({ orders }) {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled"
  ).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total),
    0
  );

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      color: "primary",
      icon: "📦",
    },
    {
      title: "Pending",
      value: pendingOrders,
      color: "warning",
      icon: "🟡",
    },
    {
      title: "Processing",
      value: processingOrders,
      color: "info",
      icon: "🔵",
    },
    {
      title: "Delivered",
      value: deliveredOrders,
      color: "success",
      icon: "🟢",
    },
    {
      title: "Cancelled",
      value: cancelledOrders,
      color: "danger",
      icon: "🔴",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue.toFixed(2)}`,
      color: "dark",
      icon: "💰",
    },
  ];

  return (
    <div className="row mb-4">
      {cards.map((card, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className={`card text-white bg-${card.color} shadow`}>
            <div className="card-body">
              <h5>
                {card.icon} {card.title}
              </h5>

              <h2>{card.value}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;