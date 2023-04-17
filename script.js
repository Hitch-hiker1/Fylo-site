const header_links = document.querySelectorAll(".header-link");
const section_2_link = document.getElementById("link-to-how");

const btn_1 = document.getElementById("btn-1"); //section-1 
const btn_2 = document.getElementById("btn-2"); //section-2

const input_1 = document.getElementById("input-1"); //section-1
const input_2 = document.getElementById("input-2"); //section-2

const alarm_1 = document.getElementById("warning_text_1"); //section-1
const alarm_2 = document.getElementById("warning_text_2"); //section-3

const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

//Section 1 - alarm text N1

btn_1.addEventListener("click", check_email);
input_1.addEventListener("input", check_email);

function check_email(){
    if(input_1.value === ""){
        alarm_1.classList.remove("showup2");
        alarm_1.classList.add("showup");
        input_1.classList.add("active");
        alarm_1.textContent = "Please enter your email before you start";
    }else if (!input_1.value.includes("@")){
        input_1.classList.add("active");
        alarm_1.classList.remove("showup2");
        alarm_1.classList.add("showup");
        alarm_1.textContent = "Please include @ in the email address";      
    }else{
        input_1.classList.remove("active");    
        alarm_1.classList.remove("showup");
        alarm_1.classList.add("showup2");
        alarm_1.textContent = "Please check your email";  
    };
};

//Section 3 - alarm text N2

btn_2.addEventListener("click", check_email_2);
input_2.addEventListener("input", check_email_2);

function check_email_2(){
    if(input_2.value === ""){
        alarm_2.classList.remove("showup2");
        alarm_2.classList.add("showup");
        input_2.classList.add("active");
        alarm_2.textContent = "Please enter your email before you start";
    }else if (!input_2.value.includes("@")){
        input_2.classList.add("active");
        alarm_2.classList.remove("showup2");
        alarm_2.classList.add("showup");
        alarm_2.textContent = "Please include @ in the email address";      
    }else{
        input_2.classList.remove("active");    
        alarm_2.classList.remove("showup");
        alarm_2.classList.add("showup2");
        alarm_2.textContent = "Please check your email";  
    };
};

//Moving to web pages

header_links.forEach((header_link) => {
    header_link.addEventListener("click", ()=>{
        window.location.href = "http://127.0.0.1:5500/index.html";
       });
});

section_2_link.addEventListener("click", ()=> {
    window.location.href = "http://127.0.0.1:5500/index.html";
});
    
facebook.addEventListener("click", ()=> {
    window.location.href = "https://www.facebook.com/";
});

twitter.addEventListener("click", ()=> {
    window.location.href = "https://twitter.com/login";
});

instagram.addEventListener("click", ()=> {
    window.location.href = "https://www.instagram.com/";
});