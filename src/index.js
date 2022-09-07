document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
   myToDo(e.target["new-task-description"].value)
   form.reset()
  })
})

function myToDo(toDo){
  const ul = document.querySelector('ul')
  const btn= document.createElement('button')
  btn.addEventListener('click',(e)=>{
    e.target.parentNode.remove();
  })
  btn.innerHTML ='X'
  const li = document.createElement('li')
  li.innerHTML = `${toDo} `
  li.appendChild(btn)
  ul.appendChild(li)
}