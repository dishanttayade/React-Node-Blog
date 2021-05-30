import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFound from './pages/NotFound';
import { Component } from 'react';


class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/aboutpage" component={AboutPage} />
            <Route path="/articleslist" component={ArticlesListPage} />
            <Route path="/articlepage/:name" component={ArticlePage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );}
}

export default App;
