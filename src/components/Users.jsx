"use client"

import { Edit, Trash2, Plus, User } from "lucide-react"
import { useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 19,
      name: "John",
      lastname: "Doe",
      email: "koniak2014@gmail.com",
      phone: "+1-555-0123",
      address: "123 Main St, New York, NY 10001",
    },
    {
      id: 18,
      name: "Melissa",
      lastname: "Segovia",
      email: "melissa.segovia.11@gmail.com",
      phone: "+1-555-0124",
      address: "456 Oak Ave, Los Angeles, CA 90210",
    },
    {
      id: 17,
      name: "Hola",
      lastname: "1234",
      email: "emi@emi.com",
      phone: "+1-555-0125",
      address: "789 Pine Rd, Chicago, IL 60601",
    },
    {
      id: 16,
      name: "Antonio",
      lastname: "Sotooo",
      email: "antonio.soooto.16@gmail.com",
      phone: "+1-555-0126",
      address: "321 Elm St, Houston, TX 77001",
    },
    {
      id: 13,
      name: "Gustavo",
      lastname: "Rodriguez",
      email: "gustavo.holguin.19@gmail.com",
      phone: "+1-555-0127",
      address: "654 Maple Dr, Phoenix, AZ 85001",
    },
    {
      id: 12,
      name: "Nicolas",
      lastname: "Valsecchi",
      email: "nico@gmail.com",
      phone: "+1-555-0128",
      address: "987 Cedar Ln, Philadelphia, PA 19101",
    },
    {
      id: 11,
      name: "Diego",
      lastname: "Valiente",
      email: "diegovaliente@gmail.com",
      phone: "+1-555-0129",
      address: "147 Birch Blvd, San Antonio, TX 78201",
    },
  ])

  const handleEdit = (id) => {
    console.log("Edit user:", id)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  return (
    <div className="page-container">
      <div className="page-actions">
        <h2 className="page-title">Users</h2>
        <button className="btn btn-primary">
          <Plus size={20} />
          Add user
        </button>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <div className="avatar">
                      <User size={24} className="avatar-icon" />
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td title={user.address} style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {user.address}
                  </td>
                  <td>
                    <div className="table-actions">
                      <button onClick={() => handleEdit(user.id)} className="btn-icon edit" title="Edit user">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="btn-icon delete" title="Delete user">
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
    </div>
  )
}
