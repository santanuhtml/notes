gsap.registerPlugin(ScrollTrigger);


var nav_menu_tl = gsap.timeline({paused: true});  
nav_menu_tl.to(".side-menu", { duration: .5, width: 100+"vw", borderRadius:"0%", ease: "back.out(.5)"})
            .from(".side-menu .nav-logo, .side-menu .nav-tob-btn, .side-menu .nav-menu-fixed", { duration: 0.5, stagger:0.07, y: '50', opacity:0, ease: "back.out(.5)"})
            .from(".side-menu ul li", { duration: 0.5, ease: "back.out(1.7)", x: '50', y:'50', stagger:0.08, opacity:0}, "-=0.5");
//nav_menu_tl.play();
$('.hum-icon').click(function(){
  nav_menu_tl.play();
});

$('.hum-icon-close').click(function(){
  nav_menu_tl.reverse();
});




// Locomotive
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.3
});

// Need for scrollTrigger ---------------------------------------------------- //
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});

// Need for scrollTrigger & another code to be added in bottom ----------------------------------- //



var boxWidth = 650,
    totalWidth = boxWidth * 6,  // * n of boxes + diff textBox
    time = 30,
    no01 = document.querySelectorAll("#text-scroll span"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

gsap.set('.text-scroll .scroll-outer',{width: totalWidth});
gsap.set('.text-scroll .scroll-outer',{xPercent:-20,yPercent:0});

var mod = gsap.utils.wrap(0, totalWidth);

gsap.set(no01, {
  x:function(i) {
    return i * boxWidth;
  }
});

var action = gsap.timeline()
.to(no01,  {
  x: dirFromRight,
  modifiers: {
    x: x => mod(parseFloat(x)) - 200 + "px"
  },
  duration:time, ease:'none',
  repeat:-1,
});





var epic_tl = gsap.timeline({paused: true});
gsap.set("#c2", {scale: 0});
gsap.set("#c3", {scale: 0});
gsap.set("#c4", {scale: 0});
gsap.set("#epic-text", {opacity: 0, scale: 0.5, rotate: 15});

epic_tl.from('#c1', {duration: 1, y: '50%'}, "c1")
.to('h3 .we, h3 .dont', {duration: 2, x: '-60'}, 'c1')
.to('h3 .just', {duration: 2, x: '50'}, 'c1')
.to('h3 .websites', {duration: 2, x: '-30'}, 'c1')
.to('#cp1', {duration: 2, x: '-60'}, 'c1')
.to('#cp2', {duration: 2, x: '50', y: '50'}, 'c1')
.to('#c1', {duration: 1, scale: 4})
.to('#c2', {duration: 2, scale: 6}, "-=0.5")
.to('#c3', {duration: 2, scale: 6}, "-=1.5")
.to('#c4', {duration: 2, scale: 3.8}, "-=1")
.to('#epic-text', {duration: 2, opacity: 1, scale: 0.8, rotate: 0}, "-=1");


ScrollTrigger.create({
  trigger: "#home-animation",
  animation: epic_tl,
  // Uncomment these to see how they affect the ScrollTrigger
  //markers: true,
  start: "top top",
  end: "300% top",
  // toggleClass: "active",
  pin: true,
  scrub: 1,
  scroller: ".scroll-container"
  // onUpdate: self => {
  //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  // }
});

// gsap.to('#round1', {
//   scrollTrigger: {
//     trigger: '.section-h-do',
//     //markers: true,
//     start: "200px center",
//     scrub: 1
//   },
//   duration: 1, top: '30%'
// });

// gsap.to('#round2', {
//   scrollTrigger: {
//     trigger: '.section-h-do',
//    // markers: true,
//     start: "center center",
//     scrub: 1
//   },
//   duration: 1, bottom: '10%'
// });


var halfCircle_tl = gsap.timeline({paused: true});   
halfCircle_tl.to(".child", { duration: 5, ease: "none", width: 800+"vw", height: 800+"vw"});
halfCircle_tl.play();
 ScrollTrigger.create({
  trigger: ".half-cricle",
  scrub: true, //1 for smooth animation
  //pin: true,
  start: "50% 100%",
  end:"bottom top", //default value "bottom top"
  //markers: true,
  scroller: ".scroll-container",
  animation: halfCircle_tl
});

var halfCircle2_tl = gsap.timeline({paused: true});   
halfCircle2_tl.to(".child2", { duration: 5, ease: "none", width: 800+"vw", height: 800+"vw"});
halfCircle2_tl.play();
 ScrollTrigger.create({
  trigger: ".half-cricle2",
  scrub: true, //1 for smooth animation
  //pin: true,
  start: "50% 100%",
  end:"bottom top", //default value "bottom top"
  //markers: true,
  scroller: ".scroll-container",
  animation: halfCircle2_tl
});
     



gsap.from('#round-edge1', {
  scrollTrigger: {
    trigger: '.section-h-intro',
    //markers: true,
    scrub: 1,
    scroller: ".scroll-container"
  },
  duration: 1, height: 0, top: 0
});

gsap.from('#round-edge2', {
  scrollTrigger: {
    trigger: '.section-h-works',
    //markers: true,
    scrub: 1,
    scroller: ".scroll-container"
  },
  duration: 1, height: 0, top: 0
});

// gsap.to('#img-webdesign', {
//   scrollTrigger: {
//     trigger: '#webdesign',
//     //markers: true,
//     start: 'center bottom',
//     scrub: 1
//   },
//   duration: 1, rotation: 5, y: 60
// });

// gsap.to('#img-seo', {
//   scrollTrigger: {
//     trigger: '#seo',
//     //markers: true,
//     start: 'center bottom',
//     scrub: 1
//   },
//   duration: 1, rotation: -5, y: 60
// });

// gsap.to('#img-graphics', {
//   scrollTrigger: {
//     trigger: '#graphics',
//     //markers: true,
//     start: 'center bottom',
//     scrub: 1
//   },
//   duration: 1, rotation: 5, y: 60
// });

// gsap.to('#img-laptop', {
//   scrollTrigger: {
//     trigger: '.section-h-intro',
//     //markers: true,
//     start: 'center bottom',
//     scrub: 1
//   },
//   duration: 1, rotation: 5, y: 200
// });


// Need for scrollTrigger ---------------------------------------------------- //
// Put at end
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Need for scrollTrigger ---------------------------------------------------- //