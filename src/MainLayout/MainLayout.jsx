import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/nav/Nav';
import Footer from '../component/footer/Footer';
import Welcome from '../component/welcome/Welcome';

const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    const [num, setNum] = useState(3000);
    useEffect(() => {
      if (sessionStorage.getItem("initialLoadDone")) {
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("initialLoadDone", "true");
          setNum(-1);
        }, num);
      }
      console.log(num);
    }, []);

    if (loading) {
      return <Welcome></Welcome>;
    }
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;