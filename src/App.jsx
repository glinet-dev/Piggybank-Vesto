
import './App.scss'
import AisdeComponent from './components/AisdeComponent'
import Signin from './components/AuthSection/Signin'
import Signup from './components/AuthSection/Signup'
import MainSection from './components/MainSection'

function App() {


  return (
    <div className="task-manager-main">
      <main>
      {/* <div className='main-wrap'>
      <AisdeComponent/>
      <MainSection/>
      </div> */}
      <div className='auth-wrap'>
        <Signin/>
        <Signup/>
      </div>

      </main>
    </div>
  )
}

export default App
