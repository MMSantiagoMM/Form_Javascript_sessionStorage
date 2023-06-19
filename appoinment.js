let memory = JSON.parse(sessionStorage.getItem("dates"));
let Contenedor = document.getElementById("contenedor");

memory.forEach(item=>{
    let row = document.createElement("section")
    row.classList.add("row")
    let colm_1 = document.createElement("section")
    colm_1.classList.add("col-4")
    let colm_2 = document.createElement("section")
    colm_2.classList.add("col-8")
    let title = document.createElement("h1")
    title.textContent = "Appoinment"
    let first = document.createElement("h2")
    first.textContent = item.first
    let last = document.createElement("h2");
    last.textContent = item.last
    let user = document.createElement("p")
    user.textContent = item.user
    let city = document.createElement("p")
    city.textContent = item.city
    let state = document.createElement("p")
    state.textContent = item.state

    Contenedor.appendChild(row);
    row.appendChild(colm_1);
    row.appendChild(colm_2);
    colm_1.appendChild(title);
    colm_2.appendChild(first);
    colm_2.appendChild(last);
    colm_2.appendChild(user);
    colm_2.appendChild(city);
    colm_2.appendChild(state);


})