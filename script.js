let name = document.getElementById("bname").value
let price = parseInt(document.getElementById("pbid").value)
let love_letter
var btn = document.querySelector("button")
var education = document.getElementById("education")
var networth = document.getElementById("networth")
var caste = document.getElementById("caste_id")
var skill = document.getElementsByName("skills")
var age = document.getElementsByName("age")

var rep = document.getElementsByName("rep")
var result_text = document.getElementById("cost_result")

let person = {
    bride_name: name,
    bride_price: price,
    letter_to_bride: love_letter
}
calculate = () => {
    let name = document.getElementById("bname").value
    let price = document.getElementById("pbid").value
    if (!name || !price){
        return -1
    }
    price = parseInt(price)
    price = parseFloat(education.value) * price
    price = parseFloat(networth.value) * price
    price = parseInt(caste.value) + price
    price = price + Array.from(skill).filter((a) => a.checked).reduce((a, b) => a + parseInt(b.value), 0)
    ages = Array.from(age)
    function func(a){
        if (a.checked){
            price *= parseFloat(a.value)
        }
    }
    ages.forEach(func)
    for(let i = 0;i < rep.length;i++){
        if(rep[i].checked){
            if(i + 1 < rep.length){
                price = price * parseFloat(rep[i].value)
            }else{
                price = price + parseInt(rep[i].value)
            }
        }
    }
    var love_letter = document.getElementById("love")

    person.bride_price = price
    person.letter_to_bride = love_letter.value
    person.bride_name = name
    return 1;
}

btn.addEventListener('click', function() {

    var check = calculate()
    if (check == -1){
        result_text.innerHTML = "ERROR"
        result_text.style.color = "red"
    }else {
        result_text.innerHTML = person.bride_price + "$"
        if (person.bride_price <= 200) {
            result_text.style.color = "red"
        } else if (person.bride_price <= 400) {
            result_text.style.color = "yellowgreen"
        } else {
            result_text.style.color = "green"
        }
    }
})
