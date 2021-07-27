import { Navbar, Footer } from "./components";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Price from "./pages/Price";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Price} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
