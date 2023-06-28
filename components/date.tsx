import { parseISO, format } from "date-fns";

export default function DateValue({ dateString }) {
  const date = parseISO(new Date(dateString).toISOString());
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
