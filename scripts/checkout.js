function getdata(event) {
    event.preventDefault()

    let form = document.getElementById("form")

    let name = form.name.value

    console.log("name", name)

    let number = form.number.value
    console.log("number", number)

    let add = form.address.value

    console.log("address", add)

    alert("Your order is accepted")

    let a = setInterval(function() {

        alert("Your order is being prepared")
    }, 1000)


    let b = setInterval(function() {

        alert("Your order is being packed")
    }, 1000)

    let c = setInterval(function() {

        alert("Your order is out for delivery")
    }, 2000)

    let d = setInterval(function() {

        alert("order deliver")
    }, 3000)


}