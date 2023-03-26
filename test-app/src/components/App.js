
import React from "react";
import {UploadPage} from "./UploadPage";
import {Parameter} from "./Parameter"
import AddContact from "./contact";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ContactList from "./contactlist";
// nakhra nawabi 


export const  App = () => {
 
  return (
<Router>
    <Switch>
      <Route exact path="/" component={UploadPage} />
      <Route path="/parameter" component={Parameter} />
    </Switch>
</Router>
  );
}



// export default App;


