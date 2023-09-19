//set initial count
let count = 0;

//select valu and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


//console.log(btns);

btns.forEach(function (btn) {
btn.addEventListener("click", function(e){
    // console.log('here')
    const styles = e.currentTarget.classList;
    console.log(styles);
    
    if (styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else{
        count = 0;
    }
    if (count > 0){
        value.style.color ="green";
    }
    if (count < 0){
        value.style.color ="red";
    }
    if (count === 0){
        value.style.color ="#222";
    }
    value.textContent = count;
})
});