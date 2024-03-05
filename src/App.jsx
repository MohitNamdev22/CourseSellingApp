import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Appbar from './Appbar';;
import AddCourse from './AddCourse';

function App() {
    return (
      <div style={{width:"100vW", height:"100vh", backgroundColor:"#EEEEEE"}} >
        <Router>
        <Appbar/>
            <Routes>
                <Route path={"/addcourse"} element={<AddCourse />}/>
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;