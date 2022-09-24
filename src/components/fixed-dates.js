import React from 'react';
import PropTypes from 'prop-types';

import { START, END } from '../const/dates';

const FixedDates = ({ end }) => {
  return (
    <div className="flex flex-cols gap-4 items-end justify-center xl:justify-start">
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">Start</small>
        <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{new Date(START).toLocaleDateString()}</p>
      </div>
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">End</small>
        <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{end}</p>
      </div>
    </div>
  );
};

FixedDates.defaultProps = {
  end: new Date(END).toLocaleDateString()
};

FixedDates.propTypes = {
  /** The end date to display */
  end: PropTypes.any
};

export default FixedDates;
