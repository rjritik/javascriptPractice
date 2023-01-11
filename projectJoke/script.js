const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");


//using promises 
// const generateJoke = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data)=>{
//         joke.innerHTML=data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


//using async await
const generateJoke = async() => {
try{  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  const res= await fetch("https://icanhazdadjoke.com", setHeader)
  const data=await res.json();
  joke.innerHTML=data.joke;
}
catch(err){
    console.log(err);
}
};


jokebtn.addEventListener("click", generateJoke);
generateJoke();
