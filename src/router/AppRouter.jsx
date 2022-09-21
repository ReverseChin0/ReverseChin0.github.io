import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components';
import { AboutPage, DemoPage, HomePage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/*"     element={<HomePage/>} />
          <Route path="/home"  element={<HomePage/>} />
          <Route path="/demo"  element={<DemoPage/>} />
          <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </>
  )
}
