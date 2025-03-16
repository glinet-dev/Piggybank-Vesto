import { Outlet } from 'react-router-dom';

function MainSection() {
  return (
    <div className="main-section">
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
}

export default MainSection;