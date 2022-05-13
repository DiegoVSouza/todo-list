import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import TodoList from './components/Todo';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <TodoList />
    </BrowserRouter>
  );
};

export default App;
