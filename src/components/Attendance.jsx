function Attendance() {
  return (
    <div className="profile">

      <h2>Attendance Report</h2>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Programming in C</td>
            <td>95%</td>
            <td>✅ Excellent</td>
          </tr>

          <tr>
            <td>Data Structures</td>
            <td>90%</td>
            <td>✅ Good</td>
          </tr>

          <tr>
            <td>DBMS</td>
            <td>88%</td>
            <td>✅ Good</td>
          </tr>

          <tr>
            <td>Mathematics</td>
            <td>94%</td>
            <td>✅ Excellent</td>
          </tr>

          <tr>
            <td>English</td>
            <td>91%</td>
            <td>✅ Good</td>
          </tr>

        </tbody>

      </table>

      <div className="progress-container">

<h2>Attendance Progress</h2>

<div className="progress-box">

<p>Programming in C - 95%</p>

<div className="progress">

<div className="progress-fill p95"></div>

</div>

</div>

<div className="progress-box">

<p>DBMS - 90%</p>

<div className="progress">

<div className="progress-fill p90"></div>

</div>

</div>

<div className="progress-box">

<p>Mathematics - 88%</p>

<div className="progress">

<div className="progress-fill p88"></div>

</div>

</div>

<div className="progress-box">

<p>English - 91%</p>

<div className="progress">

<div className="progress-fill p91"></div>

</div>

</div>

</div>

    </div>
  );
}

export default Attendance;