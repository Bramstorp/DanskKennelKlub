import { calendar } from "./calendar.mock";

export const calendarRequest = (calendarData = calendar) => {
  return new Promise((resolve, reject) => {
    if (!calendarData) {
      reject("not found");
    }
    resolve(calendarData);
  });
};
