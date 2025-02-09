import Actions from './Actions';
import Message from './Message';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
