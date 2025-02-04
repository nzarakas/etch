const body = document.querySelector("body");

const container = document.querySelector("#container");
const slider = document.getElementById("slider");
const btn = document.querySelector("#launchGame");
const output = document.getElementById("output");

const black = document.getElementById("black");
const selectColor = document.getElementById("selectColor");
const inputColor = document.getElementById("inputColor")
const rainbow = document.getElementById("rainbow");


let mode = 1;
let colorA = '#000000';

black.addEventListener("click", ()=>{
    mode = 1;
});
//this serves as a button that trigger the color picker
selectColor.addEventListener("click", ()=>{
    mode = 2;
    inputColor.click();
});
//event handler that enables the colorpicker 
inputColor.addEventListener("input", ()=>{
    colorA = inputColor.value;
    
})

rainbow.addEventListener("click", ()=>{
    mode = 3;
});
//event handler for number of rows via slider
slider.addEventListener("input", function() {
    output.textContent = slider.value;
  });
 

function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
};

btn.addEventListener("click", ()=>{
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    let rows = slider.value;
    // let columns = 0;
    console.log(mode);
    
    //make sure propmpt number is small enough that it won't crash app
    // do{
    //     rows =  +prompt("How many rows in new etch a sketch board?", "40");  
    // }while(Number.isNaN(rows) || rows>100);

    //calculating how many columns grid should have and 
    // resizes grid dynamically based on # of columns
    columns = Math.floor(rows*1.33);
    gridBlockWidth = Math.floor(744/columns); //original width 1020px
    gridBlockHeight = Math.floor(560/rows); //original height 760px
    container.style.width = gridBlockWidth*columns + "px";
    container.style.height = gridBlockHeight*rows + "px";

    for(let i = 0; i<rows*columns;i++){
        const gridBlock = document.createElement("div");
        
        gridBlock.classList.add("grid");
        gridBlock.style.width = gridBlockWidth-1 + "px";
        gridBlock.style.height = gridBlockHeight-1 + "px";
        container.appendChild(gridBlock);  
    }
    

    // This part is about clicking on a grid tile and changing its colour
    // effectively playing the etch a sketch game
    const blocks = document.querySelectorAll(".grid");
    let isMouseDown = false;

    function ColorTheGrid(block){
        block.style.borderStyle = 'none';
        block.style.width = gridBlockWidth + 'px';        
        block.style.height = gridBlockHeight + 'px';
        if(mode === 1){
            block.style.backgroundColor = `black`;
        }
        if(mode === 2){
            block.style.backgroundColor = `${colorA}`;
        }
        if(mode === 3){
            block.style.backgroundColor = randomColor();
        }
         
        
    }

    // document.addEventListener("mousedown", (e)=>{
    //     if(e.button === 0){
    //         isMouseDown = true;
    //         ColorTheGrid(block);
    //     }
    // });
    document.addEventListener("mouseup",() =>{
        isMouseDown = false;
    });


    blocks.forEach(block => {
        document.addEventListener("mousedown", (e)=>{
            if(e.button === 0){
                isMouseDown = true;
            }
        });  
       
        block.addEventListener("mouseover", () =>{
            if (isMouseDown) {
                ColorTheGrid(block);       
            }
        }
        )

    })

});
//let's pretend i don't need this for now
// body.insertBefore(btn,container);


