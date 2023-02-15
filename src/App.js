import './App.css'

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Header from "./components/header/Header"
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>id page</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movies list page</h1>}></Route>
          <Route path="/*" element={<h1>errow page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
