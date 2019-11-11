import React from 'react'
import {connect} from "react-redux";
import Navigation from "./Navigation";

let MapStateToProps = (state) => ({navDataBase: state.sidebar.navDataBase})
const NavigationContainer = connect(MapStateToProps)(Navigation)

export default NavigationContainer