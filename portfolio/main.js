let navbar=document.getElementById("navbar")
let links=document.querySelectorAll(".nav .nav-item a")
window.addEventListener("scroll",function(){
  if( window.scrollY >50){
    navbar.classList.add("new-bg-color")
    navbar.style.cssText="transition: 1s "


  }
  else{
    navbar.classList.remove("new-bg-color")
    navbar.style.cssText="transition: 1s "



  }
})
links.forEach(link => {
    link.addEventListener("click",function(e){
        e.preventDefault();
     let currId=  e.target.attributes.href.value;
     let Position=document.querySelector(currId).offsetTop
     window.scroll({
            top: Position,
            behavior:"smooth"
     })
    })
    
});
let arrow_btn=document.getElementById("arrow-btn")
let arrow_top=document.getElementById("arrow-top")
arrow_top.style.opacity="0"
window.addEventListener("scroll",function(){
    let aboutPos=document.getElementById("about").offsetTop;
    console.log(aboutPos)
if(window.scrollY>aboutPos){
    arrow_top.style.opacity="1"
    arrow_top.style.transition="1s"}
else{

    arrow_top.style.opacity="0"
    arrow_top.style.transition="1s"

}

})
arrow_btn.addEventListener("click",function(){
    window.scroll({
        top:0
        ,behavior:"smooth"
    })
})
document.body.style.overflow="hidden"
console.log(document.querySelector(".lodaing"))
document.querySelector(".lodaing").style.visibility="visible"
document.querySelector(".lodaing").style.opacity="1"

document.querySelector(".lodaing").style.transition="1s"




window.addEventListener("load",function(){
   setTimeout(function(){
        document.querySelector(".lodaing").style.visibility="hidden"
        document.querySelector(".lodaing").style.transition="1s"
        document.querySelector(".lodaing").style.opacity="0"

        document.body.style.overflow="auto"
        window.scroll({
            top:0,
            behavior:"smooth"
            
        })
    },2000)
    

})

