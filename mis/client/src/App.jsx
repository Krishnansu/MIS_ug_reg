// import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {
  AddCcaEca,
  HomeLayout,
  Error,
  Landing,
  DisCcaEca,
  UCcaEca,
  DelCcaEca,
  AddPersonalDetails,
  DisPersonalDetails,
  UPersonalDetails,
  DelPersonalDetails,
  AddOtherDetails,
  DisOtherDetails,
  UOtherDetails,
  DelOtherDetails,
  AddParentDetails,
  DisParentDetails,
  UParentDetails,
  DelParentDetails,
  AddEducationDetails,
  DisEducationDetails,
  UEducationDetails,
  DelEducationDetails,
  AddHostelDetails,
  DisHostelDetails,
  UHostelDetails,
  DelHostelDetails,
  DisIitIsmEmail,
  DisFeeDetails,
  DisPreview,
  Login,
  Register,
} from "./pages";

// import { action as loginAction } from './pages/Login';
// import { action as AddCcaEcaAction } from './pages/AddCcaEca';
// import { action as AddPersonalDetailsAction } from './pages/AddPersonalDetails';
// import { action as AddOtherDetailsAction } from './pages/AddOtherDetails';
// import { action as AddParentDetailsAction } from './pages/AddParentDetails';
// import { action as AddEducationDetailsAction } from './pages/AddEducationDetails';



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'AddCcaEca',
        element:<AddCcaEca/>
      },
      {
        path:'Register',
        element:<Register/>
      },
      {
        path:'Login',
        element:<Login/>, 
      },
      {
        path:'DisCcaEca',
        element:<DisCcaEca/>
      },
      {
        path:'UCcaEca',
        element:<UCcaEca/>
      },
      {
        path:'DelCcaEca',
        element:<DelCcaEca/>
      },
      {
        path:'AddPersonalDetails',
        element:<AddPersonalDetails/>
      },
      {
        path:'DisPersonalDetails',
        element:<DisPersonalDetails/>
      },
      {
        path:'UPersonalDetails',
        element:<UPersonalDetails/>
      },
      {
        path:'DelPersonalDetails',
        element:<DelPersonalDetails/>
      },
      {
        path:'AddOtherDetails',
        element:<AddOtherDetails/>
      },
      {
        path:'DisOtherDetails',
        element:<DisOtherDetails/>
      },
      {
        path:'UOtherDetails',
        element:<UOtherDetails/>
      },
      {
        path:'DelOtherDetails',
        element:<DelOtherDetails/>
      },
      {
        path:'AddParentDetails',
        element:<AddParentDetails/>
      },
      {
        path:'DisParentDetails',
        element:<DisParentDetails/>
      },
      {
        path:'UParentDetails',
        element:<UParentDetails/>
      },
      {
        path:'DelParentDetails',
        element:<DelParentDetails/>
      },
      {
        path:'AddEducationDetails',
        element:<AddEducationDetails/>
      },
      {
        path:'DisEducationDetails',
        element:<DisEducationDetails/>
      },
      {
        path:'UEducationDetails',
        element:<UEducationDetails/>
      },
      {
        path:'DelEducationDetails',
        element:<DelEducationDetails/>
      },
      {
        path:'AddHostelDetails',
        element:<AddHostelDetails/>
      },
      {
        path:'DisHostelDetails',
        element:<DisHostelDetails/>
      },
      {
        path:'UHostelDetails',
        element:<UHostelDetails/>
      },
      {
        path:'DelHostelDetails',
        element:<DelHostelDetails/>
      },
      {
        path:'DisIitIsmEmail',
        element:<DisIitIsmEmail/>
      },
      {
        path:'DisFeeDetails',
        element:<DisFeeDetails/>
      },
      {
        path:'DisPreview',
        element:<DisPreview/>
      },
    ]
  },
  
])
const App = () => {
  return <RouterProvider router={router}/>;
}

export default App
