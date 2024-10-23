const todo = (el) => {
  const addTodoInput = el.querySelector('.add-todo input')
  const addTodoBtn = el.querySelector('.add-todo button')
  const todoList = el.querySelector('.todos')
  
  const addTodo = (todoText) => {
    const text = todoText || addTodoInput.value
    if (text.length) {
      const newEl = document.createElement('li')
      newEl.title = "Pulsa para borrar"
      newEl.append(document.createTextNode(text))
      newEl.addEventListener('click', (event) => {
        event.preventDefault()
        event.target.parentNode.removeChild(event.target);
      })
      todoList.append(newEl)
      addTodoInput.value = ''
    }
  }
  
  addTodoBtn.addEventListener('click', (event) => {
    event.preventDefault()
    addTodo()
  })
  
  addTodoInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      event.preventDefault()
      addTodo()
    }
  })
  
  return { addTodo }
}

const instance = todo(document.getElementById('todo'))
instance.addTodo('Elemento 1')
instance.addTodo('Elemento 10')
instance.addTodo('Elemento 11')