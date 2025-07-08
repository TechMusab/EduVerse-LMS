import React from 'react'
import Topbar from '../components/Dashboard/Topbar.jsx';
import Sidebar from '../components/Dashboard/Sidebar.jsx';
import Center from '../components/Dashboard/Center.jsx';
 import Right from '../components/Dashboard/Right.jsx';

export default function Dashboard() {
    

    return (
        <>
          <Topbar></Topbar>  
          <main className='flex flex-col lg:flex-row'>
          <Sidebar></Sidebar>
          <Center></Center>
          <Right></Right>
          </main>
        </>
    )
}
