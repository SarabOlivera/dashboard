"use client"

import { Home, Package, Users, ShoppingCart, ArrowLeft } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "products", label: "Products", icon: Package, path: "/products" },
    { id: "users", label: "Users", icon: Users, path: "/users" },
    { id: "orders", label: "Orders", icon: ShoppingCart, path: "/orders" },
  ]

  const isActive = (path) => {
    if (path === "/dashboard" && location.pathname === "/") return true
    return location.pathname === path
  }

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <span>H</span>
          </div>
          <span className="sidebar-brand-text">HackCommerce</span>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.id} to={item.path} className={`sidebar-nav-item ${isActive(item.path) ? "active" : ""}`}>
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <button className="sidebar-return">
        <ArrowLeft size={20} />
        <span>Return to website</span>
      </button>
    </div>
  )
}
