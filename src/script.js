

// var scroll=new LocomotiveScroll({
//   el:'[data-scroll-container]',
//   smooth:true
// })




var tl= gsap.timeline({scrollTrigger:{
  trigger:"#two",
  start:"5% 95%",
  end:"50% 50%",
  scrub:true,
  markers:false,
}})

tl.to("#fanta",{
  top:"125%",
  left:"14%",
  width:"20%"
},orange)
tl.to("#orange",{
  top:"160%",
  left:"25%"
},orange)

tl.to("#leaf",{
  top:"125%",
  left:"73%",
  rotate:"330"
},orange)

tl.to("#orange2",{
  top:"171%",
  right:"3%",
  width:"15%"
},orange)


var tl2=gsap.timeline({scrollTrigger:{
  trigger:"#three",
  start:"0% 80%",
  end:"50% 50%",
  markers:false,
  scrub:true
}})


tl2.from("#lemonslice",{
  rotate:"240",
  top:"0%"
},"<")
tl2.from("#pepsilogo",{
  rotate:"360",
  top:"0%"
},"<  ")

tl2.from("#spritecan", {
  rotate: -15,
  opacity:0
},"<");

tl2.from("#pepsican", {
  rotate: 15,
  opacity:0
},"<");


tl2.to("#fanta",{
  top:"221%",
  left:"40.5%",
  width:"18%"
},"<")

tl2.to("#orange",{
  top:"202%",
  left:"40%",
  rotate:360

},"<")

