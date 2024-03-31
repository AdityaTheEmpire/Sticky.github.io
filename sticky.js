const navBarE1 = document.querySelector(".navBar")

const bottomContainerE1 = document.querySelector(".bottomContainer")

console.log(navBarE1.offsetHeight);

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerE1.offsetTop - navBarE1.offsetHeight - 50){
        navBarE1.classList.add("activation")
    }else{
        navBarE1.classList.remove("activation")
    }
})