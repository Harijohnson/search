import {Route,HashRouter as Router,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' Component={HomeScreen} exact ></Route>
    </Routes>
   </Router>
   
   
   </>
  );
}

export default App;
