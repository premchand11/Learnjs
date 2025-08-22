// query selector

// selectors
// -tag name
// -id #
// -class .

// const body = document.querySelector("body");
// console.log(body);
// console.log(body.innerHTML);
// const username = document.querySelector("#username");
// console.log(username);
// username.innerText = "chnaduuuuuu";

// const ele=document.querySelector("div")
// console.log(ele.children);
// console.log(ele.parentElement);

// const element = document.getElementById("username");
// element.innerText = "chnaduuuuuu";
// element.classList.add("red-color", "underline");
// console.log(element.classList);
// element.style.color = "rainbow";
// element.parentElement.style.backgroundColor = "pink";
// console.log(element.properties);

// const elements = document.getElementsByClassName("paragraph");
// console.log(elements);
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
//   elements[i].style.color = "red";
// }

// function handleClick() {
//   console.log("button clicked");
//   alert("button clicked");
// }

// const element = document.getElementById("clickbutton");
// // element.onclick = function () {
// //   console.log("button clicked");
// // };
// element.addEventListener("click", () => {
//   console.log("button clicked");
//   element.style.backgroundColor = "blue";
// });

// const button = document.getElementById("clickbutton");
// const container = document.getElementById("my-container");
// let count = 0;
// button.addEventListener("click", () => {
//   const element = document.createElement("li");
//   element.innerText = count;
//   container.appendChild(element);
//   count++;
// });

// let a = 10;
// let b = 20;
// function add(x, y) {
//   return x + y;
// }

// // async function fetchData() {
// //   let resultFromServer = await fetch(
// //     "https://jsonplaceholder.typicode.com/todos/1"
// //   );
// //   console.log(await resultFromServer.json());
// // }

// // fetchData();

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data.json());
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// console.log(add(a, b));

const button = document.getElementById("clickbutton");
const uname = document.getElementById("user-name");

button.addEventListener("click", () => {
  const value = uname.value;
  console.log(value);
  localStorage.setItem("name", value);
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  uname.innerText = value;
});
