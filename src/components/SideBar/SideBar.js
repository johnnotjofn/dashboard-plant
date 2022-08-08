import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.scss'
import * as CgIcons from 'react-icons/cg'
import { SidebarData } from './SideBarData'

class SideBar extends React.Component {

   render() {
      return (
         <div className="sidebar-container">
            <div className="corner">
               <CgIcons.CgMenuGridR className="corner-content-icon" />
            </div>
            <div className="sidebar-menu">
               {SidebarData.map((item, index) => {
                  return (
                     <NavLink
                        key={index + 1}
                        to={item.path}
                        className={item.className}
                        activeClassName="active"
                        exact={true}
                     >
                        {item.icon}
                     </NavLink>
                  )
               })}
            </div>
         </div>
      )
   }
}

export default SideBar