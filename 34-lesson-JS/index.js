// {
//   url: "kun.uz",
//   method: "get", "post", "delete", ("put" || "patch" => "update")
// }

// get => "Olish"
// delete => o'chirish
// post => yaratish
// put | patch => tahrirlash

// fetch()

// CRUD => Create, read, update, delete

// ===============>>
const app = document.querySelector('#app')
const addTaskBtn = document.querySelector('#addTask')
const taskName = document.querySelector('#taskName')
const loaderContainer = document.querySelector('#loader-container')
const baseURL = `http://localhost:3000`

let isEditMode = false
let id = null
const getAndRender = async () => {
  loaderContainer.style.display = 'flex'
  const response = await fetch(`${baseURL}`)
  const data = await response.json()
  loaderContainer.style.display = 'none'
  app.innerHTML = ''
  data.data.forEach((item) => {
    const el = document.createElement('div')
    el.classList.add('row')
    const content = document.createElement('h2')
    content.textContent = item.taskName
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    deleteBtn.textContent = 'Delete'
    el.appendChild(content)
    el.appendChild(editBtn)
    el.appendChild(deleteBtn)
    addTaskBtn.textContent = isEditMode ? 'Edit' : 'Add'
    deleteBtn.addEventListener('click', () => deleteTask(item.id))
    editBtn.addEventListener('click', () => {
      taskName.value = item.taskName
      addTaskBtn.textContent = 'Edit'
      isEditMode = !isEditMode
      id = item.id
    })
    app.appendChild(el)
  })
}
getAndRender()

addTaskBtn.addEventListener('click', async () => {
  if (isEditMode) {
    editTask(id, taskName.value)
    taskName.value = ''
    isEditMode = false
    addTaskBtn.textContent = 'Add'
    return
  }
  loaderContainer.style.display = 'flex'
  await fetch(baseURL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      taskName: taskName.value,
    }),
  })
  loaderContainer.style.display = 'none'
  taskName.value = ''
  getAndRender()
})

const deleteTask = async (id) => {
  loaderContainer.style.display = 'flex'
  await fetch(`${baseURL}/${id}`, {
    method: 'delete',
  })
  getAndRender()
}

const editTask = async (id, newTaskName) => {
  loaderContainer.style.display = 'flex'
  await fetch(`${baseURL}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      taskName: newTaskName,
    }),
  })
  loaderContainer.style.display = 'none'
  getAndRender()
}