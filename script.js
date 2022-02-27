const paragraphe=document.querySelector("#para")
const element=document.querySelector("#elements")

element.addEventListener("change",(e)=>{
paragraphe.style[e.target.id]= 
e.target.id=="font-size" ? e.target.value +"px":e.target.value;
})

