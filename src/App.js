import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
