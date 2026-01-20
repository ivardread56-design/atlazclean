
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Customers from './pages/Customers'
import Cleaners from './pages/Cleaners'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="cleaners" element={<Cleaners />} />
      </Route>
    </Routes>
  )
}

export default App
  