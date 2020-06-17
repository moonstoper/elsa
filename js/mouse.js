var Mcursor = document.querySelector(".cursor");
var list = document.querySelectorAll(".btn");
window.addEventListener("mousemove", cursor);
function cursor(e){
  Mcursor.style.top = e.pageY + "px";
  Mcursor.style.left = e.pageX + "px";
};

list.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    console.log(btn);
  });
});
