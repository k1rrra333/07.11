let users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Anna", email: "anna@gmail.com" },
    { id: 3, name: "David", email: "david@gmail.com" }
]

let text = document.querySelector(".text")
let button = document.querySelector(".searchButton")
let result = document.querySelector(".result")
let loading = document.querySelector(".loading")
let error = document.querySelector(".error")

// console.log(text,button,result,loading,error)



function searchUser() {
    let id = text.value
    console.log(id)

    return new Promise((resolve, reject) => {

        let user = users.find((ban) => ban.id == id)

        if (user) {
            resolve(user)
        } else {
            reject("Пользователь не найден")
        }

    }).then((user) => {
        let p = document.createElement("p");

        p.textContent = ` Name: ${user.name}, Email: ${user.email}`
        result.appendChild(p);
    })


}


button.addEventListener("click", searchUser)
