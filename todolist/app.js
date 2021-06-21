let option = {
    animation : true,
    delay :3000,
};

let toastShow= () => {
    let toast=document.querySelector("#toast");
    let toastElement=new bootstrap.Toast( toast, option );
    toastElement.show();
};
let toastError= () => {
    let toast=document.querySelector("#toastError");
    let toastElement=new bootstrap.Toast( toast, option );
    toastElement.show();
};


// Add new Todos to list
function addTodo(){
    let task = document.querySelector("#task").value;
        if(task){
        let UlDOM= document.querySelector("#list");
        let li = document.createElement("li");
        li.innerHTML= `${task} <span class="close">X</span>`;
        UlDOM.append(li);
        toastShow();
        localStorage.setItem(`${task}`,JSON.stringify(`${task}`));  // Add todos to Local Storage ==> Local Storage'a Ekleme
        document.querySelector("#task").value=""; // After process,clear to input. ==> İşlemden sonra alanın temizlenmesi
       }
       else{
           toastError();
       }
}



//Remove task from todo list
let button=document.querySelector("#submit")   
button.addEventListener("click", ()=>{
    deleteItem()
    })

// Delete Items  
 deleteItem=() =>{
    let remove=document.querySelectorAll("ul span");
        for(let i=0 ; i < remove.length; i++){
        remove[i].addEventListener("click", ()=>{
            remove[i].parentElement.style.display ="none";
        })
    }
}
// execute for delete item from list
deleteItem()




// Cross the line function => Yapılan görevlerin üstünün çizilmesini sağlayan fonksiyon
checked =() => {
    let items=document.querySelectorAll("ul li");
    for(let i=0 ; i< items.length; i++ ){
        items[i].addEventListener("click", ()=>{
            items[i].classList.add("checked");
        })
    }
} 

button.addEventListener ("click", ()=>{
    checked()
     })

// execute for cross the line items
checked();