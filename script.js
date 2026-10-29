const CsSeat=document.getElementsByClassName("s-seat");
const CbSeat=document.getElementsByClassName("b-seat");
sSeat=Array.from(CsSeat)
bSeat=Array.from(CbSeat)


sSeat.forEach(item =>{
    if(!item.classList.includes)
    item.addEventListener('click',()=>{
    item.classList.toggle('bs-selected');
    })
})     

bSeat.forEach(item =>{
    item.addEventListener('click',()=>{
    item.classList.toggle('bs-selected');
    })
})    
