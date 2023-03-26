import {Link, Route, Routes} from "react-router-dom";
import Main from "./main/index.js";
import Board from "./board/index.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <title>React Test Page</title>
      <ul>
        <li>
          <Link to="/main"> 홈 </Link>
        </li>
        <li>
          <Link to="/board"> 멀티모달 저작 </Link>
        </li>
      </ul>
      <br/>
    </div>
  );
}

export default App;
