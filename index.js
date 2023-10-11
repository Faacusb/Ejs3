const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rúcula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "Pizza con Piña",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Piña"],
    imagen: "./img/anana.png",
  },
];

const formPizza = document.getElementById('pizza-form');
const inputPizza = document.getElementById('pizza-input');
const inputError = document.getElementById('msj-error');
const submitPizza = document.getElementById('pizza-submit');
const renderPizza = document.querySelector('.render-contain');

const pizzaLS = JSON.parse(localStorage.getItem("pizza"));

const pizzaSeleccionada = (e) => {
  e.preventDefault();

  const valorInput = Number(inputPizza.value);
  inputError.innerHTML = "";
  if (!valorInput) {
    inputError.innerHTML = "No ha ingresado ningún número de ID.";
    return;
  }
  if (valorInput > pizzas.length || valorInput <= 0) {
    inputError.innerHTML = "El ID ingresado no existe.";
    return;
  }

  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === valorInput);

  if (pizzaEncontrada) {
    renderizarPizza(pizzaEncontrada);
    localStorage.setItem("pizza", JSON.stringify(pizzaEncontrada));
  }
  formPizza.reset();
};

const renderizarPizza = (pizza) => {
  const { nombre, precio, ingredientes, imagen } = pizza;
  renderPizza.innerHTML = `
    <div class="pizza-card">
    <img src="${imagen}" alt="${nombre}" class="card-img"/>
    <div class="card-content">
    <h2 class="card-title">${nombre.toUpperCase()}</h2>
      <p class="ingredients">${ingredientes.join(", ")}</p>
      <p class="price">$${precio}</p>
    </div>
      </div>
  `;
};

const init = () => {
  formPizza.addEventListener("submit", pizzaSeleccionada);
  renderizarPizza(pizzaLS);
};

init();