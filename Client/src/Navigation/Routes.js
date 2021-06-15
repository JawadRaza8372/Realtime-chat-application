import React from 'react'
import ChatScreen from '../Screens/Chat/ChatScreen'
import Join from '../Screens/Join/Join'
import {Route,Switch} from "react-router-dom"
function Routes() {
    return (
        <Switch>
           <Route exact path="/" component={Join} /> 
           <Route exact path="/chat" component={ChatScreen} /> 

        </Switch>
    )
}

export default Routes
