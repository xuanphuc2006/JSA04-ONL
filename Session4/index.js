const normalBtns = document.getElementsByClassName("calculate_btn")

function handleClick(event){
  const value = event.target.textContent
  const calculationInput = document.querySelector(".calc-operation")
  calculationInput.textContent += value
}

function clearEverything(){
  const calculationInput = document.querySelector(".calc-operation")
  const resultDiv = document.querySelector(".calc-typed")
  //set content back to ""
  calculationInput.textContent = ""
  resultDiv.textContent = ""
}

function calculateFunction(){
  const calculationInput = document.querySelector(".calc-operation")
  const calculationString = calculationInput.textContent
  const newString = calculationString.replace("x", "*")
  
  const result = eval(newString)
  const resultDiv = document.querySelector(".calc-typed")
  resultDiv.textContent = result
}

for(let i=0; i< normalBtns.length; i++){
  const button = normalBtns[i]
  button.onclick = handleClick
}

const clearBtn = document.getElementById("clear_btn")
clearBtn.onclick = clearEverything

const submitBtn = document.getElementById("submit_btn")
submitBtn.onclick = calculateFunction