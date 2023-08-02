import React from 'react';
import SignIn from './SignIn/page';
import SignUp from './SignUp/page';
import  Dashboard from '../app/Dashboard/page'
import { Provider } from 'react-redux';
import store from '@/Redux/Store';
import TakeNoteOne from '@/Component/TakeNoteOne';

export default function Home() {
  return (
    <>
    {/* <SignIn/>
    <SignUp/> */}
    {/* <SignUp/> */}
    <Dashboard/>
      {/* <TakeNoteOne/> */}
    </>
  )
}

