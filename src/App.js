import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import PostList from "./PostList";
import ToDo from "./ToDo";
import "./App.css";
import Form from "./Form";
import CurrencyConverter from "./CurrencyConvertor";

function App() {
  return (
    <Router>
      <Form />
      <div>
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Todo" element={<ToDo />} />
          <Route path="/PostList" element={<PostList />} />
          <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
