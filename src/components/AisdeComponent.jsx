import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/aside-component.scss';

const AisdeComponent = () => {
  return (
    <aside className='aside-component'>
      {/* Profile Section */}
      <div className='profile-section'>
        <img src='./vite.svg' alt='profile' />
        <h3>Hello, John Doe</h3>
      </div>

      {/* Administration Section */}
      <h5 className='aside-title'>Administration</h5>
      <ul>
        <li>
          <Link to="/">Dashboard</Link> {/* Link to the home page */}
        </li>
        <li>
          <Link to="/profile">Profile</Link> {/* Example link to a profile page */}
        </li>
      </ul>

      {/* Management Section */}
      <h5 className='aside-title'>Management</h5>
      <ul>
        <li>
          <Link to="/add-expenses">Add Expenses</Link>
        </li>
        <li>
          <Link to="/view-expenses">View Expenses</Link>
        </li>
        <li>
          <Link to="/ai-insights">AI Insights</Link>
        </li>
      </ul>

      {/* Accounting Section */}
      <h5 className='aside-title'>Accounting</h5>
      <ul>
        <li>
          <Link to="/reports">Reports</Link> {/* Example link to a reports page */}
        </li>
      </ul>

      {/* Logout Button */}
      <button className='aside-button'><Link to="/signin">Logout</Link></button>
    </aside>
  );
};

export default AisdeComponent;