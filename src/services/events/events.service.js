import { events } from "./events.mock";

export const eventsRequest = (eventsData = events) => {
  return new Promise((resolve, reject) => {
    if (!eventsData) {
      reject("not found");
    }
    resolve(eventsData);
  });
};
