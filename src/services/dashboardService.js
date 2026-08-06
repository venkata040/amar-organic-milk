const API_URL = "http://localhost:5000/api/dashboard";

export const getDashboardStats = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data.");
  }

  return response.json();
};