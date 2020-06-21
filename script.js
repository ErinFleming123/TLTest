const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
let lists = [{
  id: 1,
  name: 'name'
},{
  id: 2,
  name: 'todo'
}];

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.nodeValue
  if (listName == null || listName === '') return
  const list = createList(listName)
})

function createList(name) {
  
}

function render() {
  clearElement(listsContainer) 
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add("list-name")
    listElement.innerText = list.name
    listsContainer.appendChild(listElement)
  })
}

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }

  render()