"use client"

import { Edit, Trash2, AlertTriangle, Plus } from "lucide-react"
import { useState } from "react"

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hasami Large Planter", price: 63.0, stock: 0 },
    { id: 2, name: "Braun Wall Clock", price: 84.0, stock: 982 },
    { id: 3, name: "Kinto Day Off Tumbler", price: 38.0, stock: 59 },
    { id: 4, name: "The Analog Complete Kit", price: 195.0, stock: 2 },
    { id: 5, name: "Hasami Porcelain Mug", price: 30.0, stock: 0 },
    { id: 6, name: "Valet Tray Bundle", price: 227.0, stock: 87 },
  ])

  const handleEdit = (id) => {
    console.log("Edit product:", id)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  return (
    <div className="page-container">
      <div className="page-actions">
        <h2 className="page-title">Products</h2>
        <button className="btn btn-primary">
          <Plus size={20} />
          Add product
        </button>
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="table-user-name">{product.name}</div>
                </td>
                <td>USD {product.price.toFixed(2)}</td>
                <td>
                  <div className="stock-info">
                    <span className={`stock-value ${product.stock === 0 ? "out-of-stock" : "in-stock"}`}>
                      {product.stock}
                    </span>
                    {product.stock === 0 && <AlertTriangle size={16} className="stock-warning" />}
                  </div>
                </td>
                <td>
                  <div className="table-actions">
                    <button onClick={() => handleEdit(product.id)} className="btn-icon edit" title="Edit product">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="btn-icon delete" title="Delete product">
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
  )
}
