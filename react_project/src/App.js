import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Create from './components/Create';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/create' component={Create} />
          <Route exact path='/note/' component={Note} />
          <Route exact path='/note/:noteURL' component={Note} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
