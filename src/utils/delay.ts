export const delay = (seconds: number = 1) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));
