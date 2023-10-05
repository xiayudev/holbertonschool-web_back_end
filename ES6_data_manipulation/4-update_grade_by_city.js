/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(({ location }) => location === city).map((student) => {
    let flag = 0;
    newGrades.forEach((grade) => {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
        flag = 1;
      }
    });
    if (!flag) {
      student.grade = 'N/A';
    }
    return student;
  });
}
