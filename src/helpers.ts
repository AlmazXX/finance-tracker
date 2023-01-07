export const convertDate = (date: string) => {
  return new Date(date).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};