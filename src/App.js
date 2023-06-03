import './index.css';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function App() {
  return (
    <div className="App">
     <RoughNotation type="circle" show={true} iterations={10} animationDuration={2000} color="blue">
      <h1>hello.</h1>
     </RoughNotation>
    </div>
  );
}

export default App;
