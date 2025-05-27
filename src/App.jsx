
import { useState } from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App() {
  const pageSize = 5
  const[progress,setProgress] = useState(0)
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pagesize={pageSize} key="general" country="us" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} pagesize={pageSize} key="business" country="us" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} pagesize={pageSize} key="entertainment" country="us" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} pagesize={pageSize} key="general" country="us" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} pagesize={pageSize} key="health" country="us" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} pagesize={pageSize} key="science" country="us" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} pagesize={pageSize} key="sports" country="us" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} pagesize={pageSize} key="technology" country="us" category="technology" />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
