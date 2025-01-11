

$(window).load(function() {
  gsap.to(".overlay .logo",{
    delay:4,
    duration:1,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  });
  gsap.to(".overlay span",{
    delay:4.5,
    duration:1,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  });
  gsap.to(".progress-bar",{
    delay:0,
    duration:2,
    width:'200%',
    x: -60,
    ease:'none'
  });
  var Cont={val:0} , NewVal = 100 ;
  gsap.to(Cont,{
    val:NewVal,
    delay:0,
    duration:2,
    y: -60,
    ease:'none',
    roundProps:"val",
    onUpdate:function(){
      document.getElementById("counter").innerHTML=Cont.val
    }
  });
  gsap.to(".overlay",{
    delay: 2,
    duration:2,
    top: "-100%",
    ease: Expo.easeInOut
  });
});




// Preloader
(function($) {

  Splitting();

  var loader_tl = gsap.timeline({paused: true});

  loader_tl.from(".site-name", { duration: 0.6, opacity:0}, "-=0.2")
  .from(".circle_loader", {duration: 0.5, opacity:0,  ease: "back.out(1.7)", scale: 0.5}, "-=0.2")
  .from(".percentage", {duration: 0.3, opacity:0 }, "-=0.5")
  .from(".loadExp", {duration: 0.5, opacity:0, top: 30 }, "-=0.5")
  loader_tl.play();



   var home_banner_tl = gsap.timeline({paused: true});
   home_banner_tl.from("#home-header", {duration: 1, opacity:0,  ease: "back.out(1.7)", left: -100 })
  // .from("#preTitleBanner", {duration: 0.4, opacity:0,  left:50})
  // .from("#titleBanner", {duration: 0.4, opacity:0, left:50}, "-=0.2")
  // .from("#bannerSlider", {duration: 0.4, opacity:0,  right:50}, "-=0.2")

   //mySplitText = new splitText(".splittext", {type:"words,chars"});
  // gsap.set(".splittext", {perspective: 400});
   //chars = mySplitText.chars;


  var perfData = window.performance.timing,
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = parseInt((EstimatedTime / 1000) % 60, 10) * 100;

  var PercentageID = $("#percentage"),
      //LoaderID = $("#loading-bar span"),
      //revealID = $("#logo-overlay"),
      start = 0,
      end = 100,
      duration = time;
  animateValue(PercentageID, start, end, duration);
  function animateValue(id, start, end, duration) {
    var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);
        // objLoader = $(lid);
        // objReveal = $(rid);
    var timer = setInterval(function() {
      current += increment;
      $(obj).text(Math.floor(current)); 
      //$(objLoader).css("width",current+"%");
      //$(objReveal).css("top",-current+"px"); 
        if (current == end) {
            clearInterval(timer);  
            loader_tl.reverse();
            gsap.to(".preloader", {duration:0.8, opacity: 0},"+=0.2");
            gsap.to(".preloader", {duration:0.8, display: "none"},"+=0.2");
            home_banner_tl.play();
        }
    }, stepTime);
  }

  setInterval(function() {
    $("body").addClass("page-loaded");
  }, time);


})(jQuery);






// Locomotive
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.5
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


var menu_tl = gsap.timeline({paused:true});
menu_tl.to(".sidemenu",{ right:0, duration: 0.1, borderRadius:0 })
.to(".sidemenu .list1 li",{y:-50,  stagger:0.08, ease: "back.out(1.7)",  opacity:1,  marginLeft: 0,  duration: 0.5 }) 
.to(".sidemenu-logo",{ opacity:1, duration:0.5 }, "-=0.5")
.to(".sidemenu .social li",{ y:-25, stagger:0.07, opacity:1, duration:1}, "-=1")
.to("#menu-btn-close" ,{opacity:1, marginRight: 0, duration:0.3}, "-=1");

$('.menu-btn').click(function(){
  menu_tl.play();
});

$('#menu-btn-close').click(function(){
  menu_tl.reverse();
});

$('#close-btn').click(function(){
  $('.sidemenu').removeClass('sidemenu-open');
});


gsap.registerPlugin(ScrollTrigger);


var $circle = $('.followCircle');
var $circleSm = $('.followCircleSm');


function moveCircle(e) {
  gsap.to($circle, {
   duration: 0.4,
   x: e.pageX,
   y: e.pageY
  });
  gsap.to($circleSm,  {
   duration: 0.2,
   x: e.pageX,
   y: e.pageY
  });
}

$(window).on('mousemove', moveCircle);

Splitting();




var dream_caption_tl = gsap.timeline({paused: true});

dream_caption_tl.to(".dream-caption", { duration: 2, left: "-310%"})
.from(".dream-content", {duration:0.5,  top:'100%'})
.to(".bigger-text", {opacity:0.1}, "-=2");


//dream_caption_tl.play();
ScrollTrigger.create({
  trigger: ".section-dream-big",
  scroller: ".scroll-container",
  scrub: true,
  pin: true,
  start: "50% 50%",
  end:"+=3500px top",
  animation: dream_caption_tl
});

//var works_tl = gsap.timeline({paused: true});

const works_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-works",
    start: "-=30px top",
    end:"200% top",
    scrub: true,
    pin: true,
    //markers: true,
    scroller: ".scroll-container"
  }
})

works_tl.to(".works-scroller", {
  duration: 5,
  left: '-90%',
  ease: "none"
});


const pictures_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-h-pictures",
    start: "-=70px top",
    end:"200% top",
    scrub: true,
    pin: true,
    //markers: true,
    scroller: ".scroll-container"
  }
})

pictures_tl.to(".pictures-home", {
  duration: 5,
  scale: 0.96,
  ease: "none"
});


gsap.utils.toArray(".panel").forEach((panel, i)=>{
  ScrollTrigger.create({
    trigger:panel,
    scroller: ".scroll-container",
    start:"top top",
    pin:true,
    pinSpacing:false
  })
});


gsap.set('.hello-outer',{xPercent:0,yPercent:0});

var boxWidth = 120,
    totalWidth = boxWidth * 16,  // * n of boxes + diff textBox
    time = 30,
    no01 = document.querySelectorAll(".white-hello-text .itemlist"),
    no02 = document.querySelectorAll(".yellow-hello-text .itemlist"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

gsap.set(no01, {
  x:function(i) {
    return i * boxWidth;
  }
});

gsap.set(no02, {
  x:function(i) {
    return i * boxWidth;
  }
});

var action = gsap.timeline()
.to(no01,  {
  x: dirFromLeft,
  modifiers: {
    x: x => mod(parseFloat(x)) - 120 + "px"
  },
  duration:time, ease:'none',
  repeat:-1,
});

var action2 = gsap.timeline()
.to(no02,  {
  x: dirFromRight,
  modifiers: {
    x: x => mod(parseFloat(x)) - 120 + "px"
  },
  duration:time, ease:'none',
  repeat:-1,
});


var modal_works = gsap.timeline({paused: true});

modal_works.to('#modalWorks',{
  duration:1,
  opacity:1,
  display:'block'
})
.from('.img-report', {duration: 0.8, ease: 'power2.out', opacity: 0, x: 30, y:150})
.from('.works-title', {duration: 0.8, ease: 'power2.out', opacity: 0, x: 30, scale:3}, "-=0.4")
.from('.works-sub', {duration: 0.8, ease: 'power2.out', opacity: 0, x: 30}, "-=0.4")
.from('.works-content', {duration: 0.8, ease: 'power2.out', opacity: 0, x: 30}, "-=0.4");

modal_works.play();

// $(".counter").each(function() {
//   var count = $(this),
//   zero = {val:0};
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to(zero, {
//     val: count.data("number"),
//     scrollTrigger: ".wrapper",
//     duration: 2,
//     onUpdate: function() {
//       count.text(zero.val.toFixed(1));
//     }
//   });
// });


// const numbers_tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section-numbers",
//     start: "top 50%",
//     end:"top top",
//     scrub: true,
//     //pin: true,
//     markers: true,
//     scroller: ".scroll-container"
//   }
// });




// ScrollTrigger.create({
//   trigger: ".section-works",
//   start: "top top",
//   end:"bottom top",
//   scrub: true,
//   pin: true,
//   markers: true,
//   scroller: ".scroll-container"
// });




$('.work-carousel').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  autoplay:true,
  margin:10,
  smartSpeed:800,
  autoplayTimeout:4000,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:2
    }
  }
});
$('.brand-carousel').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  autoplay:true,
  margin:10,
  smartSpeed:800,
  autoplayTimeout:3000,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
  }
});
$('.logo-carousel2').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  autoplay:true,
  margin:10,
  smartSpeed:800,
  navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
  autoplayTimeout:3000,
  responsive:{
    0:{
        items:2
    },
    600:{
        items:4
    },
    1000:{
        items:6
    }
  }
});
$('.logo-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
  autoplay:true,
  margin:10,
  smartSpeed:800,
  autoplayTimeout:3000,
  responsive:{
    0:{
        items:2
    },
    600:{
        items:4
    },
    1000:{
        items:6
    }
  }
});


// Need for scrollTrigger ---------------------------------------------------- //
// Put at end
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Need for scrollTrigger ---------------------------------------------------- //





//Works
// const allVenues = gsap.utils.toArray(".venues-item");
// const venueImageWrap = document.querySelector(".venues-img-wrap");
// const venueImage = document.querySelector(".venues-img");

// function initVenues() {
//   allVenues.forEach((link) => {
//     link.addEventListener("mouseenter", venueHover);
//     link.addEventListener("mouseleave", venueHover);
//     link.addEventListener("mousemove", moveVenueImage);
//   });
// }

// function moveVenueImage(e) {
//   let xpos = e.clientX;
//   let ypos = e.clientY;
//   const tl = gsap.timeline();
//   tl.to(venueImageWrap, {
//     x: xpos,
//     y: ypos
//   });
// }

// function venueHover(e) {
//   if (e.type === "mouseenter") {
//     const targetImage = e.target.dataset.img;

//     const t1 = gsap.timeline();
//     t1.set(venueImage, {
//       backgroundImage: `url(${targetImage})`
//     }).to(venueImageWrap, {
//       duration: 0.5,
//       autoAlpha: 1
//     });
//   } else if (e.type === "mouseleave") {
//     const tl = gsap.timeline();
//     tl.to(venueImageWrap, {
//       duration: 0.5,
//       autoAlpha: 0
//     });
//   }
// }

// function init() {
//   initVenues();
// }

// window.addEventListener("load", function () {
//   init();
// });

