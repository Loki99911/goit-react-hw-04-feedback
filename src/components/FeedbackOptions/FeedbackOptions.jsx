import PropTypes from 'prop-types';
import {
  FeedbackOptionsBlock,
  FeedbackOptionsBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsBlock>
      {options.map(option => {
        return (
          <FeedbackOptionsBtn
            type="button"
            key={option}
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackOptionsBtn>
        );
      })}
    </FeedbackOptionsBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
