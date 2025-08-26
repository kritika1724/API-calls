const button = document.getElementById("getjoke");
const joke = document.getElementById("joke");

async function fetchjoke()
{
    try{
        joke.innerHTML = "⏳ Loading...";
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
         let data = await response.json();
         //display 
          joke.innerHTML = `
          <p><b>${data.setup}</b></p>
          <p>  ${data.punchline}</p>
          `;

    
    
    }
    catch(error){
        joke.innerHTML = "⚠️ Failed to fetch joke!";
        console.error(error);
    }
}
button.addEventListener("click",fetchjoke);