import React from 'react'
import '../styles/aside-component.scss'

const AisdeComponent = () => {
  return (
    <aside className='aside-component'>
    <div className='profile-section'>
        <img src='./vite.svg' alt='profile' />	
        <h3>Hello, Jhon Doe</h3>
    </div>
    <h5	className='aside-title'>Administration</h5>
    <ul>
      <li>Dashboard</li>
      <li>Profile</li>
    </ul>
    <h5	className='aside-title'>Management</h5>
    <ul>
      <li>Request</li>
      <li>Invoice </li>
      <li>TransactionsS</li>
    </ul>
    <h5	className='aside-title'>Accounting</h5>
    <ul>
      <li>Reports</li>
    </ul>
    <button className='aside-button'>Logout</button>
  </aside>
  )
}

export default AisdeComponent
