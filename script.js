const items = ["oranges", "bananas"]


function buildList () {
    newItem = document.querySelector('input').value;
    items.push(newItem);
    alert("It Still works!");
}

itemList = items.map(item => `
<div class="item">
<p>${item}</p>
<div class="item-buttons">
    <img src="./img/edit.png" alt="edit" class="edit">
    <img src="./img/remove.png" alt="delete" class="delete">
</div> 
</div>
`);

document.querySelector('.items-list').innerHTML = itemList;
console.log(document.querySelector('input').value)

const submitButton = document.querySelector("form");
// submitButton.addEventListener("click", buildList)
submitButton.addEventListener("submit", function(e){
    e.preventDefault();
    newItem = document.querySelector('input').value;
    items.push(newItem)
    console.log(e)
})



