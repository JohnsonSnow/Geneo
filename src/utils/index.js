/** check if screen size is 768px or below */
export const isMobile = size => size === 'small';
/** check if screen size is 992px or below */
export const isTablet = size => size === 'medium';
/** animate function return an object use to animate box component of the grommet ui library
 *  delay = 0
 *  duration = 500
 *  size = 'medium'
 */
export const animate = ({ type, delay = 0, duration = 500, size = 'medium' }) => ({
  type,
  delay,
  duration,
  size
});
/** load redux state */
export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    sessionStorage.removeItem('state');
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
/** save redux state */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
/** duration of week */
export const durationInWeeks = (date2, date1) => {
  let diff = (new Date(date2).getTime() - new Date(date1).getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
};

export const timeFormat = timestamp => {
  // get hour
  let hours = Math.floor(timestamp / 60 / 60);
  // get min
  let minutes = Math.floor(timestamp / 60) - hours * 60;
  // get secs
  let seconds = Math.floor(timestamp % 60);
  let formatted =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0');

  // console.log(formatted);
  return formatted;
};
