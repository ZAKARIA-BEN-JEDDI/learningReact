import logo from './logo.svg';
// import './App.css';
// import CssStyle from './Style/css';
// import Style from './Style/Style';
// import StyleModule from './Style/StyleModule';
// import StyledComponent from './Style/StyledComponent';
// import FormStyle from './Style/FormStyle';
// import Parent from './CommunicationComponent/Parent';
// import Routing from './Router/routing';
// import Routing2 from './Router/routing2';
// import Routing3 from './Router/routing3';
// import Routing4 from './Router/routing4';
// import UseParam1 from './Router/useParam';
// import Magic from './magic ui/magic';
// import Axios from './api/axios';
// import Fetch from './api/fetch';
// import AxiosClass from './api/axiosClassComponent'
// import ExreciceApi from './api/ExerciceApi'
// import { useSelector, useDispatch } from "react-redux";


import React from 'react';
import ListLivre from './ListLivre';
import AddLivre from './AddLivre';

const App = () => {
  return (
    <div>
      <AddLivre />
      <ListLivre />
    </div>
  );
};

export default App;
