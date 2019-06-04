const arrayBufferToString = (arrayBuffer: ArrayBuffer) => {
  return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer));
};

export const getBase64 = (file: File) => {
  return new Promise<string | null>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const { result } = reader;
      resolve(
        result instanceof ArrayBuffer ? arrayBufferToString(result) : result,
      );
    };
    reader.onerror = error => reject(error);
  });
};

const numberPadStart = (n: number, radix: number) =>
  n.toString().padStart(radix, '0');

export const formatMillisecond = (time: number) => {
  const date = new Date(time);
  return `${numberPadStart(date.getHours(), 2)}:${numberPadStart(
    date.getMinutes(),
    2,
  )}`;
};
