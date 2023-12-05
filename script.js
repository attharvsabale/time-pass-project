
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoanimation(){

var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");


videocon.addEventListener("mouseenter",function(){
     gsap.to(playbtn,{
          scale:1,
          opacity:1
     })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
         scale:0,
         opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
       left:dets.x-70,
       top:dets.y-40
    })
})
}
videoanimation();



function H1animation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
    })

    gsap.from("#page1 #video-container",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:1.3,
        stagger:0.5
    })
}
H1animation();


