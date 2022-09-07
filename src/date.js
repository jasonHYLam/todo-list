import { format } from "date-fns";

const formattedDate = format(new Date(), "dd/MM/yyyy");

const returnCurrentDate = () => {
    return new Date();
}
export {formattedDate, returnCurrentDate}


