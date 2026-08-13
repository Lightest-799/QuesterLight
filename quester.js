// alert('Accept all cookies');

// let name = 'Sir Light';
// console.log(name)

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// ---------------------------------------------------------------------------------------------------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("text-amber-500");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("text-amber-500");

        }

    });

});

// ---------------------------------------------------------------------------------------------------------------------------

const reveal = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.remove("opacity-0","translate-y-10");

}

});

});

reveal.forEach(section=>{

section.classList.add(
"opacity-0",
"translate-y-10",
"duration-700"
);

observer.observe(section);

});

// -------------------------------------------------------------------------------------------------------------------------------

const videos = document.querySelectorAll("video");

const videoObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.play();

}else{

entry.target.pause();

}

});

});

videos.forEach(video=>{

videoObserver.observe(video);

});

// ----------------------------------------------------------------------------------------------------------------------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.remove("hidden");

}else{

topBtn.classList.add("hidden");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// --------------------------------------------------------------------------------------------------------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("bg-gray-950","shadow-xl");

}else{

header.classList.remove("bg-gray-950","shadow-xl");

}

});

// --------------------------------------------------------------------------------------------------------------------------------------


//          FOR THE VIDEO

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".scroll-video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (!entry.isIntersecting) {
          video.pause();
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  videos.forEach((video) => {
    observer.observe(video);
  });
});