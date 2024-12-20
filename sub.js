function val() {
    let Name = document.querySelector('#name').value
    let contact = document.querySelector('#contact').value
    if (Name == "") {
        alert("Please Enter Name")
        document.querySelector('#name').focus()
        return false
    }
    else if (contact == "") {
        alert("please Enter Number")
        document.querySelector("#contact").focus()
        return false
    }






}


let num = parseInt(prompt("Entr"));
let count = 0
while (num > 0) {
    num /= 10
    count++
}
console.log(count)


