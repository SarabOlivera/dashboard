import "../App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-area">
        <header className="header">
          <div className="header-content">
            <h1 className="header-title">Administration Panel</h1>
            <div className="header-avatar">
              <span>$</span>
            </div>
          </div>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
