import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Calendar,
  Feed,
  Landing,
  Login,
  Profile,
  Saved,
  Search,
  Signup
} from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/feed" component={Feed}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/search" component={Search}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
