const body = document.querySelector("body");
const btn = document.querySelector("button")
const container = document.querySelector("#container");



btn.addEventListener("click", ()=>{
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    let rows = 0;
    let columns = 0;
    

    //make sure propmpt number is small enough that it won't crash app
    do{
        rows =  +prompt("How many rows in new etch a sketch board?", "40");  
    }while(Number.isNaN(rows) || rows>100);

    //calculating how many columns grid should have and 
    // resizes grid dynamically based on # of columns
    columns = Math.floor(rows*1.33);
    gridBlockWidth = Math.floor(1020/columns);
    gridBlockHeight = Math.floor(760/rows);
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
        block.style.backgroundColor = 'black';
    }


    document.addEventListener("mousedown", (e)=>{
        if(e.button === 0){
            isMouseDown = true;
            ColorTheGrid(block);
        }
    });
    document.addEventListener("mouseup",() =>{
        isMouseDown = false;
    });


    blocks.forEach(block => {  
        block.addEventListener("mouseover", () =>{
            if (isMouseDown) {
                ColorTheGrid(block);       
            }
        }
        )

    })

});

body.insertBefore(btn,container);


