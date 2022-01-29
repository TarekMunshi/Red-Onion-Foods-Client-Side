import React from 'react';
import './MenuList.css'
import Breakfast from '../Breakfast/Breakfast'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
const MenuList = () => {
    return (
        <Router>
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <NavLink
                        activeStyle={{
                            color: "#FA4F70",
                            borderBottom: '1px solid #FA4F70'
                        }} to='/breakfast' className='me-5 text-decoration-none fw-bolder nav-text'>Breakfast</NavLink>
                    <NavLink activeStyle={{
                        color: "#FA4F70",
                        borderBottom: '1px solid #FA4F70'
                    }} to='/lunch' className='me-5 text-decoration-none fw-bolder nav-text'>Lunch</NavLink>
                    <NavLink activeStyle={{
                        color: "#FA4F70",
                        borderBottom: '1px solid #FA4F70'
                    }} to='/dinner' className='text-decoration-none fw-bolder nav-text'>Dinner</NavLink>
                </div>
            </div>
            <Switch>
                <Route exact path='/'>
                    <Breakfast></Breakfast>
                </Route>
                <Route path='/breakfast'>
                    <Breakfast></Breakfast>
                </Route>
                <Route path='/lunch'>
                    <Lunch></Lunch>
                </Route>
                <Route path='/dinner'>
                    <Dinner></Dinner>
                </Route>
            </Switch>
        </Router>
    );
};

export default MenuList;