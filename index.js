let header_bt = document.querySelector('#header-bt'); 
let header_input = document.querySelector('#header-input'); 
 
// localStorage 
 
let Array_Items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [] ; 
localStorage.setItem('items', JSON.stringify(Array_Items )); 
 
// Add start 
 
header_bt.addEventListener('click',()=>{ 
    let text = header_input.value; 
    if(text === ""){ 
        alert('Please Add Something'); 
    } 
    else{
        Array_Items.push(text); 
        localStorage.setItem('items',JSON.stringify(Array_Items)); 
        // callback add() function 
        //add(text); 
        window.location.reload(); 
    } 
}) 
 
 
 
// Add function start : 
 
let add = (text)=>{ 
 
    let container_Div = document.createElement("div"); 
    container_Div.setAttribute("class","container-div"); 
 
    let sub_Div1 = document.createElement("div"); 
    sub_Div1.setAttribute("class","sub-div1"); 
 
    let sub_Div2 =document.createElement("div"); 
    sub_Div2.setAttribute('class','sub-div2'); 
 
    let todo = document.createElement("p"); 
    todo.setAttribute("class","paragraph"); 
 
    let subButton1 = document.createElement("button"); 
    subButton1.setAttribute("class",'bt1'); 
 
 
   let subButton2 = document.createElement("button"); 
    subButton2.setAttribute("class",'bt2'); 
 
 
    subButton1.setAttribute("onclick","delete_Item(event)"); 
    subButton2.setAttribute("onclick","edit_Item(event)"); 
 
 
 
   /**************************** */ 
 
    let subButton3 = document.createElement("button"); 
    subButton3.setAttribute("class",'bt3'); 
    let done = document.createElement('i'); 
    done.setAttribute('class','fas fa-check'); 
    subButton3.appendChild(done); 
 
    subButton3.setAttribute("onclick","done(event)"); 
 
    /************************** */ 
 
 
    let containerText = document.createTextNode(text); 
    let delete_button = document.createTextNode("delete"); 
    let edit = document.createTextNode("edit"); 
 
   
                                         
    todo.appendChild(containerText); 
    subButton1.appendChild(delete_button); 
    subButton2.appendChild(edit); 
    container_Div.appendChild(sub_Div1); 
    container_Div.appendChild(sub_Div2); 
 
    sub_Div1.appendChild(todo); 
    sub_Div2.appendChild(subButton1); 
    sub_Div2.appendChild(subButton2); 
    sub_Div2.appendChild(subButton3); 
     
 
 
    document.querySelector(".app-container").appendChild(container_Div);  
} 
  
 
 
Array_Items.forEach((item)=>{ 
    add(item); 
}); 
 
// Add function end !! 
 
/********************************* */ 
 
// Delete start  
 
function delete_Item (event){ 
let value = event.target.parentNode.parentNode.firstChild.firstChild.textContent ; 
 
Array_Items.splice(Array_Items.indexOf(value),1); 
localStorage.setItem('items',JSON.stringify(Array_Items)); 
event.target.parentNode.parentNode.remove(); 
 
} 
 
// Delete End  
 
 
/********************************* */ 
 
//  edit start  
 
 
     
function edit_Item(event){ 
     
     
 
    let value = event.target.parentNode.parentNode.firstChild.textContent; 
    window.value=value ; 
 
    // paragraph is editable 
    event.target.parentNode.parentNode.firstChild.firstChild.setAttribute("contenteditable","true"); 
     
    let check = document.createElement('i'); 
    event.target.parentNode.parentNode.firstChild.appendChild(check); 
    check.setAttribute("class","fas fa-check"); 
 
    check.setAttribute("onclick","submit(event)"); 
  
    event.target.parentNode.parentNode.firstChild.style.border=`3.5px solid rgb(22, 138, 24)`; 
 
 
 
} 
 
//  edit start 
 

/****************************************** */ 
 
// submit 
 
let submit = (event)=>{
    //paragraph is not  editable 
    event.target.parentNode.parentNode.firstChild.firstChild.setAttribute("contenteditable","false"); 
    let text = event.target.parentNode.parentNode.firstChild.textContent 
    Array_Items.splice(Array_Items.indexOf(value), 1,text); 
 
    localStorage.setItem('items',JSON.stringify(Array_Items)); 
    event.target.parentNode.parentNode.firstChild.style.border=`none`; 
    event.target.remove(); 
} 
 
 
 
/**************************************************************** */ 
 
//done 
 
let done = (event)=>{ 
    event.target.parentNode.parentNode.parentNode.firstChild.classList.toggle('done1'); 
} 
 
 
 