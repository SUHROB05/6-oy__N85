const person = {
    ismi: "Aziz",
    yoshi: 21,
    ismichiqarish (){
        console.log(this.ismi);
    }
}

localStorage.setItem("person", JSON.stringify(person));
console.log(localStorage.getItem("person"));