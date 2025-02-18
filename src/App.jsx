import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Router>
        <main className="w-full bg-neutral-50 flex min-h-screen flex-col text-neutral-500">
          {/* Navbar section */}
          <Navbar />

          {/* Routes */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
