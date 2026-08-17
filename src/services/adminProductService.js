const API_URL = "http://13.236.60.104:5000/api/products";

// ======================================
// Get All Products
// ======================================
// Public route
export const getProducts = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || data.error || "Failed to fetch products."
    );
  }

  return data;
};

// ======================================
// Add Product
// ======================================
// Admin only
export const addProduct = async (product) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login as an admin.");
  }

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(product),
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error("Your session has expired. Please login again.");
  }

  if (response.status === 403) {
    throw new Error("Access denied. Admin privileges required.");
  }

  if (!response.ok) {
    throw new Error(
      data.message || data.error || "Failed to add product."
    );
  }

  return data;
};

// ======================================
// Update Product
// ======================================
// Admin only
export const updateProduct = async (id, product) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login as an admin.");
  }

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(product),
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error("Your session has expired. Please login again.");
  }

  if (response.status === 403) {
    throw new Error("Access denied. Admin privileges required.");
  }

  if (!response.ok) {
    throw new Error(
      data.message || data.error || "Failed to update product."
    );
  }

  return data;
};

// ======================================
// Delete Product
// ======================================
// Admin only
export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login as an admin.");
  }

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error("Your session has expired. Please login again.");
  }

  if (response.status === 403) {
    throw new Error("Access denied. Admin privileges required.");
  }

  if (!response.ok) {
    throw new Error(
      data.message || data.error || "Failed to delete product."
    );
  }

  return data;
};