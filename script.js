const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function(){
    sidebar.classList.add("clicked");
    menu.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", function(){
    sidebar.classList.remove("clicked");
    menu.style.display = "block";
    close.style.display = "none";
})
