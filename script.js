const education_prices = {
    "bachelor": [1.5, "mult"],
    "college": [1.2, "mult"],
    "high_school": [1.05, "mult"],
    "middle_school": [0.9, "mult"]
};
const networth_prices = {
    "upper_class": [2, "mult"],
    "middle_class": [1.5, "mult"],
    "lower_class": [1.2, "mult"]
}
const caste_prices = {
    "brahmin": [100, "sum"],
    "kshatriya": [50, "sum"],
    "vaishya": [20, "sum"],
    "shudra": [10, "sum"],
    "varna": [-50, "sum"]
}
const skill_prices = {
    "music_instrument": [10, "sum"],
    "good_cook": [20, "sum"],
    "easy_person": [15, "sum"],
    "good_sing": [10, "sum"]
}
const age_prices = {
    "young": [1.5, "mult"],
    "medium": [1.2, "mult"],
    "old": [0.95, "mult"]
}
const reputation_prices = {
    "gossips_parents": [0.85, "mult"],
    "gossips_character": [0.9, "mult"],
    "gossips_general": [-20, "sum"]
}
let cost = {
    current_cost: 100,
    calculate : function (a){
        if(a[1] == "mult"){
            this.current_cost = this.current_cost * a[0]
        }else{
            this.current_cost = this.current_cost + a[0]
        }
        return this.current_cost
    }

}
var btn = document.querySelector("button")
var education = document.getElementById("education")
var networth = document.getElementById("networth")
var caste = document.getElementById("caste_id")
var skill = document.getElementsByName("skills")
var age = document.getElementById("age_id")
var rep = document.getElementsByName("rep")
var result_text = document.getElementById("cost_result")
btn.addEventListener('click', function() {
    cost.current_cost = 100

    var chosen = education.children[education.selectedIndex].value
    cost.calculate(education_prices[chosen])

    chosen = networth.children[networth.selectedIndex].value
    cost.calculate(networth_prices[chosen])

    chosen = caste.children[caste.selectedIndex].value
    cost.calculate(caste_prices[chosen])

    for(let i = 0;i < skill.length;i++){
        if(skill[i].checked){
            chosen = skill[i].value
            cost.calculate(skill_prices[chosen])
        }
    }

    chosen = age.children[age.selectedIndex].value
    cost.calculate(age_prices[chosen])

    for(let i = 0;i < rep.length;i++){
        chosen = rep[i].value
        if(rep[i].checked && (chosen in reputation_prices)){
            cost.calculate(reputation_prices[chosen])
        }
    }

    console.log(cost.current_cost)
    result_text.innerHTML = cost.current_cost.toString() + "$"
    if(cost.current_cost <= 200){
        result_text.style.color = "red"
    }else if(cost.current_cost <= 400){
        result_text.style.color = "yellowgreen"
    }else{
        result_text.style.color = "green"
    }
})
