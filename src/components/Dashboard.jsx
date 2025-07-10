import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  BarChart3,
  Users,
  Eye,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import PriceTrends from "./PriceTrends";
export default function Dashboard() {
  const stats = [
    {
      title: "Total Visitors",
      value: "4,42,236",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "blue",
      period: "vs last 30 days",
    },
    {
      title: "Total Orders",
      value: "78,250",
      change: "+25%",
      trend: "up",
      icon: ShoppingBag,
      color: "blue",
      period: "vs last 30 days",
    },
    {
      title: "Page Views",
      value: "18,800",
      change: "+12%",
      trend: "up",
      icon: Eye,
      color: "orange",
      period: "vs last 30 days",
    },
    {
      title: "Total Revenue",
      value: "$35,078",
      change: "+8%",
      trend: "up",
      icon: BarChart3,
      color: "orange",
      period: "vs last 30 days",
    },
  ];

  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 25 },
    { month: "Apr", value: 45 },
    { month: "May", value: 30 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 40 },
    { month: "Aug", value: 65 },
    { month: "Sep", value: 50 },
    { month: "Oct", value: 75 },
    { month: "Nov", value: 60 },
    { month: "Dec", value: 80 },
  ];

  const weeklyStats = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 80 },
    { day: "Thu", value: 35 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 90 },
  ];

  const recentOrders = [
    {
      id: "d4063ddb-9778-4d65-94b9-8a47650e6818",
      user: "Ma Pérez",
      email: "maria.perez@gmail.com",
      total: "USD 195.00",
    },
    {
      id: "08aecde2b-9596-469b-ae22-a9bd8ec5b266",
      user: "Ma Pérez",
      email: "maria.perez@gmail.com",
      total: "USD 195.00",
    },
    {
      id: "87e4abe0-66f6-4f5e-8b82-e49a14f45f5e",
      user: "Ma Pérez",
      email: "maria.perez@gmail.com",
      total: "USD 233.00",
    },
    {
      id: "7a12695b-e672-46ce-8e84-5fc3071a817f",
      user: "Ma Pérez",
      email: "maria.perez@gmail.com",
      total: "USD 460.00",
    },
  ];

  const topProducts = [
    { name: "Braun Wall Clock", sales: 156, revenue: "$13,104" },
    { name: "Valet Tray Bundle", sales: 89, revenue: "$20,203" },
    { name: "The Analog Complete Kit", sales: 67, revenue: "$13,065" },
    { name: "Kinto Day Off Tumbler", sales: 45, revenue: "$1,710" },
  ];

  return (
    <div className="page-container">
      <div>
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Real-time data</p>
      </div>

      {/* Main Stats Cards */}
      <div className="stats-grid-modern">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card-modern">
              <div className="stat-card-content">
                <div className="stat-header">
                  <div className={`stat-icon-small ${stat.color}`}>
                    <Icon size={16} color="white" />
                  </div>
                  <span
                    className={`stat-change-modern ${
                      stat.trend === "up" ? "positive" : "negative"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp size={12} />
                    ) : (
                      <TrendingDown size={12} />
                    )}
                    {stat.change}
                  </span>
                </div>
                <div className="stat-main">
                  <h3 className="stat-value-modern">{stat.value}</h3>
                  <p className="stat-label-modern">{stat.title}</p>
                  <p className="stat-period">{stat.period}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-container-large">
          <div className="chart-header">
            <PriceTrends />
          </div>
        </div>

        <div className="chart-container-small">
          <div className="chart-header">
            <h3 className="chart-title">Income Overview</h3>
            <p className="chart-subtitle">This Week Statistics</p>
          </div>
          <div className="chart-value-large">$76,650</div>
          <div className="bar-chart">
            {weeklyStats.map((item, index) => (
              <div key={index} className="bar-item">
                <div
                  className="bar"
                  style={{
                    height: `${item.value}%`,
                    backgroundColor: index === 6 ? "#10b981" : "#06d6a0",
                  }}
                ></div>
                <span className="bar-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="analytics-row">
        <div className="analytics-card-compact">
          <div className="analytics-header-compact">
            <h4 className="analytics-title-compact">Revenue Breakdown</h4>
            <span className="analytics-period-compact">This Month</span>
          </div>
          <div className="revenue-items">
            <div className="revenue-item-compact">
              <div className="revenue-indicator blue"></div>
              <span className="revenue-label-compact">Product Sales</span>
              <span className="revenue-value-compact">$382,450</span>
            </div>
            <div className="revenue-item-compact">
              <div className="revenue-indicator green"></div>
              <span className="revenue-label-compact">Services</span>
              <span className="revenue-value-compact">$68,530</span>
            </div>
            <div className="revenue-item-compact">
              <div className="revenue-indicator purple"></div>
              <span className="revenue-label-compact">Subscriptions</span>
              <span className="revenue-value-compact">$35,200</span>
            </div>
          </div>
        </div>

        <div className="analytics-card-compact">
          <div className="analytics-header-compact">
            <h4 className="analytics-title-compact">Performance</h4>
            <span className="analytics-period-compact">Real-time</span>
          </div>
          <div className="performance-items">
            <div className="performance-item-compact">
              <Clock size={16} className="performance-icon-compact" />
              <div className="performance-details-compact">
                <span className="performance-value-compact">2.3s</span>
                <span className="performance-label-compact">Load Time</span>
              </div>
            </div>
            <div className="performance-item-compact">
              <CheckCircle
                size={16}
                className="performance-icon-compact success"
              />
              <div className="performance-details-compact">
                <span className="performance-value-compact">99.9%</span>
                <span className="performance-label-compact">Uptime</span>
              </div>
            </div>
            <div className="performance-item-compact">
              <AlertTriangle
                size={16}
                className="performance-icon-compact warning"
              />
              <div className="performance-details-compact">
                <span className="performance-value-compact">0.02%</span>
                <span className="performance-label-compact">Error Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout for Tables */}
      <div className="two-column-grid">
        {/* Recent Orders */}
        <div className="table-container">
          <div className="table-header">
            <h3 className="table-title">Recent Orders</h3>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <div className="table-user-info">
                        <div className="table-user-name">{order.user}</div>
                        <div className="table-user-email">{order.email}</div>
                      </div>
                    </td>
                    <td>{order.total}</td>
                    <td>
                      <button className="btn-icon view">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="table-container">
          <div className="table-header">
            <h3 className="table-title">Top Products</h3>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sales</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="table-user-name">{product.name}</div>
                    </td>
                    <td>{product.sales}</td>
                    <td className="table-user-name">{product.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
