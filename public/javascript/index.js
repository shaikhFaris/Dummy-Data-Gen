const prEl=document.getElementById("pr")
const copyBtn=document.querySelector(".copy")
const genBtn=document.querySelector("#gen-btn")

function copy()
{
    window.alert("copy it manually")
}

async function generate()
{
   let data= await fetch("http://localhost:4444/api")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming the response is JSON
    })
    .then(data => {
      // Use the received data
    //   console.log(data);
      return data // Example: log the received data to the console
      // Now you can manipulate the DOM or do anything else with the data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    // console.log(data)
    // console.log(data[0].Name);
    for (let i = 0; i < data.length; i++) {
    prEl.innerText=prEl.innerText + `{
    name:${data[i].Name},
    salary:${data[i].salary},
    language:${data[i].language},
    city:${data[i].city},
    company:${data[i].company},
    OS:${data[i].os},
    married:${data[i].married}
}
        `
        
    }
}

copyBtn.addEventListener("click",copy)
genBtn.addEventListener("click",generate)




