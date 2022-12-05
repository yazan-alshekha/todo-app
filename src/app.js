import React from 'react';
import List from './components/List.js';

import ToDo from './components/todo/todo.js';
import {Context} from './context/context.js';
import LoginProvider from "./context/UserInfo";


// blueprint styling
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Header from './components/Header.js';

// my style file
import "./components/style/style.css"

export default function App() {
  return (
    <>
   
      <LoginProvider>

      <Context>
        <Header/>
        <ToDo />
      </Context>
      </LoginProvider>
    
    </>
  );
};


