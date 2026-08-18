// ==========================================
// STEP 1: Data Setup (Variables & Data Types)
// ==========================================
let studentName = "Rahul Kumar"; // String: Naal save karne ke liye
let rollNo = 101;                // Number: ID/Roll number ke liye

// Marks in 5 subjects
let maths = 85;
let science = 42;
let english = 78;
let hindi = 90;
let computer = 38;

// ==========================================
// STEP 2: Calculations (Math Operators)
// ==========================================
// Sabhi marks ko add karke total nikala
let totalMarks = maths + science + english + hindi + computer;

// Percentage ka formula: (Total / Maximum) * 100
let percentage = (totalMarks / 500) * 100;

// ==========================================
// STEP 3: Pass/Fail Logic (Logical & Comparison Operators)
// ==========================================
// Condition: Overall percentage >= 40 AUR har subject mein >= 33 marks hone chahiye
let isPassed = percentage >= 40 && maths >= 33 && science >= 33 && english >= 33 && hindi >= 33 && computer >= 33;

let status; // Status variable me 'PASSED' ya 'FAILED' store karenge
if (isPassed) {はにはやみはまなはかもがま
  status = "PASSED";
} else {
  status = "FAILED";
}

// ==========================================
// STEP 4: Grade Assignment (If-Else Ladder)
// ==========================================
let grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 75) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "F";
}

// ==========================================
// STEP 5: Top/Bottom Border Design (Loop)
// ==========================================
// Loop se 30 stars (*) ek saath jodne ke liye
let border = "";
for (let i = 1; i <= 30; i++) {
  border = border + "*"; // Har iteration me ek '*' add hoga
}

// ==========================================
// STEP 6: Printing Output (Template Literals)
// ==========================================
console.log(border);
console.log("      STUDENT REPORT CARD      ");
console.log(border);

console.log(`Name        : ${studentName}`);
console.log(`Roll No     : ${rollNo}`);
console.log("");
console.log("--- SUBJECT MARKS ---");
console.log(`Maths       : ${maths}`);
console.log(`Science     : ${science}`);
console.log(`English     : ${english}`);
console.log(`Hindi       : ${hindi}`);
console.log(`Computer    : ${computer}`);
console.log("------------------------------");
console.log(`Total Marks : ${totalMarks} / 500`);
console.log(`Percentage  : ${percentage}%`);
console.log(`Status      : ${status}`);
console.log(`Grade       : ${grade}`);

console.log(border);
