function Marks() {
  return (
    <div className="profile">

      <h2>Semester Result</h2>

      <table>

        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Programming in C</td>
            <td>91</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>DBMS</td>
            <td>89</td>
            <td>A</td>
          </tr>

          <tr>
            <td>Data Structures</td>
            <td>93</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>Mathematics</td>
            <td>88</td>
            <td>A</td>
          </tr>

          <tr>
            <td>English</td>
            <td>90</td>
            <td>A+</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Marks;