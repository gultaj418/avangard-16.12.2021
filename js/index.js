// FAQ SECTION ACCORDION
var acc = document.getElementsByClassName("questions");
var i;
const tl = gsap.timeline();

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeQuestions");
  });
}

gsap.from("#mainContentPart", 2, {
  delay: 0.1,
  // y: 20,
  x: -300,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".btn", 2, {
  delay: 0.2,
  x: -200,
  opacity: 0,
  ease: Expo.easeInOut,
});

//Gsap for img lines on default page
const tl2 = gsap.timeline();
tl2.from(".img-lines img", 1, {
  y: 600,
  x: -600,
  stagger: 0.33,
});

gsap.registerPlugin(ScrollTrigger);

const tl3 = gsap.timeline();
tl3.from(".card", 1, {
  y: 300,
  opacity: 0,
  stagger: 0.33,
  delay: 2,
});
