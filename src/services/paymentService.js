const API_URL = "http://13.236.60.104:5000/api/payments";

// ======================================
// Get All Payments
// ======================================
export const getAllPayments = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login as an admin.");
  }

  const response = await fetch(API_URL, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error(
      "Your session has expired. Please login again."
    );
  }

  if (response.status === 403) {
    throw new Error(
      "Access denied. Admin privileges required."
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        "Failed to fetch payments."
    );
  }

  return data;
};