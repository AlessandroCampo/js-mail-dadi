const user_mail_input = document.getElementById("user_mail")
const user_pass_input = document.getElementById("user_pass")
const user_newmail_input = document.getElementById("user_mail_new")
const user_newpass_input = document.getElementById("user_pass_new")
const button = document.getElementById("button")
const register_button = document.getElementById("register_button")
const register_container = document.getElementById("register_container")
const login_container = document.getElementById("login_container")
const create_new = document.getElementById("create_new")


// let regisered_mails = ["mariorossi@gmail.com", "jonsnow@gmail.com", "goku@gmail.com", "georgemartin@gmail.com", "brandonsanderson@gmail.com", "cristophernolan@gmail.com"]

let registered_users = [{
    fullname: "Jon Snow",
    mail: "jonsnow@gmail.com",
    password: "winteriscoming93"
},
{
    fullname: "George Martin",
    mail: "georgemartin@gmail.com",
    password: "iwillneverfinishthebook62"
},
{
    fullname: "Ted Mosby",
    mail: "tedmosby@gmail.com",
    password: "robin11"
}
]


let check = false
let correct_pass = true
register_container.style.display = "none"

create_new.addEventListener(("click"), () => {
    register_container.style.display = "block"
    register_button.addEventListener("click", () => {
        if (!user_newmail_input.value.includes(".") || !user_newmail_input.value.includes("@")) {
            window.alert("Inserisci un indirizzo mail valido")
            return
        }
        if (user_newpass_input.value.length < 6) {
            window.alert("Inserisci una password di almeno 6 caratteri")
            return
        }
        let new_user = new Object()
        new_user.name = ""
        new_user.password = user_newpass_input.value
        new_user.mail = user_newmail_input.value
        registered_users.push(new_user)
        console.log(new_user)
        console.log(registered_users)
    })
})
button.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(user_mail_input.value)
    if (!user_mail_input.value.includes("@")) {
        window.alert("Inserisci un indirzzo mail valido")
        return
    }

    if (!user_mail_input.value.includes(".")) {
        window.alert("Inserisci un indirzzo mail valido")
        return
    }

    for (i = 0; i < registered_users.length; i++) {
        if (registered_users[i].mail == user_mail_input.value && registered_users[i].password == user_pass_input.value) {
            check = true
        } else if (registered_users[i].mail == user_mail_input.value && registered_users[i].password !== user_pass_input.value) {
            correct_pass = false
        }

        else if ((registered_users[i].mail !== user_mail_input.value && registered_users[i].password !== user_pass_input.value) || (registered_users[i].mail !== user_mail_input.value && registered_users[i].password == user_pass_input.value)) {

        }
    }

    if (check) {
        window.alert("Log in avvenuto correttamente")
        check = false
    } else if (!correct_pass) {
        window.alert("La password inserita è errata")
    }
    else {
        window.alert("I dati inseriti non sono corretti")
    }
})

