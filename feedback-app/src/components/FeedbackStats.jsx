import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
    //calculate ratings average
    let average = feedback.reduce((acc, curr) => {
        return acc += curr.rating;
    }, 0) / feedback.length;

    //this reduces the average to 1 number after the decimal point, and removes the trailing 0 if it's .0
    average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats