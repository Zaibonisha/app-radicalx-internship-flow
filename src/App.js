import Sidebar from './components/Sidebar';
import "./App.css";
import Home from "./pages/Home";
import Title from "./components/Title";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewInternship from "./pages/newInternship/NewInternship";
import AddMore from "./pages/cardPages/AddMore";
import AddSurvey from "./pages/cardPages/AddSurvey";
import Settings from "./pages/cardPages/Settings";


function App() {
  return (
    <BrowserRouter>
      <Title />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newInternship" component={NewInternship} />
          <Route exact path="/AddMore" component={AddMore} />
          <Route path="/AddSurvey" component={AddSurvey} />
          <Route path="/Settings" component={Settings} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;

