
    let x = document.querySelectorAll('.btn');
    x.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("This project is not deployed right now, work is in progress");
        });
    });
   

    

    document.addEventListener("DOMContentLoaded", function() {
        let r = document.querySelector("#resume");
        let s = document.querySelector("#res")
    
       
        r.addEventListener("click", function() {
            // // s.style.transform = "scale(2)";
            // s.classList.add("resume");
            // // s.classList.toggle("resume");

            s.style.transform = "scale(1.5)"; // Scale up
            s.style.transition= "transform  1.0s ease-in-out"; 
            

            // Reset the transform to the original size after a short delay
            setTimeout(function () {
                s.style.transform = "scale(1)";
            }, 700); 

        });
    });
    

    let s = document.querySelector("#res");
   
        s.addEventListener("click", function() {
            alert("Resume will be added verry soon , sorry of inconvenience");
        });
    

    /////////////////////
    document.addEventListener("DOMContentLoaded", function() {
    let p = document.querySelector("#tele");
    let q = document.querySelector("#tg");
    p.addEventListener("click", function(){
        q.style.transform = "scale(1.3)"; // Scale up
            q.style.transition= "transform  1.0s ease-in-out";
        setTimeout(function () {
            q.style.transform = "scale(1)";
            }, 700);
    });
    });
