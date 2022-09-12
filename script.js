const itemList = document.querySelector('.items-list');
const submitButton = document.querySelector("button");
function addItem (e) {
    e.preventDefault();
    let newInput = document.querySelector('input');
    let editInput = newInput.value.trim();
    if(!editInput) return alert("Please enter a task.");
    let newTask = document.createElement('div');
    newTask.className = 'item';
    newTask.innerHTML = `                
    <p>${editInput}</p>
    <div class="item-buttons">
        <img src="./img/edit.png" alt="edit" class="edit">
        <img src="./img/remove.png" alt="delete" class="delete">
    </div> 
    `;
    newInput.value = "";
    itemList.appendChild(newTask);
    notify();
    console.log(e);
}


function notify(){
    let notice = document.querySelector(".notice");
    console.log(notice)
    notice.style = "opacity:100%"
}

function removeItem (task) {

}

submitButton.addEventListener("click", addItem)
// submitButton.addEventListener("click", notify)
// itemList.addEventListener("click", (e) => {
//     if(e.target.d)
// })