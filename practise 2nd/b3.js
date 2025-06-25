// Array of student objects
let students = [
    { name: "Anita", roll: 101, marks: 87 },
    { name: "Ravi", roll: 102, marks: 92 },
    { name: "Zara", roll: 103, marks: 78 },
    { name: "Kunal", roll: 104, marks: 85 }
];

// Loop through the array and print student details
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}:`);
    console.log(`Name: ${students[i].name}`);
    console.log(`Roll: ${students[i].roll}`);
    console.log(`Marks: ${students[i].marks}`);
    console.log('--------------------');
}