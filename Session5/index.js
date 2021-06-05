let activities = JSON.parse(localStorage.getItem("activities"))

if(activities == null){
  activities = []
}

for(let i=0; i< activities.length; i++){
  createActionElement(activities[i].name, activities[i].id, activities[i].completed)
}

function createActionElement(action, id, completed) {
  // Get the ul element
  const ulElement = document.getElementById("tasks-ul")

  // create li element
  const liElement = document.createElement('li')
  liElement.setAttribute("data-id", id)

  //create input element
  const inputElement = document.createElement('input')
  inputElement.type = 'checkbox'
  inputElement.name = action
  inputElement.value = action
  inputElement.checked = completed

  //create label element
  const labelElement = document.createElement('label')
  labelElement.htmlFor = action
  labelElement.textContent = action 
  
  labelElement.onclick = changeActionStatus

  //create i element
  const iElement = document.createElement('i')
  iElement.classList.add("fa", "fa-trash-o", "delete-button")
  
  iElement.onclick = deleteAction

  liElement.appendChild(inputElement)
  liElement.appendChild(labelElement)
  liElement.appendChild(iElement)
  ulElement.appendChild(liElement)
}

function changeActionStatus(e){
  const selectedLabelElement = e.target
  const selectedLiElement = selectedLabelElement.parentElement
  const actionId = selectedLiElement.getAttribute("data-id")
  
  for(let i=0; i<activities.length; i++){
    if(activities[i].id == actionId){
      activities[i].completed = !activities[i].completed 
    }
  }

  localStorage.setItem("activities", JSON.stringify(activities))

  const selectedInputElement = selectedLiElement.firstElementChild 
  selectedInputElement.checked = !selectedInputElement.checked
}

function deleteAction(e){
  const selectedLabelElement = e.target
  const selectedLiElement = selectedLabelElement.parentElement
  const actionId = selectedLiElement.getAttribute("data-id")

  let positionId; 

  for(let i=0; i<activities.length; i++){
    if(activities[i].id == actionId){
      positionId = i 
    }
  }

  activities.splice(positionId, 1)

  localStorage.setItem("activities", JSON.stringify(activities))

  // select the ul element 
  const ulElement = document.getElementById("tasks-ul")
  ulElement.removeChild(selectedLiElement)
}

function clearAllActions(){
  localStorage.removeItem("activities")
  
  // Get the ul element
  const ulElement = document.getElementById("tasks-ul")

  // Clear all actions 
  ulElement.innerHTML = ""
}

function handleSubmit() {
  const inputElement = document.getElementById("task_input")
  const action = inputElement.value
  const errorElement = document.getElementById("error-msg")
  // When input value is empty 
  if(action == ""){
    errorElement.style.visibility = 'visible'
  } else {
    errorElement.style.visibility = 'hidden'
    
    createActionElement(action, activities.length, false)
    
    inputElement.value = ""
    
    const activityObject = {
      name: action,
      completed: false,
      id: activities.length 
    }

    activities.push(activityObject)

    localStorage.setItem("activities", JSON.stringify(activities))
  }
}

const button = document.getElementById("add-task")
button.onclick = handleSubmit

const deleteAllButton = document.getElementById("clear-list")
deleteAllButton.onclick = clearAllActions

const dateSpan = document.getElementById("title-date")
dateSpan.textContent = new Date().toDateString()