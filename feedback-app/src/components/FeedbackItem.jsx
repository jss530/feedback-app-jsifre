import Card from "./shared/Card";
import PropTypes from 'prop-types';

function FeedbackItem({item}) {
   //rating is the name of the state, setRating is the function to update said state. Inside useState is the default 
//   const [rating, setRating] = useState(7)
//   const [text, setText] = useState('This is an example of a feedback item.')

//   const handleClick = () => {
//     // can pass another function to this handleClick so that you can have access to the previous state and mutate it
//     setRating((prev) => {
//         return prev += 1;
//     });
//   }


  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem