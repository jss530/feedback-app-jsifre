import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './pages/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {
    // for react-router version 6 or higher, need to wrap multiple routes in the Routes tag. Then, if there are several components in one route, they need
    // to all be added in a parent tag. Note the property is called 'element' and not 'component'
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes> 
                        <Route path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
        

                        <Route path='/about' element={<AboutPage />}/>
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;