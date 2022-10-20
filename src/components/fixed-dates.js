import React from 'react';
import PropTypes from 'prop-types';

import { END_DATE } from '../const/dates';
import { prettyDate } from '../utils/date-formats';
import { AppContext } from '../context/app-context';

const FixedDates = ({ start, end }) => {
  return (
    <div className="flex flex-cols gap-4 items-end justify-center xl:justify-start">
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">Start</small>
        <time className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none h-8 min-w-24">
          <AppContext.Consumer>
            {({ hydrated }) => {
              return hydrated ? prettyDate(start) : '';
            }}
          </AppContext.Consumer>
        </time>
      </div>
      <div className="flex flex-col gap-1">
        <small className="block font-bold text-slate-400 text-xs">End</small>
        {/* <time className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none h-8 min-w-24">
          <AppContext.Consumer>
            {({ hydrated }) => {
              return hydrated ? end : '';
            }}
          </AppContext.Consumer>
        </time> */}
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
