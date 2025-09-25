const mainDiv = document.getElementById("main");
async function fetchData() {
  // fetch('https://dummyjson.com/recipes')
  // .then((res)=>res.json())
  // .then((data)=>displayData(data))
  // .catch((err)=>console.log(err))
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
async function postData() {
  const name = document.getElementById("na").value;
  const url = document.getElementById("url").value;

  const res = await fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      image: url,
    }),
  });
  console.log(res);
}
const btn = document.getElementById("btn").addEventListener("click", postData);
async function deleteData(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    method: "DELETE",
  });
  console.log(res);
}
async function updateData(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    method: "PUT"
  });
  console.log(res);
}

function displayData(data) {
  //   console.log(data);
  data.recipes.forEach((p) => {
    const recipesDiv = document.createElement("div");
    recipesDiv.classList.add('bawalStyle')
    const recipesImage = document.createElement("img");
    recipesImage.src = p.image;
    recipesImage.alt = p.name;
    const recipesName = document.createElement("h2");
    recipesName.textContent = p.name;
    const updateButton = document.createElement("button");
    updateButton.textContent = "update";
    updateButton.addEventListener("click", () => updateData(p.id));
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => deleteData(p.id));
    recipesDiv.append(recipesImage, recipesName, updateButton, deleteButton);
    mainDiv.appendChild(recipesDiv);
  });
}
