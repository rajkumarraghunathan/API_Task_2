async function dog() {
let response = await fetch("https://dog.ceo/api/breeds/list/all");
let data = await response.json();
console.log(data);
breedsList(data.message);
   
}

function breedsList(dogs){
    console.log(dogs);
    let content ="";
    // content+=`
    // <div>
    //     <div style="background-image:${dogs};"</div>
    // </div>`
    for (const key in dogs) {
        content+=`
        <div class="card mt-5 card-design" style="width: 18rem;">
          <div class="card-body p-5 text-center ">            
              <p><b>${"DOGS BREED"}</b><br>${key}</p>
          </div>
        </div>
        
        `
        document.getElementById("dog").innerHTML=content;
    }
//     document.getElementById("dog").innerHTML=`
//     <select>
//    <option>Choose the breed</option>
//      ${Object.keys(dogs).map((breed)=>{
//          return `<option>${breed}</option>`
//      }).join(" ")}
    
//     </select>
//     `
}


dog();