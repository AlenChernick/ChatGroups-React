import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './assets/styles/styles.scss'
import { ChatApp } from './pages/ChatApp'
import { Signup } from './pages/Signup'
import { userService } from './services/user.service'

const App = () => {
  const PrivateRoute = ({ children }) => {
    const loggedInUser = userService.getLoggedInUser()
    return loggedInUser ? children : <Navigate to='/signup' />
  }

  return (
    <Router>
      <section className='main-app main-layout'>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Navigate replace to='/welcome-channel' />
              </PrivateRoute>
            }
          />
          <Route
            path='/:id'
            element={
              <PrivateRoute>
                <ChatApp />
              </PrivateRoute>
            }
          />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
