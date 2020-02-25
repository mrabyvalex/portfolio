import moment from 'moment';

export const checkIfPastTime = (hour = 0, minute = 0) => {
  const dateToCheck = moment()
    .hour(hour)
    .minute(minute);

  return moment().isAfter(dateToCheck);
};

export const parseDate = (dateString, format = 'lll') => (dateString && moment(dateString).format(format)) || '';
