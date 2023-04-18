const input = document.querySelector("#todo");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const errormsg = document.querySelector(".errormsg");
const clearAll = document.querySelector("#clearAll");
let id = 1;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.trim() === "") {
    errormsg.style.display = "block";
  } else {
    errormsg.style.display = "none";
    const li = document.querySelector("#list li").cloneNode(true);
    li.dataset.id = ++id;
    li.querySelector(".lead").textContent = input.value;
    list.appendChild(li);
    input.value = "";
    const markBtn = li.querySelector(".btn-info");
    const span = li.querySelector(".lead");
    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
    markBtn.addEventListener("click", function () {
      span.style.textDecoration = "line-through";
    });
  }
});

