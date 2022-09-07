import { format, formatDistance, isMatch, isValid, parse, parseISO, subDays } from "date-fns";
import { enGB } from "date-fns/locale";

const formattedDate = format(new Date(), "dd/MM/yyyy");
// const formattedDate = format(new Date());

const returnCurrentDate = () => {
    return new Date();
}

const checkIfWithinWeek = (dateInArray) => {
    console.log(parseDate(dateInArray));
    console.log(parseDate(formattedDate));
    return formatDistance(parseDate(dateInArray), parseDate(formattedDate))
}

const parseDate = (date) => {
    return parse(date, 'dd/MM/yyyy', new Date());
}

export {formattedDate, returnCurrentDate, checkIfWithinWeek,}


