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
  Signup,
  Default
} from './pages';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/welcome" element={<Landing />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/feed" element={<Feed />}/>
          <Route exact path="/calendar" element={<Calendar />}/>
          <Route exact path="/saved" element={<Saved />}/>
          <Route exact path="/search" element={<Search />}/>
          <Route path="*" element={<Default />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
