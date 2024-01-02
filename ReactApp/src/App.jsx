import "./App.css";
import Heading from "./Components/Heading.jsx";
import Person from "./Components/Person.jsx";
import List from "./Components/List.jsx";
import Button from "./Components/Button.jsx";
function App() {
  return (
    <>
      <Heading title={"Single Page App"} />
      <Person name="Preksha" age="40" />
      <List item1="SPA" item2="JSX" item3="Components in React" />
      <Button text="To Know More click here" />
    </>
  );
}

export default App;
