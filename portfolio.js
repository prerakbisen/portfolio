document.addEventListener("DOMContentLoaded", function () {
    let x = document.querySelectorAll('.btn');
    x.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("This project is not deployed right now, work is in progress");
        });
    });

    let r = document.querySelectorAll(".resum");
    let s = document.querySelector("#res")

    r.forEach(resume => {
        resume.addEventListener("click", function () {

            s.style.transform = "scale(1.5)";
            s.style.transition = "transform  1.0s ease-in-out";

            setTimeout(function () {
                s.style.transform = "scale(1)";
            }, 700);
        });
    })
});

let s = document.querySelector("#res");

s.addEventListener("click", function () {
    alert("Resume will be added verry soon..");
});

/////////////////////
document.addEventListener("DOMContentLoaded", function () {
    let p = document.querySelector("#tele");
    let q = document.querySelector("#tg");
    p.addEventListener("click", function () {
        q.style.transform = "scale(1.3)";
        q.style.transition = "transform  1.0s ease-in-out";
        setTimeout(function () {
            q.style.transform = "scale(1)";
        }, 700);
    });
});

// timeline --------------------

document.addEventListener("DOMContentLoaded", function () {
    const moreAbtBtn = document.getElementById("moreabt");
    const timePage = document.getElementById("timepage");
    const closeBtn = document.getElementById("closeBtn");
    let timeline = document.querySelector(".timeline");

    moreAbtBtn.addEventListener("click", function () {
        timePage.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", function () {
        timePage.classList.add("hidden");
    });
    timePage.addEventListener("click", (event) => {
        if (!timeline.contains(event.target)) {
            timePage.classList.add("hidden");
        }
    })
});

// ----------------side nav---------
document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.getElementById("sidenav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            sideNav.classList.add("show-nav");
        } else {
            sideNav.classList.remove("show-nav");
        }
    });
    // --------------- Scroll animation
    let scrollbutton = document.querySelectorAll(".scrollbtn");
    
    scrollbutton.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
