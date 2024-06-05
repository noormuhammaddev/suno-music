import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayButton = () => {
  return (
    <div className="play-button-wrapper">
      <button>
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  )
}

export default PlayButton;