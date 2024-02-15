import { useParams } from "react-router-dom";
import { getSingleStudent } from "./Getstudents";
import React from "react";

const SingleStudent = () => {
  const { uuid } = useParams(); // Extract uuid from URL params

  // Fetch single student data using uuid
  const [student, setStudent] = React.useState(null);

  React.useEffect(() => {
    const fetchStudent = async () => {
      try {
        const fetchedStudent = await getSingleStudent(uuid);
        setStudent(fetchedStudent);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [uuid]);

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h1>Student Information</h1>
      <p>
        <strong>Name:</strong> {student.name.first} {student.name.last}
        <br />
        <strong>Email:</strong> {student.email}
        <br />
        <strong>Gender:</strong> {student.gender}
      </p>
    </div>
  );
};

export default SingleStudent;