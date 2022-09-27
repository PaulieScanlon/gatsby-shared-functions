import React from 'react';
import PropTypes from 'prop-types';
import { timestamp } from '../utils/date-formats';

const Details = ({ primary, secondary, title, description, date, order, children }) => {
  return (
    <div className={`flex flex-col p-4 gap-8 justify-center ${order}`}>
      <div>
        <h2
          className={`text-center xl:text-left m-0 mb-2 font-extrabold !leading-tight text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-${primary}-400 to-${secondary}-500`}
        >
          {title}
        </h2>
        <p className="text-center xl:text-left text-slate-500 mx-auto max-w-lg xl:mx-0 xl:max-w-auto" dangerouslySetInnerHTML={{ __html: description }} />
        <small className="flex gap-1 items-center justify-center xl:justify-start">
          <span className="text-slate-400">Last updated: </span>
          <b className={`text-xs text-${primary}-500`}>{timestamp(date)}</b>
        </small>
      </div>
      {children}
    </div>
  );
};

Details.defaultProps = {
  order: ''
};

Details.propTypes = {
  /** The primary colour */
  primary: PropTypes.string.isRequired,
  /** The secondary colour */
  secondary: PropTypes.string.isRequired,
  /** The Title to dislay */
  title: PropTypes.string.isRequired,
  /** The description to display */
  description: PropTypes.string.isRequired,
  /** The date to display */
  date: PropTypes.any,
  /** The order of the main div and children */
  order: PropTypes.string
};

export default Details;
