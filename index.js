let inputItem = document.querySelector(".form-control");
let listContainer = document.querySelector(".list");
let selectdiv = document.querySelector(".selectID");

let inputFun = (event) => {
  event.preventDefault();
  // create div
  let container = document.createElement("div");
  let mother = document.createElement("div");
  let listItem = document.createElement("li");
  let divButton = document.createElement("div");
  let tickButton = document.createElement("button");
  let delButton = document.createElement("button");
  // add classlist
  container.classList.add("container");
  mother.classList.add("mother");
  divButton.classList.add("divButton");
  listItem.classList.add("listItem");
  tickButton.classList.add("tick-button");
  delButton.classList.add("del-button");

  //append
  listContainer.append(mother);
  mother.append(container);
  mother.append(divButton);
  container.append(listItem);
  divButton.append(tickButton);
  divButton.append(delButton);
  listItem.innerHTML = inputItem.value;
  //storage item
  storage(inputItem.value);
  inputItem.value = "";
  //tick fun
  let tickFun = (event) => {
    listItem.classList.toggle("active");
    let target = event.target;
    let target2 = target.parentElement;
    let target3 = target2.parentElement;
    target3.classList.toggle("complete");
  };

  tickButton.addEventListener("click", tickFun);

  // del fun
  let delFun = (event) => {
    let target = event.target;
    let target2 = target.parentElement;
    let target3 = target2.parentElement;
    target3.remove();
  };

  delButton.addEventListener("click", delFun);
};

const filter = (event) => {
  let filterValue = event.target.value;
  let todo = listContainer.childNodes;
  todo.forEach((node) => {
    switch (filterValue) {
      case "all":
        console.log("It is all");
        node.style.display = "flex";
        break;
      case "complete":
        console.log("It is complete");
        if (node.classList.contains("complete")) {
          node.style.display = "flex";
        } else {
          node.style.display = "none";
        }
        break;
      case "uncomplete":
        console.log("It is uncomplete");
        if (!node.classList.contains("complete")) {
          node.style.display = "flex";
        } else {
          node.style.display = "none";
        }
        break;
    }
  });
};
//localStorage
function storage(value) {
  let storageItem = [];
  if (localStorage.getItem("storageItem") === null) {
    storageItem = [];
  } else {
    JSON.parse(localStorage.getItem("storageItem"));
  }
  storageItem.push(value);
  console.log(storageItem);
  localStorage.setItem("storageItem", JSON.stringify(storageItem));
}

//EventListerner
inputItem.addEventListener("change", inputFun);
selectdiv.addEventListener("click", filter);
