import "./App.css";
import QR from "./QR.svg";

function AppButton() {
  return <button className="testButton">DO YOU WANT TO CHECK IT OUT?</button>;
}

export default function App() {
  const h1style = {
    color: "white",
    left: "30px",
  };
  return (
    <div className="App">
      <div className="App-header">
        <img src={QR} className="App-logo" alt="logo" />
        <h1 style={h1style}>Welcome to the menu-maker app!</h1>
        <AppButton />
      </div>
      <p className="App-intro">
        This menu maker lets restaurant owners save the hassle of creating
        outdated, wasteful, and uninspiring menus
      </p>
    </div>
  );
}
