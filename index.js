const sDiv = document.getElementsByClassName("s-div")[0]
const inp = document.querySelector("#inp")
const btn = document.querySelector("#f-div-btn")
const feet = 3.28084 //meters
const gallon = 0.264172 //liters
const pound = 2.205 //kilograms
const title = [
    "Lenght (Meter/Feet)",
    "Volume (Liters/Gallons)",
    "Mass (Kilograms/Pounds)"
]


render()

function arr(inp, f, g, p){
    const content = [
        `${inp} meters = ${(inp*f).toFixed(2)} feet | ${inp} feet = ${(inp/f).toFixed(2)} meters`,
        `${inp} liters = ${(inp*g).toFixed(2)} gallons | ${inp} gallons = ${(inp/g).toFixed(2)} liters`,
        `${inp} kilograms = ${(inp*p).toFixed(2)} pounds | ${inp} pounds = ${(inp/p).toFixed(2)} kilograms`
]
return content
}

function calculate(){
    //let inpV = Number(inp.value) || 0; // accepts negative numbers
    let content = []
    const x = Number(inp.value)
    const inpV = (x>0) ? x : 0

    content = arr(inpV, feet, gallon, pound)
    
    
    return content
}



btn.addEventListener("click", render)


function template(arr){
    let temp = ""
    for(let i=0; i<arr.length; i++){
        temp +=`
        <div class="s-f-div">
            <p class="s-f-div-f-p">${title[i]}</p>
            <p class="s-f-div-s-p">${arr[i]}</p>
        </div>
    `   
    }

    sDiv.innerHTML = temp
}

function render(){
    const contentRef = calculate()
    template(contentRef)
}









// const sDiv = document.getElementsByClassName("s-div")[0];
// const inp = document.querySelector("#inp");
// const btn = document.querySelector("#f-div-btn");

// const feet = 3.28084;
// const gallon = 0.264172;
// const pound = 2.205;

// const titles = [
//   "Lenght (Meter/Feet)",
//   "Volume (Liters/Gallons)",
//   "Mass (Kilograms/Pounds)"
// ];

// // Ținem referințe către paragrafele “body” ca să le actualizăm rapid
// const bodyEls = [];

// init();
// render();
// btn.addEventListener("click", render);

// function init() {
//   const frag = document.createDocumentFragment();

//   for (let i = 0; i < 3; i++) {
//     const card = document.createElement("div");
//     card.className = "s-f-div";

//     const pTitle = document.createElement("p");
//     pTitle.className = "s-f-div-f-p";
//     pTitle.textContent = titles[i];

//     const pBody = document.createElement("p");
//     pBody.className = "s-f-div-s-p";

//     bodyEls.push(pBody);

//     card.appendChild(pTitle);
//     card.appendChild(pBody);
//     frag.appendChild(card);
//   }

//   sDiv.appendChild(frag);
// }

// function render() {
//   const x = Number(inp.value);
//   let v = 0;
//   if (Number.isFinite(x) && x > 0) v = x;

//   bodyEls[0].textContent =
//     `${v} meters = ${(v * feet).toFixed(2)} feet | ${v} feet = ${(v / feet).toFixed(2)} meters`;

//   bodyEls[1].textContent =
//     `${v} liters = ${(v * gallon).toFixed(2)} gallons | ${v} gallons = ${(v / gallon).toFixed(2)} liters`;

//   bodyEls[2].textContent =
//     `${v} kilograms = ${(v * pound).toFixed(2)} pounds | ${v} pounds = ${(v / pound).toFixed(2)} kilograms`;
// }