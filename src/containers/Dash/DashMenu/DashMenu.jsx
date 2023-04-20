import React from 'react'
import { Link } from 'react-router-dom'
import './DashMenu.css'

function DashMenu() {
  return (
    <div className='DashMenu'>
      <div className="apps">
        <Link to={'/dash'} ><button>Main</button></Link>
        <Link to={'/dash/todos'} ><button>Todo List</button></Link>
        <Link to={'/dash/notes'} ><button>Note Book</button></Link>
        <Link to={'/dash/passwords'} ><button>Passwords</button></Link>
        <Link to={'/dash/agenda'} ><button>Agenda</button></Link>
      </div>
    </div>
  )
}

export default DashMenu