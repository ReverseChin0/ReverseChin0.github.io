import { Routes, Route } from 'react-router'
import MainApp from '../MainApp'
import { PrivacyPolicy } from '../privacyPolicy/PrivacyPolicy'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<MainApp/>}/>
      <Route path='/privacyfutbol' element={<PrivacyPolicy/>}/>
    </Routes>
  )
}
