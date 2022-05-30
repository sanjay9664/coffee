// Add the coffee to local storage with key "coffee"


const url = " https://masai-mock-api.herokuapp.com/coffee/menu"

fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {

        let data = res.menu.data

        data.forEach(function(el, index) {

            let div = document.createElement("div")

            let image = document.createElement("img")

            image.src = el.image

            let title = document.createElement("p")

            title.innerText = el.title

            let price = document.createElement("P")

            price.innerText = el.price

            let btn = document.createElement("button")

            btn.innerText = "Add to Bucket"

            btn.addEventListener("click", function() {

                add_to_bucket(el, index)

                a = JSON.parse(localStorage.getItem("coffee")).length

                zero_count.innerText = a

            })

            div.append(image, title, price, btn)

            document.getElementById("item").append(div)


        })
    })
    .catch(function(err) {
        console.log(err)
    })


var arrdata = JSON.parse(localStorage.getItem("coffee")) || []


function add_to_bucket(el, index) {
    arrdata.push(el)

    localStorage.setItem("coffee", JSON.stringify(arrdata))

}