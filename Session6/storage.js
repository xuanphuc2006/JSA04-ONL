// Lesson about local storage
const str = "hello world"

const student1 = {
  name: 'Duong',
  age: 15
}

const student2 = {
  name: 'Phuc',
  age: 14
}

const arr = [student1, student2]

const stringtifyArr = JSON.stringify(arr)

localStorage.setItem("keyword", stringtifyArr)

const value = localStorage.getItem("keyword")

const parsedValue = JSON.parse(value)

localStorage.removeItem("keyword")

sessionStorage.setItem("session", str)
sessionStorage.getItem("session")
sessionStorage.removeItem("session")