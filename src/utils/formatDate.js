import { toDate, format } from 'date-fns-tz';
import { fr } from 'date-fns/locale';

export const getFormatedDate = (date) => {
  const parsedDate = toDate(date);
  return format(parsedDate, 'dd MMMM yyy', {
    timeZone: 'Europe/Paris',
    locale: fr,
  });
};
