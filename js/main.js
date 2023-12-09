const body = document.querySelector('body')

const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle("active") 
    body.classList.toggle("darkmode") 
}
let myAnimation = anime({
  targets: ".animejs",
  keyframes: [
    { translateY: -300 },
   
    { translateY: 2 },
  ],
  duration: 4000,
  easing: "easeOutQuad(5, .100)",
  loop: true,
});
