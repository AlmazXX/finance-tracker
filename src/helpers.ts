export const convertDate = (date: Date) => {
  return new Date(date).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
};