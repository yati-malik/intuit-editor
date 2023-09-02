import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
