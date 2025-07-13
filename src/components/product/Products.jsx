"use client";

import { Edit, Trash2, AlertTriangle, Plus } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products`);
        setProduct(response.data);
      } catch (error) {
        console.log("Falla la entrada a Api", error);
      }
    };
    fetchProduct();
  }, []);
  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProduct(product.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-actions">
        <h2 className="page-title">Products</h2>
        <Link to="/addproducts">
          <button className="btn btn-primary">
            <Plus size={20} />
            Add product
          </button>
        </Link>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="table-user-name">{product.name}</div>
                </td>
                <td>USD {product.price.toFixed(2)}</td>
                <td>
                  <div className="stock-info">
                    <span
                      className={`stock-value ${
                        product.stock === 0 ? "out-of-stock" : "in-stock"
                      }`}
                    >
                      {product.stock}
                    </span>
                    {product.stock === 0 && (
                      <AlertTriangle size={16} className="stock-warning" />
                    )}
                  </div>
                </td>
                <td>
                  <div className="table-actions">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="btn-icon edit"
                      title="Edit product"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn-icon delete"
                      title="Delete product"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
