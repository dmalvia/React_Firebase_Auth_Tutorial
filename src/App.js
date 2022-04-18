import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignup from "./components/PhoneSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Calender from "./components/Calender";


function App() {
  return (
    
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              
              <Route path="/" element={<Login />} />
              <Route path="/PhoneSignup" element={<PhoneSignup />} />
            
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Calender" element={<Calender />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
