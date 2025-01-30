const tbody = document.querySelector(".tabel tbody");
const addFrom = document.getElementById("addfrom");
const addStudentBtn = document.getElementById("input-btn");
const overlay = document.getElementById("overlay");
const overlayCloseBtn = document.getElementById("close-btn");
const editBtn = document.getElementById("edit-btn");
const delitBtn = document.getElementById("delit-btn");


const students = [
    {
        forstName: "Ahror",
        lastName: "Bekzot",
        sinfi: "A-sinf",
        ishlaydimi: "ha",
    },
    {
        forstName: "Ahrorber",
        lastName: "Bobamurodov",
        sinfi: "B-sinf",
        ishlaydimi: "yo'q",
    }
]

addFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const forstName = document.getElementById("input-ism");
    const lastName = document.getElementById("input-familya");
    const studentClass = document.getElementById("select")
    const work = document.getElementById("ishlash");
    students.push({
        forstName: forstName.value,
        lastName: lastName.value,
        class: studentClass.value,
        ishlaydimi: work.value
    })
    addFrom.reset();
    tbody.innerHTML = "";
    rendirStudent();
});

// studentni ekranga chiqaradi
rendirStudent();
function rendirStudent(student, i) {

    students.map((student, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${student.forstName}</td>
        <td>${student.lastName}</td>
        <td>${student.sinfi}</td>
        <td>${student.ishlaydimi}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delit-btn">Delit</button>
        </td>
        `


        tbody.append(tr);
    })

}





// over folovni ochish va yopish , yana 1daqiqada avtomatik yopiladi
addStudentBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});
overlayCloseBtn.addEventListener("click", () => {
    overlay.style.display = "none"
});
function closeOverlay() {
    overlay.style.display = "none";
}
setTimeout(closeOverlay, 60000);

