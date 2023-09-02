import { CssBaseline,Container } from "@mui/material";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
function App() {
  return (
    <Container>
        <Header></Header>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage/>}
            ></Route>
            <Route
              path="/about"
              element={<AboutUs/>}
            ></Route>
          </Routes>
        </Router>
    
    </Container>
  );
}

export default App;
