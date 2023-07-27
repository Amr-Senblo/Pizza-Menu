import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// the component that will be rendered
function App() {
  return (
    <div className="container">
      <h1>Welcome Amoor first, so mini react project </h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Pizza = ({ pizzaObj }) => {
  // console.log(props);
  // be careful that the component name must be capitalized

  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* {console.log(pizzaObj)} */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Header = () => {
  // const style = { color: "red", fontSize: "48px" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza co. </h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* short circuit with && operator
      {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* the ternary ? operator */}
      {pizzas.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we are out of pizzas</p>
      )}
    </main>
  );
};

const Footer = (props) => {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <h3>Sorry, we are closed now</h3>
      )}
    </footer>
  );
};

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <h3>
        {" "}
        {new Date().toLocaleString()} we are open from {openHour}:00 to{" "}
        {closeHour}
        {":00 "}
      </h3>
      <button className="btn">Order</button>
    </div>
  );
};
// return React.createElement("footer", null, "we are currently open !!")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
