const Options = ({ onLeaveFeedback, onReset }) => {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Options;