const sDiv = document.getElementsByClassName("s-div")[0]
const inp = document.querySelector("#inp")
const btn = document.querySelector("#f-div-btn")

// const content = [
//     {
//         title:"Lenght (Meter/Feet)",
//         body:"20 meters = 65.616 feet | 20 feet = 6.096 meters"
//     },
//     {
//         title:"Volume (Liters/Gallons)",
//         body:"20 liters = 65.616 gallons | 20 gallons = 6.096 liters"
//     },
//     {
//         title:"Mass (Kilograms/Pounds)",
//         body:"20 kilograms = 65.616 pounds | 20 pounds = 6.096 kilograms"
//     }
// ]

function calculate(){
    let inpV = 0
    
    const feet = 3.28084 //meters
    const gallon = 0.264172 //liters
    const pound = 2.205 //kilograms
    //const val = [inpV, inpV*feet, inpV*gallon ,inpV*pound, inpV/feet, inpV/gallon, inpV/pound]
    if(Number(inp.value) >0){
           inpV = inp.value
    }
    
    const content = [
    {
        title:"Lenght (Meter/Feet)",
        body:`${inpV} meters = ${(inpV*feet).toFixed(2)} feet | ${inpV} feet = ${(inpV/feet).toFixed(2)} meters`
    },
    {
        title:"Volume (Liters/Gallons)",
        body:`${inpV} liters = ${(inpV*gallon).toFixed(2)} gallons | ${inpV} gallons = ${(inpV/gallon).toFixed(2)} liters`
    },
    {
        title:"Mass (Kilograms/Pounds)",
        body:`${inpV} kilograms = ${(inpV*pound).toFixed(2)} pounds | ${inpV} pounds = ${(inpV/pound).toFixed(2)} kilograms`
    }
]
    return content
}



btn.addEventListener("click", function(){
    const contentRef = calculate()
    template(contentRef)
    
})


function template(arr){
    let temp = ""
    for(let i=0; i<arr.length; i++){
        temp +=`
        <div class="s-f-div">
            <p class="s-f-div-f-p">${arr[i].title}</p>
            <p class="s-f-div-s-p">${arr[i].body}</p>
        </div>
    `   
    }

    sDiv.innerHTML = temp
}
