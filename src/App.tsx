import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DemoForTebby from './pages/demo-for-tebby/DemoForTebby'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo-for-tebby" element={<DemoForTebby />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
