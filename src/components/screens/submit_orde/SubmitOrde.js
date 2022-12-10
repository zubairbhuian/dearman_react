import React from 'react'

import Sidebar from '../../Navbar/Sidebar'
import Topbar from '../../Navbar/Topbar'

export default function SubmitOrde() {
  return (
    <>
    <Topbar/>
    <div className="main-body">
      <Sidebar/>
      <div className="body-content">
        This is demo Submit order
      </div>
    </div>

    </>
  )
}
