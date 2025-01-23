const form = document.getElementById("forms")
const inputs = document.getElementById("inputs")
const list = document.getElementById("uls")



form.addEventListener("submit", (e) => {
    e.preventDefault()

    const li = document.createElement("li");
    const input = document.createElement("input");
    const p = document.createElement("p");
    const editButton = document.createElement("button")
    const delitButton = document.createElement("button")
    const divgayigish = document.createElement("div");
    const inputeQoshish = document.createElement("div");


    input.type = "checkbox";
    p.innerHTML = inputs.value;
    editButton.innerHTML = "Edit";
    delitButton.innerHTML = "Delit";
    inputeQoshish.innerHTML = `<input id="input__olish" placeholder="Yangi matin:..." type="text"> <button>Add</button>`;


    list.appendChild(li);
    li.appendChild(divgayigish);
    divgayigish.classList.add("divgayigish")
    divgayigish.appendChild(input);
    divgayigish.appendChild(p);
    divgayigish.appendChild(delitButton);
    divgayigish.appendChild(editButton);
    inputeQoshish.classList.add("inputqoshish");
    li.appendChild(inputeQoshish);

    // inputni bo'sh qilish uchun
    inputs.value = "";




    // delit o'chirish
    delitButton.addEventListener("click", () => {
        list.removeChild(li);
    });


    // esit buttonni ochish
    editButton.addEventListener("click", () => {
        inputeQoshish.style.display = "block";
        editButton.innerHTML = "yopish";
        divgayigish.appendChild(editButton);

    });
    // edidt buttoni yopish dabil clik 
    editButton.addEventListener("dblclick", () => {
        inputeQoshish.style.display = "none";
        editButton.innerHTML = "Edit";
        divgayigish.appendChild(editButton);
    })



    // o'zgartirish
    const addButton = inputeQoshish.querySelector("button");
    addButton.addEventListener("click", () => {
        const inputMalumotOlish = inputeQoshish.querySelector("input");
        p.innerText = inputMalumotOlish.value;
        inputeQoshish.style.display = "none";
        editButton.innerHTML = "Edit";
        inputMalumotOlish.value = ""
    });


    // input.addEventListener("click", ()=>{
    //     p.classList.add("dane");
    // });

    input.addEventListener("change", () => {
        if (input.checked) {
            p.classList.add("dane")
        } else {
            p.classList.remove("dane")
        }
    });

});



