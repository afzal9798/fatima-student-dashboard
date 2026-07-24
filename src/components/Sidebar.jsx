import {
  FaHome,
  FaUserGraduate,
  FaCalendarCheck,
  FaChartBar,
  FaBook,
} from "react-icons/fa";

function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">

      <h2 className="logo">🎓 Student ERP</h2>

      <ul>

        <li onClick={() => setPage("dashboard")}>
          <FaHome /> Dashboard
        </li>

        <li onClick={() => setPage("profile")}>
          <FaUserGraduate /> Profile
        </li>

        <li onClick={() => setPage("attendance")}>
          <FaCalendarCheck /> Attendance
        </li>

        <li onClick={() => setPage("marks")}>
          <FaChartBar /> Marks
        </li>

        <li onClick={() => setPage("assignments")}>
          <FaBook /> Assignments
        </li>

        <li className="menu-item" onClick={() => setPage("fee")}>💳 Fee Status</li>

      </ul>

    </aside>
  );
}

export default Sidebar;