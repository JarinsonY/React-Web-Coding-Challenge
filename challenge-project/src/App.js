import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import styled from 'styled-components';
import Report from './components/pages/Report';

const DivApp = styled.div`
  padding: 2rem;
`

function App() {
  return (
    <DivApp>
      <Router>
        <Switch>
          <Route path="/report/:id">
            <Report />
          </Route>
          <Route exact path="/:pageP">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DivApp>
  );
}

export default App;
