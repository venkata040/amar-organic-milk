const API_URL = "http://localhost:5000/api/orders";

export const placeOrder = async (orderData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to place order");
  }

  return response.json();
};