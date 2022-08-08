import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'

export const SidebarData = [
   {
      id: 1,
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome className="sb-content-icon" />,
      className: 'sidebar-tab',
      subClassName: 'home'
   },
   {
      id: 2,
      title: 'History',
      path: '/history',
      icon: <AiIcons.AiOutlineHistory className="sb-content-icon" />,
      className: 'sidebar-tab',
      subClassName: 'history'
   },
   {
      id: 3,
      title: 'Graph',
      path: '/graph',
      icon: <VscIcons.VscGraphLine className="sb-content-icon" />,
      className: 'sidebar-tab',
      subClassName: 'graph'
   },
]
