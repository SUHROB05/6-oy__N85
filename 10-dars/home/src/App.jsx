import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import Explore from "./components/sections/Explore/Explore"
import Works from "./components/sections/Works/Works"
import World from "./components/sections/World/World"
import Business from "./components/sections/Business/Business"
import Footer from "./components/Footer/Footer"
import SignIn from './components/Header/SignIn/SignIn';
import SignUp from './components/Header/SignUp/SingUp';
import BackToTop from './components/sections/BackToTop/BackToTop';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Explore />
              <Works />
              <World />
              <Business />
              <Footer />
              <BackToTop />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
