import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './pages/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        //assigns unique & random IDs for each item
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }
    // for react-router version 6 or higher, need to wrap multiple routes in the Routes tag. Then, if there are several components in one route, they need
    // to all be added in a parent tag. Note the property is called 'element' and not 'component'
    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes> 
                    <Route path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList 
                                feedback={feedback}
                                handleDelete={deleteFeedback}
                            />
                        </>
                    }>
                    </Route>
    

                    <Route path='/about' element={<AboutPage />}/>
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App;