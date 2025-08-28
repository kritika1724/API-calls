let button = document.querySelector("#showfact");
button.addEventListener("click",async ()=>{
    let p = document.querySelector("#fact");
p.innerHTML = "⏳ Loading...";
let fact = await getFacts();
p.innerHTML = fact;
})
async function getFacts()
{
try{
let res = await axios.get("https://catfact.ninja/fact");
return res.data.fact;
}
catch(e){
console.log("error",e);
return "No fact found";
}
}