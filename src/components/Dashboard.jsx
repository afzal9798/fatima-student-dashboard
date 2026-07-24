import {
  FaBook,
  FaCalendarCheck,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome">
        <h2>Welcome Back, Fatima 👋</h2>

        <p>
          Welcome to your academic dashboard. Here you can check your
          attendance, marks, assignments, fee status and timetable.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="cards">
        <div className="card">
          <FaBook className="icon" />
          <h3>Total Subjects</h3>
          <p>6</p>
        </div>

        <div className="card">
          <FaCalendarCheck className="icon" />
          <h3>Attendance</h3>
          <p>92%</p>
        </div>

        <div className="card">
          <FaChartLine className="icon" />
          <h3>CGPA</h3>
          <p>6.43</p>
        </div>

        <div className="card">
          <FaMoneyBillWave className="icon" />
          <h3>Fee Status</h3>
          <p>Paid</p>
        </div>
      </div>

      {/* Timetable */}
      <div className="profile">
        <h2>Today's Timetable</h2>

        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Subject</th>
              <th>Room</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>09:00 AM</td>
              <td>Programming in C</td>
              <td>Lab-2</td>
            </tr>

            <tr>
              <td>11:00 AM</td>
              <td>DBMS</td>
              <td>Room-204</td>
            </tr>

            <tr>
              <td>02:00 PM</td>
              <td>Data Structures</td>
              <td>Room-301</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notifications */}
      <div className="profile">
        <h2>Notifications</h2>

        <ul>
          <li className="menu-item">
            📢 React Assignment due on 30 July
          </li>

          <li className="menu-item">
            📢 Internal Exam starts from 5 September
          </li>

          <li className="menu-item">
            📢 Fee payment successfully completed
          </li>

          <li className="menu-item">
            📢 Library books must be returned before Friday
          </li>
        </ul>
      </div>

      {/* Statistics */}
      <div className="cards">
        <div className="card">
          <h3>Completed Courses</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Certificates</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Projects</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>10</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="profile">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <button className="action-btn">📚 View Courses</button>

          <button className="action-btn">
            📝 Submit Assignment
          </button>

          <button className="action-btn">
            📄 Download Result
          </button>

          <button className="action-btn">
            📧 Contact Faculty
          </button>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="profile">
        <h2>Academic Summary</h2>

        <table>
          <tbody>
            <tr>
              <td>Current Semester</td>
              <td>3rd Semester</td>
            </tr>

            <tr>
              <td>Overall Attendance</td>
              <td>92%</td>
            </tr>

            <tr>
              <td>CGPA</td>
              <td>8.6</td>
            </tr>

            <tr>
              <td>Fee Status</td>
              <td>Paid</td>
            </tr>

            <tr>
              <td>Assignments Completed</td>
              <td>8 / 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;