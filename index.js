let users = []

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (response.ok) {
      users = await response.json()
      displayUsers()
    }
  } catch (err) {
    console.log(err)
  }
}

const displayUsers = (filterType, filterText) => {
  const usersNode = document.getElementById("user-table")
  usersNode.innerHTML = ""
  users
    .filter((user) => {
      if (filterType === "email") {
        return user.email.toLowerCase().startsWith(filterText.toLowerCase())
      }

      if (filterType === "name") {
        return user.name.toLowerCase().startsWith(filterText.toLowerCase())
      }

      if (filterType === "username") {
        return user.username.toLowerCase().startsWith(filterText.toLowerCase())
      }
      return true
    })
    .forEach((user) => {
      let trNode = document.createElement("tr")
      trNode.innerHTML = `
      
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>`
      usersNode.appendChild(trNode)
    })
}

const setUpFilter = () => {
  let textInputNode = document.getElementById("filter-text")
  textInputNode.onkeyup = (eventData) => {
    let filterSelectNode = document.getElementById("filter-selection")
    let filterType = filterSelectNode.value

    let filterText = eventData.target.value
    displayUsers(filterType, filterText)
  }
}
window.onload = () => {
  getUsers()
  setUpFilter()
}
