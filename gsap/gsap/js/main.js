gsap.registerPlugin(ScrollTrigger);
gsap.to(".c",{
	scrollTrigger:{
		trigger:".c",
		start:"top bottom",
		//start:"50px 80%",
		bottom:"top bottom",
		//bottom:"50px 80%",
		markers:true,
		scrub:1, //true & 1 use to bring element
		toggleActions:"restart pause reverse pause"
	},
	x:0,
	ease:"none",
	rotation:360,
	duration:3
});