import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CHART_MAX_WIDTH = 600;
const CHART_MAX_HEIGHT = 300;

const LineChart = ({ primary = 'sky', title, error, data }) => {
  const [tooltip, setTooltip] = useState(null);

  const padding = 80;
  const y_max = data ? Math.max(...data.map((item) => item.value)) : null;
  const x_guides = [...Array(8).keys()];
  const tooltip_width = 120;
  const tooltip_height = 70;
  const bar_width = 12;

  const points = data
    ? data
        .map((point, p) => {
          const { value } = point;
          const x = (p / data.length) * (CHART_MAX_WIDTH - padding) + padding / 2;
          const y = CHART_MAX_HEIGHT - (value / y_max) * (CHART_MAX_HEIGHT - padding) - padding / 2;
          return `${x},${y}`;
        })
        .flat()
    : null;

  const handleClick = (props) => {
    setTooltip(props);
  };

  useEffect(() => {
    setTooltip(null);
  }, [data]);

  return (
    <div className={`min-h-[${CHART_MAX_HEIGHT}px] bg-white rounded-lg shadow-xl border border-slate-50 overflow-hidden py-2`}>
      {error ? (
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-red-400 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            {error}
          </div>
        </div>
      ) : null}

      <svg viewBox={`0 0 ${CHART_MAX_WIDTH} ${CHART_MAX_HEIGHT}`}>
        <title>{title}</title>
        {data ? (
          <g>
            {points.map((point, p) => {
              const plot = points[p].split(',');
              const x_bar = plot[0] - bar_width / 2;
              const y_offset = plot[1] - tooltip_height / 3;
              const x = plot[0];
              const y = plot[1];
              const value = data[p].value;
              const date = data[p].date;

              return (
                <g key={p}>
                  <rect
                    x={x_bar}
                    y={padding / 4}
                    width={bar_width}
                    height={CHART_MAX_HEIGHT - padding / 2}
                    className="fill-transparent hover:fill-gray-100 cursor-pointer"
                    onClick={() => handleClick({ value, date, x, y_offset })}
                  />
                  <circle cx={x} cy={y} r={3} fill="none" className={`stroke-${primary}-400`} strokeWidth={1.6} />
                </g>
              );
            })}
            {x_guides.map((n, i) => {
              const ratio = i / x_guides.length;
              const y = CHART_MAX_HEIGHT - padding / 1.8 - CHART_MAX_HEIGHT * ratio;

              return (
                <polyline
                  key={i}
                  fill="none"
                  className="stroke-gray-300"
                  strokeWidth={0.5}
                  points={`${padding / 2},${y} ${CHART_MAX_WIDTH - padding / 2},${y}`}
                />
              );
            })}
            <polyline fill="none" className={`stroke-${primary}-400`} strokeWidth={1} points={points.join(' ')} />
          </g>
        ) : null}
        {tooltip ? (
          <foreignObject
            x={tooltip.x < CHART_MAX_WIDTH / 2 ? tooltip.x : tooltip.x - tooltip_width}
            y={tooltip.y_offset < CHART_MAX_HEIGHT / 2 ? tooltip.y_offset + tooltip_height / 4 : tooltip.y_offset - tooltip_height / 2}
            width={tooltip_width}
            height={tooltip_height}
            className="transition-all duration-300"
          >
            <div className={`relative rounded-sm border shadow-lg border-${primary}-200 bg-white/80 text-sm p-1 select-none`}>
              <strong className="block uppercase font-bold text-center text-[10px] tracking-widest text-slate-500">Site Visits</strong>
              <strong className={`block text-center text-${primary}-400`}>{tooltip.value}</strong>
              <small className="block text-center text-slate-400 text-[10px]">
                {new Date(tooltip.date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })}
              </small>
            </div>
          </foreignObject>
        ) : null}
      </svg>
      <small className="px-4 text-xs text-slate-400">
        60 day page view data for{' '}
        <a href="https://paulie.dev" target="_blank" rel="noreferrer" className={`text-${primary}-400 no-underline`}>
          paulie.dev
        </a>
      </small>
    </div>
  );
};

LineChart.propTypes = {
  /** The primary colour */
  primary: PropTypes.string,
  /** The Chart Title */
  title: PropTypes.string.isRequired,
  /** The Error message */
  error: PropTypes.string,
  /** The data returned Google Analytics */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

export default LineChart;
