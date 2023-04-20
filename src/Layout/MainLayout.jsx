import React from 'react'
import { Outlet } from 'react-router'
import Header from '../containers/Header/Header'

function MainLayout({isLogged}) {
    return (
        <>
            <Header isLogged={isLogged}/>
            <Outlet />
        </>
    )
}

export default MainLayout