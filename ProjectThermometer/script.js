{/* <h1>I am Thermometer <span id="temp" class="fa"></span></h1> */}

const thermoMeter=()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML="&#xf2cb;"
    temp.style.color="Purple";

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca;"
        temp.style.color="Green";
    },1000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c9;"
        temp.style.color="Yellow";
    },2000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c8;"
        temp.style.color="Pink";
    },3000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c7;"
        temp.style.color="Red";
    },4000)
}


thermoMeter();
setInterval(thermoMeter,5000);