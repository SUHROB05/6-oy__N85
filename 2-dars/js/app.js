const tbody = document.getElementById("tbody");
const overlay = document.getElementById("overlay");
const inputBtn = document.getElementById("input-btn");
const closeBtn = document.getElementById("close-btn");
const addStudentBtn = document.getElementById("user-malumot-add");
const inputIsm = document.getElementById("input-ism");
const inputFamilya = document.getElementById("input-familya");
const inputIshlash = document.getElementById("ishlash");
const select = document.querySelector("#overlay .select");

const students = getFromStorage();
let studentIndex = null;

// O'quvchilar ro'yxatini render qilish
function renderStudents() {
  tbody.innerHTML = "";
  students.forEach((student, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.class}</td>
      <td>${student.hasWork ? "Ha" : "Yo'q"}</td>
      <td>
        <button class="btn btn-warning" onclick="editStudent(${index})">Edit</button>
        <button class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Yangi o'quvchi qo'shish yoki mavjudini o'zgartirish
addStudentBtn.addEventListener("click", () => {
  const firstName = inputIsm.value.trim();
  const lastName = inputFamilya.value.trim();
  const studentClass = select.value.trim();
  const hasWork = inputIshlash.value.trim().toLowerCase() === "ha";

  if (!firstName || !lastName || !studentClass) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  if (studentIndex === null) {
    students.push({ firstName, lastName, class: studentClass, hasWork });
    alert("O'quvchi muvaffaqiyatli qo'shildi!");
  } else {
    students[studentIndex] = { firstName, lastName, class: studentClass, hasWork };
    alert("O'quvchi muvaffaqiyatli o'zgartirildi!");
    studentIndex = null;
  }

  saveToStorage();
  renderStudents();
  overlay.style.display = "none";
});

// O'quvchini tahrirlash
function editStudent(index) {
  studentIndex = index;
  const student = students[index];
  inputIsm.value = student.firstName;
  inputFamilya.value = student.lastName;
  select.value = student.class;
  inputIshlash.value = student.hasWork ? "Ha" : "Yo'q";
  overlay.style.display = "flex";
}

// O'quvchini o'chirish
function deleteStudent(index) {
  const confirmDelete = confirm("Rostdan ham o'chirmoqchimisiz?");
  if (confirmDelete) {
    students.splice(index, 1);
    alert("O'quvchi muvaffaqiyatli o'chirildi!");
    saveToStorage();
    renderStudents();
  }
}

// LocalStoragega ma'lumotni saqlash
function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

// LocalStoragedan ma'lumotni olish
function getFromStorage() {
  return JSON.parse(localStorage.getItem("students") || "[]");
}

// Modalni ochish va yopish
inputBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  studentIndex = null;
  inputIsm.value = "";
  inputFamilya.value = "";
  inputIshlash.value = "";
  select.value = "All";
});

// Boshlang'ich render
renderStudents();












































// const inpurDivi = document.getElementById("input-div");
// const inpur = document.getElementById("input");
// const addStudentBtn = document.getElementById("input-btn");
// const yopuvchiButton = document.getElementById("close-btn")
// const isimniolish = document.getElementById("input-ism");
// const familyaniOlish = document.getElementById("ishlash");
// const sinifi = document.getElementById("select");
// const usermalumotlariniQoshish = document.getElementById("user-malumot-add");
// const tabelAdd = document.getElementById("tbody");


// addStudentBtn.addEventListener("click", () => {
//     overlay.style.display = "block";
// });
// yopuvchiButton.addEventListener("click", () => {
//     overlay.style.display = "none";
// })





