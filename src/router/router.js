import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../pages/home";
import Description from "../pages/description";
import Page404 from "../pages/404";
import UserPage from "../pages/user-page";




function AppRouter() {

  // * -> wild card, allow all matches after a base route '/' or a regular route like '/description/*'

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<UserPage />} />
      <Route path="description/*" element={<Description />} /> 

      <Route path="*" element={<Page404 />} />
    </Routes>
  )

}

export default AppRouter;