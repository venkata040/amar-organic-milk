const API_URL = "http://localhost:5000/api/products";

// ===============================
// Get All Products
// ===============================
export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  return response.json();
};

// ===============================
// Add Product
// ===============================
export const addProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to add product.");
  }

  return data;
};

// ===============================
// Update Product
// ===============================
export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to update product.");
  }

  return data;
};

// ===============================
// Delete Product
// ===============================
export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to delete product.");
  }

  return data;
};