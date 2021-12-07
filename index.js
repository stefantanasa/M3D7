window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((usersArray) => {
      console.log(usersArray);
      showNames(usersArray, "name");
      usersArray.forEach((user) => console.log(user.name));
    });
};

let showAddress = function (array) {
  array.forEach((user) => {
    address = [
      user.address["city"],
      user.address["street"],
      user.address["suite"],
      user.address["zipcode"],
    ];
    console.log(address.join(", "));
  });
};

const showNames = function (array, item) {
  array.forEach((element) => console.log(element[item]));
};
