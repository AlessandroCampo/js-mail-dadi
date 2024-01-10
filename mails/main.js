const user_mail_input = document.getElementById("user_mail")
const button = document.getElementById("button")

let regisered_mails = ["mariorossi@gmail.com", "jonsnow@gmail.com", "goku@gmail.com", "georgemartin@gmail.com", "brandonsanderson@gmail.com", "cristophernolan@gmail.com"]

let check = false

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

    for (i = 0; i < regisered_mails.length; i++) {
        if (regisered_mails[i] == user_mail_input.value) {
            check = true
        }
    }

    if (check) {
        window.alert("you have been logged in")
        check = false
    } else {
        window.alert("you are not registered")
    }
})