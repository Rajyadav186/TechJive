function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      scrub: true,
      start: "top 27%",
      end: "top 0%",
      scrub:4
    },
  });

tl.to(".page1 h1", {
    x: -100,
},"anim")

tl.to(".page1 h2",{
    x:100,
},"anim")

tl.to(".page1 video",{
    width:"80%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      scrub: true,
      start: "top -80%",
      end: "top -120%",
      scrub:4
    },
  })
tl2.to(".main",{
    backgroundColor:"#fff"
})
var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      scrub: true,
      start: "top -280%",
      end: "top -310%",
      scrub:4
    },
  })

tl3.to(".main",{
    backgroundColor:"#0f0d0d"
})

var h4=document.querySelectorAll(".nav h4")
var purple=document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display="block"
        purple.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display="block"
        purple.style.opacity="0"
    })
})