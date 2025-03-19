
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./page/Index";
import ErrorPage from "./page/Error";
import "./style.css"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
