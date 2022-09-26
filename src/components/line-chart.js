import React, { useEffect, useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';

const CHART_MAX_WIDTH = 600;
const CHART_MAX_HEIGHT = 300;

const LineChart = ({ primary = 'sky', title, error, data, method, days }) => {
  const svgRef = useRef();

  const [tooltip, setTooltip] = useState(null);

  const padding = 80;
  const label_max = 29;
  const y_max = data ? Math.max(...data.map((item) => item.value)) : null;
  const x_guides = [...Array(10).keys()];
  const bar_width = 12;
  const tooltip_width = 120;
  const tooltip_height = 70;

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

  const handleClick = ({ value, date, x, y }) => {
    const bcr = svgRef.current.getBoundingClientRect();
    const safe_x = x > bcr.width / 2 ? x - tooltip_width : x;
    const safe_y = y < bcr.height / 2 ? y : y - tooltip_height;

    setTooltip({
      value: value,
      date: date,
      x: safe_x,
      y: safe_y
    });
  };

  const handleClose = () => {
    setTooltip(null);
  };

  useEffect(() => {
    setTooltip(null);
  }, [data]);

  const Label = ({ x, date, value }) => {
    return (
      // Visibility is controlled by the toggle checked not(:checked) styles in global.css
      <g transform={`translate(${x} ${CHART_MAX_HEIGHT - padding / 4})`}>
        <text transform="rotate(45)" textAnchor="start" transformorigin="50% 50%" fontSize={10} className="date-label fill-slate-400 font-semibold select-none">
          {new Date(date).toLocaleDateString('en-GB', { year: undefined, month: '2-digit', day: '2-digit' })}
        </text>
        <text
          transform="rotate(45)"
          textAnchor="start"
          transformorigin="50% 50%"
          fontSize={10}
          className="value-label fill-slate-400 font-semibold select-none"
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <div className={`justify-end relative min-h-[${CHART_MAX_HEIGHT}px] bg-white rounded-lg shadow-xl border border-slate-50 overflow-hidden`}>
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

      <input id={title} type="checkbox" className="sr-only peer" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={title}
        className={`block ml-auto mr-4 my-2 cursor-pointer w-9 h-5 bg-${primary}-400 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 peer-checked:after:translate-x-full peer-checked:bg-${primary}-300 after:content-[''] before:text-xs before:text-slate-400 before:top-[10px] before:right-[60px] before:content-['Dates'] peer-checked:before:content-['Values'] after:absolute before:absolute after:rounded-full after:top-[10px] after:right-[34px] after:h-4 after:w-4 after:transition-all after:duration-300 after:bg-white`}
      />

      <svg ref={svgRef} viewBox={`0 0 ${CHART_MAX_WIDTH} ${CHART_MAX_HEIGHT}`}>
        <title className="sr-only">{title}</title>
        {data ? (
          <Fragment>
            {points.map((point, p) => {
              const point_arr = points[p].split(',');
              const x_bar = point_arr[0] - bar_width / 2;
              const x = point_arr[0];
              const y = point_arr[1];
              const value = data[p].value;
              const date = data[p].date;

              return (
                <g key={p}>
                  <rect
                    x={x_bar}
                    y={8}
                    width={bar_width}
                    height={CHART_MAX_HEIGHT - padding / 2}
                    className="fill-transparent hover:fill-gray-100/70 cursor-pointer"
                    onClick={() => handleClick({ value, date, x, y })}
                  />
                  <circle cx={x} cy={y} r={4} fill="none" className={`stroke-${primary}-400`} strokeWidth={1.6} />
                </g>
              );
            })}

            {points.map((point, d) => {
              const point_arr = points[d].split(',');
              const x = point_arr[0];
              const value = data[d].value;
              const date = data[d].date;

              return (
                <Fragment key={d}>
                  {data.length > label_max ? (
                    <Fragment>{d % 2 === 0 ? <Label x={x} date={date} value={value} /> : null}</Fragment>
                  ) : (
                    <Label x={x} date={date} value={value} />
                  )}
                </Fragment>
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
            <polyline fill="none" className={`stroke-${primary}-500`} strokeWidth={1} points={points.join(' ')} />
          </Fragment>
        ) : null}

        {tooltip ? (
          <g className="transition-all duration-300 ease-in-out" transform={`translate(${tooltip.x}, ${tooltip.y})`}>
            <rect width={tooltip_width} height={tooltip_height} className={`fill-white/80 stroke-${primary}-400`} rx={3} ry={3} />
            <circle
              cx={tooltip_width}
              width={10}
              height={10}
              className={`fill-${primary}-600 cursor-pointer transition-all duration-200 hover:fill-gray-500`}
              r={10}
              onClick={handleClose}
            />
            <circle
              cx={tooltip_width}
              width={10}
              height={10}
              style={{
                transformOrigin: 'center',
                transformBox: 'fill-box'
              }}
              className={`fill-${primary}-600 select-none pointer-events-none motion-safe:animate-ping opacity-30`}
              r={10}
            />
            <text x={tooltip_width - 3.2} y={3.4} className="fill-white text-[14px] select-none pointer-events-none">
              x
            </text>
            <text x={tooltip_width / 2} y={18} textAnchor="middle" className="uppercase font-bold tracking-widest text-[10px] fill-slate-500">
              Site Visits
            </text>
            <text x={tooltip_width / 2} y={40} textAnchor="middle" className={`fill-${primary}-400 font-bold`}>
              {tooltip.value}
            </text>
            <text x={tooltip_width / 2} y={58} textAnchor="middle" className="fill-slate-400 text-[10px]">
              {new Date(tooltip.date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })}
            </text>
          </g>
        ) : null}
      </svg>
      <div className="flex items-center justify-between px-4 pt-6 pb-4">
        <small className="text-xs text-slate-400">
          <span>{days + 1}</span> day page view data for{' '}
          <a href="https://paulie.dev" target="_blank" rel="noreferrer" className={`text-${primary}-400 no-underline`}>
            paulie.dev
          </a>
        </small>
        <div>
          <div className={`flex items-center px-2 py-0.5 rounded-lg bg-${primary}-400`}>
            <small className="text-[10px] text-white select-none">{method}</small>
          </div>
        </div>
      </div>
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
  ),
  /** The type of render method used */
  method: PropTypes.string.isRequired,
  /** The amount of days the chart is display data for */
  days: PropTypes.number.isRequired
};

export default LineChart;
