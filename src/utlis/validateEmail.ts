// tslint:disable-next-line: max-line-length
export const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const validateEmail = (email: string): boolean => {
  return emailRegExp.test(email);
};
