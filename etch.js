
const container = document.querySelector("#container");
for(let i = 0; i<48*48;i++){
    const gridBlock = document.createElement("div");
    // gridBlock.textContent = `${i}`;
    gridBlock.classList.add("grid");
    container.appendChild(gridBlock);
    
}

const blocks = document.querySelectorAll(".grid");

let isMouseDown = false;

document.addEventListener("mousedown", (e)=>{
        if(e.button === 0){
            isMouseDown = true;
        }
    });
document.addEventListener("mouseup",() =>{
        isMouseDown = false;
    });


blocks.forEach(block => {
    block.addEventListener("mouseover", () =>{
        if (isMouseDown) {
            block.style.backgroundColor = 'black';   
            }
        }
   )
})
