import { useState, useEffect } from "react";
import { getStudents } from "./Getstudents";


const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const fetchedStudents = await getStudents(); // Fetch students from the API
        setStudents(fetchedStudents); // Set the fetched students to state
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents(); // Call the function to fetch students when component mounts
  }, []);

  return (
    <div>
      <h1>Student Information</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name.first} {student.name.last}
            <br />
            <strong>Email:</strong> {student.email}
            <br />
            <strong>Gender:</strong> {student.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
