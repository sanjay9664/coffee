// On clicking remove button the item should be removed from DOM as well as localstorage.



var arrdata = JSON.parse(localStorage.getItem("coffee"))

// console.log(arrdata)

arrdata.forEach(function(el, index) {

    let div = document.createElement("div")

    let image = document.createElement("img")

    image.src = el.image

    let title = document.createElement("p")

    title.innerText = el.title

    let price = document.createElement("P")

    price.innerText = el.price

    let btn = document.createElement("button")

    btn.innerText = "remove"

    btn.addEventListener("click", function() {

        removedata(el, index)
    })

    div.append(image, title, price, btn)

    document.getElementById("show_coffee").append(div)


});

function removedata(el, index) {
    arrdata.splice(index, 1)
    localStorage.setItem("coffee", JSON.stringify(arrdata))

    window.location.reload()
}


let sum = 0;

for (var a = 0; a < arrdata.length; a++) {
    sum += arrdata[a].price
}

document.getElementById("total_price").append(sum)


console.log(sum)