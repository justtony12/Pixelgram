import '../styles/App.scss'
import Editor from './Editor'
import Home from './Home'
import Feed from './Feed'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
    return(
        <Router>
            <div className='App'>
                <Link to='/'><button className='button'>Home</button></Link>
                <Link to='/editor'><button className='button'>Editor</button></Link>
                <Link to='/feed'><button className='button'>Feed</button></Link>
            </div>

            <Route path='/' exact component={Home}></Route>
            <Route path='/editor' exact component={Editor}></Route>
            <Route path='/feed' exact component={Feed}></Route>
        </Router>
    ) 
}

export default App;