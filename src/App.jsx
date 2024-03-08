import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Appbar from './Appbar';;
import AddCourse from './AddCourse';
import Courses from './Courses';
import Course from './Course';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

function App() {
    return (
      <div style={{width:"100vW", height:"100vh", backgroundColor:"#EEEEEE"}} >
        <RecoilRoot>
        <Router>
        <Appbar/>
            <Routes>
                <Route path={"/addcourse"} element={<AddCourse />}/>
                <Route path={"/course/:courseId"} element={<Course />}/>
                <Route path={"/courses"} element={<Courses />}/>
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
        </RecoilRoot>
        </div>
    );
}

export default App;