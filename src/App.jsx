import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AisdeComponent from './components/AisdeComponent';
import Signin from './components/AuthSection/Signin';
import Signup from './components/AuthSection/Signup';
import MainSection from './components/MainSection';
import AddExpenses from './components/AsideSection/AddExpenses';
import ViewExpenses from './components/AsideSection/ViewExpenses';
import AiInsights from './components/AsideSection/AiInsights';

function App() {
  return (
    <Router>
      <div className="task-manager-main">
        <main>
          {/* Define Routes */}
          <Routes>
            {/* Route for the main dashboard */}
            <Route
              path="/"
              element={
                <div className="main-wrap">
                  <AisdeComponent />
                  <MainSection />
                </div>
              }
            />
              <Route path="add-expenses" element={<AddExpenses/>} />
              <Route path="view-expenses" element={<ViewExpenses/>} />
              <Route path="ai-insights" element={<AiInsights/>} />

            {/* Route for the Signin page */}
            <Route
              path="/signin"
              element={
                <div className="auth-wrap">
                  <Signin />
                </div>
              }
            />

            {/* Route for the Signup page */}
            <Route
              path="/signup"
              element={
                <div className="auth-wrap">
                  <Signup />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;