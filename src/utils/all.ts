/** */
export const getFormattedDate = (date: string | number | Date): string =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
