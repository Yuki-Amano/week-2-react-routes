import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/66f23313-6b2c-42c0-8aa6-36ddd6b7b74f"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
