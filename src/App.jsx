import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import EmployeeList from "./pages/Employee-list";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="employee-list" element={EmployeeList} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
