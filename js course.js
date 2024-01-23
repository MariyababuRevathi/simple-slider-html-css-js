let sliderNumber=1;
let output=document.querySelector(".images");
function nextSlide(){
    if(sliderNumber<3){
        sliderNumber+=1;
        output.src="images/"+sliderNumber+".jpg.jpg"
        output.classList.add("animate");
        setTimeout(()=>{
            output.classList.remove("animate");
        },2000);
        document.querySelector(".lessbtn").removeAttribute("disabled");
    }
    if(sliderNumber===3){
        document.querySelector(".greterbtn").setAttribute("disabled",true);
    }
}
function previousSlide(){
    if(sliderNumber>1){
        sliderNumber-=1;
        output.src="images/"+sliderNumber+".jpg.jpg"
        output.classList.add("animate");
        setTimeout(()=>{
            output.classList.remove("animate");
        },2000);
        document.querySelector(".greterbtn").removeAttribute("disabled");
    }
    if(sliderNumber===1){
        document.querySelector(".lessbtn").setAttribute("disabled",true);
    }
}

