const API_URL = `${process.env.REACT_APP_API_URL}/api/settings`;

// ======================================
// Get Settings
// ======================================
export const getSettings = async () => {
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
        "Failed to fetch settings."
    );
  }

  return data;
};

// ======================================
// Update Settings
// ======================================
export const updateSettings = async (settings) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login as an admin.");
  }

  const response = await fetch(API_URL, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(settings),
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
        "Failed to update settings."
    );
  }

  return data;
};
