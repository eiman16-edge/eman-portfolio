
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if(menuToggle){
  menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
}
document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",()=>nav?.classList.remove("open"));
});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector("#contactForm");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const status=document.querySelector("#formStatus");
    status.textContent="Thanks! Your message has been prepared. Connect the form to your email service to receive submissions.";
    form.reset();
  });
}
