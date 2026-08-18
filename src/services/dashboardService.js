const API_URL = `${process.env.REACT_APP_API_URL}/api/dashboard`;

export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authentication required. Please login.");
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    throw new Error("Your session has expired. Please login again.");
  }

  if (response.status === 403) {
    throw new Error(
      "Access denied. Admin privileges required."
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch dashboard data."
    );
  }

  return data;
};
