import "./App.css";

const students = [
  {
    name: "Aarav Sharma",
    rollNumber: "CS2025-001",
    marks: [88, 92, 85, 78],
  },
  {
    name: "Isha Verma",
    rollNumber: "CS2025-002",
    marks: [75, 81, 79, 84],
  },
  {
    name: "Raj Patel",
    rollNumber: "CS2025-003",
    marks: [91, 87, 90, 77],
  },
  {
    name: "Sneha Nair",
    rollNumber: "CS2025-004",
    marks: [82, 89, 88, 80],
  },
  {
    name: "Kabir Singh",
    rollNumber: "CS2025-005",
    marks: [68, 74, 71, 69],
  },
  {
    name: "Meera Das",
    rollNumber: "CS2025-006",
    marks: [94, 90, 93, 86],
  },
  {
    name: "Aditya Joshi",
    rollNumber: "CS2025-007",
    marks: [79, 83, 76, 82],
  },
  {
    name: "Priya Reddy",
    rollNumber: "CS2025-008",
    marks: [87, 85, 88, 91],
  },
  {
    name: "Vikram Gupta",
    rollNumber: "CS2025-009",
    marks: [72, 70, 74, 67],
  },
  {
    name: "Sonal Khan",
    rollNumber: "CS2025-010",
    marks: [80, 78, 82, 79],
  },
];

function App() {
  return (
    <div className="App">
      <table border={10} cellSpacing={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No.</th>
            <th>CN</th>
            <th>DBMS</th>
            <th>Java</th>
            <th>Aptitude</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNumber}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.marks[0]}</td>
              <td>{student.marks[1]}</td>
              <td>{student.marks[2]}</td>
              <td>{student.marks[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
