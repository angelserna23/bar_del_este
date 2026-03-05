import React from "react";

import {
    MainHome,

} from './styles';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Menu from '../../components/Menu/index';
import Location from '../../components/Location/index';
import AboutUs from '../../components/AboutUs/index';
import Comments from "../../components/Comments/index";
import Promos from '../../components/Promos/index';


const Home = () => {
    return(
        <MainHome>
            <Header/>
            <AboutUs/>
            <Menu/>
            <Location/>
            <Comments/>
            <Promos/>
            <Footer/>
        </MainHome>
    )
}

export default Home;