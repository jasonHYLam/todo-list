import { addDays, format, formatDistance, isMatch, isValid, isWithinInterval, parse, parseISO, subDays } from "date-fns";
import { enGB } from "date-fns/locale";

const formattedDate = format(new Date(), "dd/MM/yyyy");
// const formattedDate = format(new Date());

const returnCurrentDate = () => {
    return new Date();
}

const checkIfWithinWeek = (taskInArray) => {
   return isWithinInterval(
        parseDate(taskInArray.dueDate),
        {start: parseDate(formattedDate), end: addDays(parseDate(formattedDate), 7)})
}

const parseDate = (date) => {
    return parse(date, 'dd/MM/yyyy', new Date());
}

export {formattedDate, returnCurrentDate, checkIfWithinWeek,}


