function Assignments() {
  return (
    <div className="profile">

      <h2>Assignments</h2>

      <table>

        <thead>
          <tr>
            <th>Subject</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>React Dashboard</td>
            <td>Pending</td>
            <td>30 July</td>
          </tr>

          <tr>
            <td>DBMS Mini Project</td>
            <td>Submitted</td>
            <td>25 July</td>
          </tr>

          <tr>
            <td>Data Structures</td>
            <td>Pending</td>
            <td>2 August</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Assignments;