import moment from 'moment';

export const checkIfPastTime = (hour = 0, minute = 0) => {
  const dateToCheck = moment()
    .hour(hour)
    .minute(minute);

  return moment().isAfter(dateToCheck);
};

if (typeof window !== 'undefined') {
  window.checkIfPastTime = checkIfPastTime;
}
