import React from 'react';
import List from './components/List.js';

import ToDo from './components/todo/todo.js';
import {Context} from './context/context.js';
// export default class App extends React.Component {
//   render() {
//     return (
//       <ToDo />
//     );
//   }
// }


export default function App() {
  return (
    <>
      <Context>

        <ToDo />
      </Context>
    </>
  );
};


