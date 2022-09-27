import React from 'react';
import PropTypes from 'prop-types';

import { END_DATE } from '../const/dates';
import { prettyDate } from '../utils/date-formats';

const FixedDates = ({ start, end }) => {
  return (
    <div className="flex flex-cols gap-4 items-end justify-center xl:justify-start">
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">Start</small>
        <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{prettyDate(start)}</p>
      </div>
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">End</small>
        <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{end}</p>
      </div>
    </div>
  );
};

FixedDates.defaultProps = {
  end: prettyDate(END_DATE)
};

FixedDates.propTypes = {
  /** The start date to display */
  start: PropTypes.any.isRequired,
  /** The end date to display */
  end: PropTypes.any
};

export default FixedDates;
