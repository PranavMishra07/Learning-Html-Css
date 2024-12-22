let i
let n
for (i = 20; i >= 1; i--) {
    if (i % 2 == 1) {
        n = i * i;
        console.log(n)
    }
}






function fun1() {
    let img = document.getElementById('main')
    img.src = "flif/two.jpeg"
}
function fun2() {
    let img = document.getElementById('main')
    img.src = "flif/three.jpeg"
}
function fun3() {
    let img = document.getElementById('main')
    img.src = "flif/four.jpeg"
}
function fun4() {
    let img = document.getElementById('main')
    img.src = "flif/five.jpeg"
}
function fun5() {
    let img = document.getElementById('main')
    img.src = "flif/six.jpeg"
}
function fun6() {
    let img = document.getElementById('main')
    img.src = "flif/seven.jpeg"
}
function fun7() {
    let img = document.getElementById('main')
    img.src = "flif/eight.jpeg"
}



function flag() {
    let name = document.querySelector("#name").value
    let contact = document.querySelector("#contact").value
    if (name == "") {
        alert("Enter NAme")
        document.querySelector("#name").focus()
        return false

    }
    else if (contact == "") {
        alert("ENter Valid Number")
        document.querySelector("#contact").focus()
        return false

    }

}




