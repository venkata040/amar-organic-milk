import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/adminProductService";

function AdminProducts() {
  const emptyForm = {
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  };

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load products.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      stock: product.stock,
    });

    setEditingId(product.id);
    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateProduct(editingId, formData);
        alert("Product updated successfully.");
      } else {
        await addProduct(formData);
        alert("Product added successfully.");
      }

      setFormData(emptyForm);
      setEditingId(null);
      setIsEditing(false);

      loadProducts();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      alert("Delete failed.");
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">

        <h2 className="mb-4">
          Product Management
        </h2>

        <div className="card mb-4">

          <div className="card-header bg-success text-white">
            <h4>
              {isEditing ? "Edit Product" : "Add Product"}
            </h4>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Product Name</label>

                  <input
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Category</label>

                  <input
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Price</label>

                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Stock</label>

                  <input
                    type="number"
                    className="form-control"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Image</label>

                  <input
                    className="form-control"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Description</label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <button
                className={
                  isEditing
                    ? "btn btn-warning me-2"
                    : "btn btn-success me-2"
                }
                type="submit"
              >
                {isEditing
                  ? "Update Product"
                  : "Add Product"}
              </button>

              {isEditing && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingId(null);
                    setFormData(emptyForm);
                  }}
                >
                  Cancel
                </button>
              )}

            </form>

          </div>

        </div>

        <table className="table table-bordered table-striped">

          <thead className="table-primary">

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product.id}>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>{product.category}</td>
                <td>{product.image}</td>
                <td>{product.stock}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
}

export default AdminProducts;