import './less/index.less'

// Your code goes here!
//THE MOUSEOVER EVENT
const header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
    header.style.color = "purple";
    header.style.transform = "scale(1.2)"
    header.style.transition = "all 1s"
    setTimeout(function() {
        header.style.color = "green";
        header.style.transform = "scale(1)"
        header.style.transition = "all 1s"
    }, 2000);
}, false);

const header2s = document.querySelectorAll("h2")
header2s.forEach(hd =>{
    hd.addEventListener("mouseover", () => {
        hd.style.transform = "rotate(360deg)"
        hd.style.transition = "all 1s"
        hd.style.color = "purple";
        setTimeout(function() {
            hd.style.transform ="rotate(-360deg)"
            hd.style.transition = "all 1s"
            hd.style.color = "green";
        },2000);
    }, false);
})
//THE CLICK EVENT
const images = document.querySelectorAll("img")
images.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.2)"
        img.style.transition = "all 1s"
        setTimeout(function() {
            img.style.transform ="scale(1)"
            img.style.transition = "all 1s"
        },2000);
    }, false);
})

const buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.3)"
        btn.style.transition = "all 1s"
        setTimeout(function() {
            btn.style.transform ="scale(1)"
            btn.style.transition = "all 1s"
        },2000);
    }, false)
})

//THE DOUBLE CLICK EVENT
const paragraghs = document.querySelectorAll("p")
paragraghs.forEach(p => {
    p.addEventListener("dblclick", () => {
        p.style.display = "none"
        setTimeout(function() {
            p.style.display = "";
        },2000);
    }, false)
})

// THE WHEEL EVENT
const paragraphs2 = document.querySelectorAll("p")
paragraphs2.forEach(p2 => {
    p2.addEventListener("wheel", () => {
        p2.style.fontSize = "3em"
        setTimeout(function() {
            p2.style.fontSize = "initial";
        },2000);
    }, false)
})

//THE SCROLL EVENT
const page = document.querySelector("html")
page.addEventListener("scroll", () => {
    page.style.backgroundColor = "red"
    setTimeout(function() {
        page.style.backgroundColor = "initial";
    },2000);
})

// THE KEY DOWN EVENT
const log = document.querySelector("footer");

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

// THE MOUSE ENTER EVENT
const destinations = document.querySelectorAll(".destination")
for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
        destination.style.fontWeight = "bold"
})

// THE MOUSE LEAVE EVENT
destination.addEventListener("mouseleave", () => {
    destination.style.color = "green"
})
}

//THE LOAD EVENT
window.addEventListener('load', () => {
    alert('The page has fully loaded');
});

//THE SELECT EVENT
const selection = document.querySelector("p")
selection.addEventListener("select", () => {
    alert("You have selected some words");
});