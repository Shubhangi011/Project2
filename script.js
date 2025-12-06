let rect=document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    let rectLocation=rect.getBoundingClientRect();
    let insideRectval=details.clientX-rectLocation.left;

    if(insideRectval<rectLocation.width/2){
      let redColor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectval);
      gsap.to(rect,{
        backgroundColor:`rgb(${redColor},0,0)`,
        ease:Power4,
      });
    }
    else{
      let blueColor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectval);
      gsap.to(rect,{
        backgroundColor:`rgb(0,0,${blueColor})`,
        ease:Power4,
      });    
    }
});

rect.addEventListener("mouseleave",function(){
   gsap.to(rect,{
    backgroundColor:"white",
   }
    
   )
})

 