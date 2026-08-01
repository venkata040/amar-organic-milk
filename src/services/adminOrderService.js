const API_URL = "http://localhost:5000/api/orders";

// ==========================================
// Get All Orders
// ==========================================
export const getAllOrders = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return response.json();
};

// ==========================================
// Update Order Status
// ==========================================
export const updateOrderStatus = async (orderId, status) => {
  const response = await fetch(`${API_URL}/${orderId}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update order status.");
  }

  return data;
};