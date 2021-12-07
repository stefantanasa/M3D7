let query = "@";

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((usersArray) => {
      console.log(usersArray);
    });
};
