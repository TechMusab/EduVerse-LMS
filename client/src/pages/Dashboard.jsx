import React from 'react'
import Topbar from '../components/Dashboard/Topbar.jsx';
import Sidebar from '../components/Dashboard/Sidebar.jsx';
import Center from '../components/Dashboard/Center.jsx';

export default function Dashboard() {
    

    return (
        <>
          <Topbar></Topbar>  
          <main className='w-screen flex'>
          <Sidebar></Sidebar>
          <Center></Center>
          </main>
        </>
    )
}
