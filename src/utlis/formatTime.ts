const numberPadStart = (n: number, radix: number) =>
  n.toString().padStart(radix, '0');

export const formatMillisecond = (time: number) => {
  const date = new Date(time);
  return `${numberPadStart(date.getHours(), 2)}:${numberPadStart(
    date.getMinutes(),
    2,
  )}`;
};
