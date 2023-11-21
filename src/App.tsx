import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screen/signin/Login';
import Deshboard from './Screen/deshboard/Deshboard';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Members from './Screen/deshboard/Members';
import Challenges from './Screen/deshboard/Challenges';

const ROLES = {
  'Admin': 1,
  'Franchise': 2,
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Login />}/>
        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
          <Route
            path="/dashboard"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar children={undefined} Roles={1} />
                  </div>
                </div>
                <div style={{backgroundColor: 'rgba(237,243,239,255)'}}>
                  <div className="">
                    <NavBar page="Dashboard" />
                  </div>
                  <div>
                    <Deshboard />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/members"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar children={undefined} Roles={1} />
                  </div>
                </div>
                <div style={{backgroundColor: 'rgba(237,243,239,255)'}}>
                  <div className="">
                    <NavBar page="" />
                  </div>
                  <div>
                    <Members />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/challenges"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar children={undefined} Roles={1} />
                  </div>
                </div>
                <div style={{backgroundColor: 'rgba(237,243,239,255)'}}>
                  <div className="">
                    <NavBar page="" />
                  </div>
                  <div>
                    <Challenges />
                  </div>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
