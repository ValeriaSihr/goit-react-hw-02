import css from './Options.module.css'

const Options = ({ onLeaveFeedback, onReset }) => {
  return (
    <div>
      <button className={css.optionBtn} type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={css.optionBtn} type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className={css.optionBtn} type="button" onClick={() => onLeaveFeedback('bad')}>Bad</button>
      <button className={css.optionBtn} type="button" onClick={onReset}>Reset</button>
    </div>
  );
};

export default Options;