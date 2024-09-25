const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function AddTask()
{
    if(inputBox.value === ''){
    alert("You Should Mention Some Task")
}
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML='\u00d7' // for cross symbol
        li.appendChild(span);
    }
// for clearing text in input box
inputBox.value="";
savedata();
}

// for marking whether the task is completed and for deleting if the cross is pressed
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    savedata();
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
}
}, false);

// for restoring the content after refreshing
function savedata()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
