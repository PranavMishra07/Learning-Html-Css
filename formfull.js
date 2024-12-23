function validate() {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let contact = document.querySelector("#contact").value
    let email = document.querySelector("#email").value


    if (name == "") {
        alert("Please Enter Your Name")
        document.querySelector("#name").focus()
        return false
    }
    else if (age == "") {
        alert("Enter Your Age")
        document.querySelector("#age").focus()
        return false
    }
    else if (contact == "") {
        alert("Enter Your Contact")
        document.querySelector("#contact").focus()
        return false
    }
    else if (isNaN(contact)) {
        alert("Age Should Be in number")
        document.querySelector("#contact").focus()
        return false
    }
    else if (contact.length > 10 || contact.length < 10) {
        alert("Number Should Be 10 Digit ")
        document.querySelector("#contact").focus()
        return false
    }
    else if (email == "") {
        alert("Enter Your email")
        document.querySelector("#email").focus()
        return false
    }
    else if ((!email.includes("@"))) {
        alert("use @ for Validation")
        document.querySelector("#email").focus()
        return false
    }
    else if (isNaN(age)) {
        alert("Age Should Be in number")
        document.querySelector("#age").focus()
        return false
    }

}
