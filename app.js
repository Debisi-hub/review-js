// local review data
const reviews = [
    {
        id: 1,
        name: "Adebayo Adebisi",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "A beginner in tech ",
    },
    {
        id: 2,
        name: "Dami Seweje",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "A tech guru.Baba na master for tech",
    },
    {
        id: 3,
        name: "Richard Eradiri",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "My guy sabi tech, baba na master for tech.",
    },
    {
        id: 4,
        name: "Favour Ife",
        job: "Web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Another Agba wey sabiii",
    },
];
// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting items
let currentItem = 0

// load initial item
window.addEventListener("DOMContentLoaded", function() {
 showPerson()
})

// show person based on item
function showPerson(){
 const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
 currentItem++;
 if(currentItem > reviews.length -1){
  currentItem = 0;
 }
 showPerson();
})
// show prev person
prevBtn.addEventListener("click", function(){
 currentItem--;
 if(currentItem < 0){
  currentItem = reviews.length - 1
 }
 showPerson();
})

// random person
randomBtn.addEventListener("click", function(){
 currentItem = Math.floor(Math.random() *reviews.length)
 showPerson()
})