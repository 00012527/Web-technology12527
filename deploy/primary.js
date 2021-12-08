// decraring variables
let navigation = document.querySelector(".navigation")
let sportWrapper = document.querySelector(".sport-wrapper")
let cardWrapper = document.querySelector(".card-wrapper")
let navLinks = document.getElementById("navLinks");
let menuBar = document.getElementById("menu-bar");
let darkness = document.querySelector(".darkness");
let closeMe = document.querySelector(".closeMe");
let hiddenArea = document.querySelector(".hiddenArea");
let btn = document.querySelector(".btn");
let form = document.querySelector(".send");
let textField = document.querySelector(".textField");
let nameField = document.querySelector(".nameField");
let emailField = document.querySelector(".emailField");




menuBar.addEventListener("click", function() {
    navLinks.classList.toggle("hide-menuBar")
    darkness.classList.add("dark-appear")
    darkness.style.zIndex = "90"
    darkness.style.opacity = "1"
})

darkness.addEventListener("click", function() {
    navLinks.classList.remove("hide-menuBar")
    darkness.classList.remove("dark-appear")
    darkness.style.zIndex = "-1"
    darkness.style.opacity = "0"

})


window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navigation.classList.add("nav-change")
    }else{
        navigation.classList.remove("nav-change")
    }

})


                

                
let typesOfSport = ["Boxing","Body Building","Wrestling"]

let infosOfSport = [
    "our fitness is fully facilitated for boxing and every year a number of olympic champions train in our facilty. Coming to the price: 100$ a little bit expensive than others but european atmosphere",
    
    "On the second flor, everything is for making big muscles and be attractive and glasses that shows how you are changing that is one way of motivating. price is 400.000 sum.",
    
    "You can find our national type of sport Wrestling here. Interestingly, for this anyone from 7 to 70 years can use this chance as it has no restriction on age. Price is 500.000 sum."
]


for(let i = 0; i<typesOfSport.length;i++){
    let sportColumn = document.createElement("div")
    let headingPart = document.createElement("h3")
    let paragraph = document.createElement("p")
    
    headingPart.textContent = typesOfSport[i]
    paragraph.textContent = infosOfSport[i]

    sportColumn.classList.add("sport-col")

    sportColumn.appendChild(headingPart)
    sportColumn.appendChild(paragraph)

    sportWrapper.appendChild(sportColumn)
}    
               

let teamsInfo = {
    images:["images/boxing.jpg","images/body building1.jpg","images/wrestling.jpg"],
    boxHeads:["Israil Madriomov","Aziz Estet","Artur Taymazov"],
    boxParagraphs:["olympic champin in 2019 and owner of WBA belt","Trainer in our fitness and also daviser in terms of nutrients.","olympic champion many times and now retired and teaching young generation"],
}

teamsInfo.images.forEach((image,i)=>{
    let box = document.createElement("div")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let p = document.createElement("p")
    
    box.classList.add("box")
    div.classList.add("text1")

    img.src = image
    div.textContent = teamsInfo.boxHeads[i]
    p.textContent = teamsInfo.boxParagraphs[i]

    box.appendChild(img)
    box.appendChild(div)
    box.appendChild(p)

    cardWrapper.appendChild(box)
})


btn.addEventListener("click",()=>{
   hiddenArea.style.top = "0" 
})

closeMe.addEventListener("click",()=>{
   hiddenArea.style.top = "-200%" 
})


form.addEventListener("submit", function(e){
    e.preventDefault()
    if(textField.value !==""){
        textField.style.border = "1px solid black"
    }else{
        textField.style.border = "1px solid red"
    }

    if(nameField.value !==""){
        nameField.style.border = "1px solid black"
    }else{
        nameField.style.border = "1px solid red"
    }

    if(emailField.value !==""){
        emailField.style.border = "1px solid black"
    }else{
        emailField.style.border = "1px solid red"
    }
    
    if(textField.value !=="" && nameField.value !==""&&emailField.value !==""){
        alert("We will contact as possible as we can")
        textField.value = ""
        nameField.value = ""
        emailField.value = ""
    }
})