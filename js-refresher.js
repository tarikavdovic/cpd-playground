const students = [
  {
    id: 1,
    name: "Amina",
    year: 3,
    grades: [9, 8, 10],
    contact: { github: "amina-dev" },
  },
  { id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
  {
    id: 3,
    name: "Lejla",
    year: 3,
    grades: [10, 9, 9],
    contact: { github: "lejla-codes" },
  },
  { id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// Task 5. Greeting Function
// const greet = (student) => `Hi ${student.name}, you are in year ${student.year}`;
const greet = ({ name, year }) => `Hi ${name}, you are in year ${year}`;
students.forEach((student) => console.log(greet(student)));

// Task 6. List of Names
const names = students.map((student) => student.name);
console.log(names);

// Task 7. Third-Year Students
const thirdYear = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);
console.log(thirdYear);

// Task 8. Average Grades
const average = (grades) =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

const withAverages = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));
withAverages.forEach((student) =>
  console.log(`${student.name}: ${student.average.toFixed(2)}`),
);

// Task 9. Promote Emir
const promoted = students.map((student) =>
  student.name === "Emir" ? { ...student, year: 3 } : student,
);
const originalEmir = students.find((student) => student.name === "Emir");
const updatedEmir = promoted.find((student) => student.name === "Emir");
console.log(`Original: Emir is in year ${originalEmir.year}`);
console.log(`Updated: Emir is in year ${updatedEmir.year}`);

// Task 10. GitHub Usernames
students.forEach((student) =>
  console.log(`${student.name}: ${student.contact?.github ?? "no GitHub"}`),
);

// Task 11. Load a User from an API
const loadUser = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const user = await response.json();
    console.log(`User ${id}: ${user.name}`);
  } catch (error) {
    console.log(`Could not load user ${id}`);
  }
};

loadUser(1);
