//GIORNI PER LA PRENOTAZIONE
const month30 = [...Array(30).keys()];
const month31 = [...Array(31).keys()];
const months = month30.concat(month31);
months[30] = 30;
months[0] = 30;
const week = [
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab",
  "Dom",
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab",
  "Dom",
];

const currday = new Date().getDate();
const currWeekDay = new Date().getDay() - 1;
export const selectionDate = [
  { id: 0, day: currday, weekD: week[currWeekDay] },
  { id: 1, day: months[currday + 1], weekD: week[currWeekDay + 1] },
  { id: 2, day: months[currday + 2], weekD: week[currWeekDay + 2] },
  { id: 3, day: months[currday + 3], weekD: week[currWeekDay + 3] },
  { id: 4, day: months[currday + 4], weekD: week[currWeekDay + 4] },
  { id: 5, day: months[currday + 5], weekD: week[currWeekDay + 5] },
];

export const selectionHour = [
  { id: 0, content: "16:00" },
  { id: 1, content: "18:00" },
  { id: 2, content: "20:00" },
  { id: 3, content: "22:00" },
  { id: 4, content: "00:00" },
];
