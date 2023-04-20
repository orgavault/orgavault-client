import React from 'react'
import { Outlet } from 'react-router'
import './Layout.css';

import DashHead from '../containers/Dash/DashHead/DashHead'
import DashMenu from '../containers/Dash/DashMenu/DashMenu'

function DashLayout() {
    return (
        
            <div className="Dash">
                <DashMenu />
                <Outlet />
            </div>

    )
}

export default DashLayout