
const enddate = "07 october 2023 01:02 PM" ;
document.getElementById("end").innerText = enddate;
const call = "yuhooo here we are";
const input = document.querySelectorAll("input")
var diff = 0;
const fun = ()=>{
    const end = new Date(enddate);
    const now = new Date(); 
     diff = (end - now)/1000;
    if(diff < 0){
        const colElements = document.getElementsByClassName("col");
        for (let i = 0; i < colElements.length; i++) {
            colElements[i].innerText = call;
        }
        return;
    }
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    // console.log( Math.floor(diff/3600)%24)

    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;

}

if(diff > -1){
        setInterval(()=>{
        fun();
    } , 1000)
    }

    const generate = () => {
        const num =  Math.floor(Math.random() * 16777215);
        const col = '#' + num.toString(16);
        const target = document.getElementsByClassName("main")[0]; 
        target.style.backgroundColor = col; 
    }
    let interval = setInterval(() => {
        generate();
    }, 1000);
    
    // Stop the interval after 10 seconds (10000 milliseconds)
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
    
// console.log("helooo");
    