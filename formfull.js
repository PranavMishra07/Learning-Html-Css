function validate() {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let contact = document.querySelector("#contact").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let cpassword = document.querySelector("#cpassword").value



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
    else if (isNaN(contact)) {             // NAN not a Number   is return true or false
        alert("Age Should Be in number")
        document.querySelector("#contact").focus()
        return false
    }
    else if (contact.length > 10 || contact.length < 10) {    // .length count length of the Number
        alert("Number Should Be 10 Digit ")
        document.querySelector("#contact").focus()
        return false
    }
    else if (email == "") {
        alert("Enter Your email")
        document.querySelector("#email").focus()
        return false
    }
    else if ((!email.includes("@"))) {     // includes check character is present or not in the input
        alert("use @ for Validation")
        document.querySelector("#email").focus()
        return false
    }
    else if (isNaN(age)) {
        alert("Age Should Be in number")
        document.querySelector("#age").focus()
        return false
    }
    else if (password == "") {
        alert("please Enter password")
        document.querySelector("#password").focus()
        return false
    }
    else if (!(password.match(/[!~@#$%^&*(){}]/))) {  // match also check   these characters is present or not

        //  //in the input but in Array format 
        alert("please Enter atleast one special Character")
        document.querySelector("#password").focus()
        return false
    }
    else if (password != cpassword) {
        alert("Password is Mismatch")
        document.querySelector("#cpassword").focus()
        return false
    }
    else if (cpassword == "") {
        alert("please Enter Confirm password")
        document.querySelector("#password").focus()
        return false
    }



}
// arrow Function
// ()=>{ return value}
//()=>()
//()=>
//=>
let fname = () => { return "name" }
console.log(fname())
let u = (a) => { return a + a }
console.log(u(2));
