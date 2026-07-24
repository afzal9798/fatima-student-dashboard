import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Attendance from "./components/Attendance";
import Marks from "./components/Marks";
import Assignments from "./components/Assignments";
import FeeStatus from "./components/FeeStatus";
import Footer from "./components/Footer";

function App() {

  const [page, setPage] = useState("dashboard");

  return (
    <div className="container">

      <Sidebar setPage={setPage} />

      <main className="main">

        <Navbar/>

        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}
        {page === "attendance" && <Attendance />}
        {page === "marks" && <Marks />}
        {page === "assignments" && <Assignments />}
        {page === "fee" && <FeeStatus />}
        <Footer />

      </main>

    </div>
  );
}

export default App;