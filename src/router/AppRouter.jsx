import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { UtilsPage } from "../pages/UtilsPage"
import { WebsitesPage } from "../pages/WebsitesPage"
import { ExperimentsPage } from "../pages/ExperimentsPage"
import { MaterialPage } from "../pages/MaterialPage"
import { ModelPage } from "../pages/ModelPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*"             element={<HomePage/>}     />
      <Route path="/home"          element={<HomePage/>}     />
      <Route path="/experiments"   element={<ExperimentsPage/>}  />
      <Route path="/materials"     element={<MaterialPage/>} />
      <Route path="/websites"      element={<WebsitesPage/>} />
      <Route path="/models"        element={<ModelPage/>}/>
      <Route path="/about"         element={<AboutPage/>}    />
      <Route path="/utils"         element={<UtilsPage/>}    />
    </Routes>
  )
}
