import { About } from "./components/About";
import { Library } from "./components/Library";
import NavBar from "./components/WebComponents/NavBar";
import { Mythos } from "./components/Mythos";
import { Bestiary } from "./components/Bestiary";
import { Biography } from "./components/Biography";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Library />
      <Mythos />
      <Bestiary />
      <Biography />
    </div>
  );
}

export default App;
