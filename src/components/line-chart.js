import React, { useEffect, useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/app-context';

const LineChart = ({ primary = 'sky', title, error, data, method, days }) => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState(null);

  const chartWidth = 600;
  const chartHeight = 300;
  const offsetY = 20;
  const paddingX = 60;
  const paddingY = 60;
  const maxY = data ? Math.max(...data.map((item) => item.value)) : null;
  const guides = [...Array(10).keys()];
  const barWidth = 12;
  const tooltipWidth = 120;
  const tooltipHeight = 70;

  const properties = data.map((property, index) => {
    const { value, date } = property;
    const x = (index / data.length) * (chartWidth - paddingX) + paddingX / 2;
    const y = chartHeight - offsetY - (value / maxY) * (chartHeight - (paddingY + offsetY)) - paddingY + offsetY;
    return {
      value: value,
      date: date,
      x: x,
      y: y
    };
  });

  const points = properties.map((point) => {
    const { x, y } = point;
    return `${x},${y}`;
  });

  const handleClick = ({ value, date, x, y }) => {
    const bcr = svgRef.current.getBoundingClientRect();
    const safe_x = x > bcr.width / 2 ? x - tooltipWidth : x;
    const safe_y = y < bcr.height / 2 ? y : y - tooltipHeight;

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

  return (
    <div className={`justify-end relative min-h-[${chartHeight}px] bg-white rounded-lg shadow-xl border border-slate-50 overflow-hidden`}>
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

      <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="presentation">
        {data ? (
          <Fragment>
            {guides.map((_, index) => {
              const ratio = index / guides.length;
              const y = chartHeight - paddingY - chartHeight * ratio;

              return (
                <polyline
                  key={index}
                  className="stroke-gray-200"
                  fill="none"
                  strokeWidth={1}
                  points={`${paddingX / 2},${y} ${chartWidth - paddingX / 2},${y}`}
                />
              );
            })}

            <polyline fill="none" className={`stroke-${primary}-500`} strokeWidth={1} points={points} />

            {properties.map((property, index) => {
              const { value, date, x, y } = property;

              return (
                <Fragment key={index}>
                  <rect
                    x={x - barWidth / 2}
                    y={0}
                    width={barWidth}
                    height={chartHeight - paddingY}
                    className="fill-transparent hover:fill-gray-100/70 cursor-pointer"
                    onClick={() => handleClick({ value, date, x, y })}
                  />

                  <circle cx={x} cy={y} r={4} className={`stroke-${primary}-400 fill-white pointer-events-none`} strokeWidth={1.6} />

                  <g transform={`translate(${x} ${chartHeight - (paddingY - offsetY)})`}>
                    <text
                      transform="rotate(45)"
                      textAnchor="start"
                      transformorigin="50% 50%"
                      fontSize={10}
                      className="date-label fill-slate-400 font-semibold select-none"
                    >
                      <AppContext.Consumer>
                        {({ hydrated }) => {
                          return hydrated ? new Date(date).toLocaleDateString(undefined, { year: undefined, month: '2-digit', day: '2-digit' }) : '';
                        }}
                      </AppContext.Consumer>
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
                </Fragment>
              );
            })}
          </Fragment>
        ) : null}

        {tooltip ? (
          <g className="transition-all duration-300 ease-in-out" transform={`translate(${tooltip.x}, ${tooltip.y})`}>
            <rect width={tooltipWidth} height={tooltipHeight} className={`fill-white/80 stroke-${primary}-400`} rx={3} ry={3} />
            <circle
              cx={tooltipWidth}
              width={10}
              height={10}
              className={`fill-${primary}-600 cursor-pointer transition-all duration-200 hover:fill-gray-500`}
              r={10}
              onClick={handleClose}
            />
            <circle
              cx={tooltipWidth}
              width={10}
              height={10}
              style={{
                transformOrigin: 'center',
                transformBox: 'fill-box'
              }}
              className={`fill-${primary}-600 select-none pointer-events-none motion-safe:animate-ping opacity-30`}
              r={10}
            />
            <text x={tooltipWidth - 3.2} y={3.4} className="fill-white text-[14px] select-none pointer-events-none">
              x
            </text>
            <text x={tooltipWidth / 2} y={18} textAnchor="middle" className="uppercase font-bold tracking-widest text-[10px] fill-slate-500">
              Site Visits
            </text>
            <text x={tooltipWidth / 2} y={40} textAnchor="middle" className={`fill-${primary}-400 font-bold`}>
              {tooltip.value}
            </text>
            <text x={tooltipWidth / 2} y={58} textAnchor="middle" className="fill-slate-400 text-[10px]">
              {new Date(tooltip.date).toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })}
            </text>
          </g>
        ) : null}
      </svg>
      <div className="flex items-center justify-between px-4 pt-6 pb-4">
        <small className="text-xs text-slate-400">
          <span>{days}</span> day page view data for{' '}
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
