import "./styles/App.css";
import ChatRoom from "./ChatRoom";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import { ProtectedRoute } from "./components/authComponents/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/app" component={ChatRoom} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
