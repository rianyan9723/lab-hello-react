import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className = "App">

  <div className = "Navbar">
  <img src="./ironhack-logo-xs.png" alt="ironhack-logo"/>
  <img src="./menu-top-xs.png" alt="menu-top"/>
  </div>

  <div className="bigSection">
  <h1>Say hello to ReactJs</h1>
  <h5>You will learn how to use the most popular frontend library, and become a super Ninja developer</h5>
  </div>

  <div className="button">
    <button>Awesome</button>
  </div>

  <div className="Declarative">
    <img src="./icon1.png" alt="icon1"/>
    <h1>Declarative</h1>
    <h5>React makes its painless to create interactive UIs</h5>
  </div>

  <div className="Components">
    <img src="./icon2.png" alt="icon2"/>
    <h1>Components</h1>
    <h5>Build encapsulated components that manager their state</h5>
  </div>

  <div className="Single-Way">
    <img src="./icon3.png" alt="icon3"/>
    <h1>Single-Way</h1>
    <h5>A set of immutable values are passed to the components</h5>
  </div>

  <div className="JSX">
    <img src="./icon4.png" alt="icon4"/>
    <h1>JSX</h1>
    <h5>Statically-typed designed to run on modern browers</h5>
  </div>

  </div>

  );
}

export default App;
