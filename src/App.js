import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import AdminLayout from './layout/AdminLayout';


function App() {


  return (
    <Provider store={store}>
      <AdminLayout></AdminLayout>
    </Provider>
  );

}

export default App;
