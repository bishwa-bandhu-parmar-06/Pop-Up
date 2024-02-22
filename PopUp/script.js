const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const msgBox = document.getElementById("msg-box");

openBtn.addEventListener("click", ()=>{
    // console.log("Hello");
    msgBox.classList.add('active');
    openBtn.style.display = "none";
})
closeBtn.addEventListener("click", ()=>{
    // console.log("Hello");
    msgBox.classList.remove('active');
    openBtn.style.display = "block";
})
