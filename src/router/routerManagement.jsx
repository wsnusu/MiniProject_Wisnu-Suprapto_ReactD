import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/layouts/LayoutComponent';
import LoadingComponent from "../components/loadingComponent/loadingComponent"
import LandingPage from '../pages/Landing Page/landingPage';

import ProductPage from '../pages/Product Page/productPage';
import CrudPage from '../pages/Crud Page/crudPage';
import About from '../pages/About/about';

const RouterManagement = () => {
    return (
        <Suspense fallback={LoadingComponent} >       '
        <LayoutComponent>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/books' element={<ProductPage/>} />
      <Route path='/add-books' element={<CrudPage/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </LayoutComponent>
      </Suspense>
 
    );
}

export default RouterManagement;
