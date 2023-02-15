import './App.css'

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/home/Home";
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie id page</h1>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
