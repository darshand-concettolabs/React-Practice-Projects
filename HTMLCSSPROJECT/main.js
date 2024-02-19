// Hamburger menu

const toggleButton = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});



//   FAQ Accordian Functionality...

const accordian = document.querySelectorAll(".accordian");

accordian.forEach((item, index) => {
  let faqTitle = item.querySelector(".faq-title");
  faqTitle.addEventListener("click", () => {
    item.classList.toggle("open");

    let faqContent = item.querySelector(".faq-content");

    if (item.classList.contains("open")) {
      faqContent.style.height = `${faqContent.scrollHeight}px`;
      item.querySelector(".faq-title .plus").innerHTML = "-";
      item.querySelector(".faq-title .plus").classList.add("minus");
      item.querySelector(".faq-h2").classList.add("light");
    } else {
      faqContent.style.height = "0px";
      item.querySelector(".faq-title .plus").innerHTML = "+";
      item.querySelector(".faq-title .plus").classList.remove("minus");
      item.querySelector(".faq-h2").classList.remove("light");
    }

    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordian.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let con = item2.querySelector(".faq-content");
      con.style.height = "0px";
      item2.querySelector(".faq-title .plus").innerHTML = "+";
      item2.querySelector(".faq-title .plus").classList.remove("minus");
      item2.querySelector(".faq-h2").classList.remove("light");
    }
  });
}




// Slider Functionality


// Declaring variables...


const slider = document.querySelector(".slider");
const rightArrow = document.querySelector(".right")
const leftArrow = document.querySelector(".left")
const circle = document.querySelector(".controls ul")
const eachCircle = document.querySelectorAll(".controls ul li")
const totalSection = 4;
let sectionIndex =0;


function showSection(){
  document.querySelector(".controls .selected").classList.remove("selected");
  circle.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 +"%)"
}

eachCircle.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    sectionIndex = index;
  showSection();
  })
})

function nextSection(){
  sectionIndex = (sectionIndex + 1) % totalSection;
  showSection();
}

function prevSection(){
  sectionIndex = (sectionIndex - 1 + totalSection) % totalSection;
  showSection();
}


rightArrow.addEventListener('click',()=>{
  nextSection();
})

leftArrow.addEventListener('click',()=>{
  prevSection();
})

let interval = setInterval(()=>{
nextSection();
},4000)

slider.addEventListener('mouseover',()=>{
  clearInterval(interval);
})

slider.addEventListener('mouseout',()=>{
  interval = setInterval(()=>{
    nextSection()
  },4000)
})