// let navLink = document.querySelector(".logo");
let navLink = document.querySelectorAll(".navbar-nav .nav-all");
navLink.forEach(li => {
    window.addEventListener("load",()=>{
        li.style.cssText = "transform: translateY(0)";
    })
})

var typed = new Typed('.text', {
    strings:["Frontend Developer" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let skill = document.querySelector(".skills");
window.onscroll = function () {
    // skills offset top
    let skillsOffsetTop = skill.offsetTop;
    // skill outer height
    let skillsOuterHeight = skill.offsetHeight;
    // window height
    let windowHeight = this.innerHeight; 
    // window scrollTop
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop - skillsOuterHeight + windowHeight)) {
        // this.console.log("reached");
        let allSkills = document.querySelectorAll(".progres .progres-bar");
        allSkills.forEach(span => {
            span.style.opacity = 1;
            span.dataset.progress = span.dataset.width;
            span.style.width = span.dataset.width;
            span.style.backgroundColor = span.dataset.background;
        });
    }
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills2 = document.querySelectorAll(".progresss .progresss-bar");
        allSkills2.forEach(span => {
            span.style.opacity = 1;
            span.style.width = span.dataset.width;
            span.style.height = span.dataset.height;
            // span.style.backgroundColor = span.dataset.background;
        });
    }
};

let myImage = document.querySelectorAll(".image-box img");
// console.log(myImage)
myImage.forEach(image => {
    image.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        let popup =  document.createElement("div");
        popup.className = "popup";
        // create the image
        let popupImg = document.createElement('img');
        // set image source
        popupImg.src = image.src;
        // console.log(popupImg);
        popup.appendChild(popupImg);
        document.body.appendChild(popup);

        let heading = document.createElement("h3");
        heading.className = "heading";
        let headText = document.createTextNode(image.alt);
        heading.appendChild(headText);
        popup.appendChild(heading);

        let pLink = document.createElement("a");
        pLink.className = "project-link";
        pLink.target = "_blank"
        pLink.href = image.dataset.link;
        let linkText = document.createTextNode("visit website");
        pLink.appendChild(linkText);
        popup.appendChild(pLink);

        let close = document.createElement("div");
        close.className = "close";
        let closeText = document.createTextNode("X");
        close.appendChild(closeText);
        close.addEventListener("click",(ev) => {
            overlay.remove();
            popup.remove();
        })
        popup.appendChild(close);
    })
})

let moveTo = document.querySelectorAll(".nav-item .nav-link")
moveTo.forEach(a => {
    a.addEventListener("click" , (e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})