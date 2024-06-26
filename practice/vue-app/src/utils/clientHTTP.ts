export const fetchWithTimeout = (url, timeout) => {
  let timeoutId;

  const fetchPromise = fetch(url).finally(() => {
    console.log('clear timeoutId',timeoutId)
    clearTimeout(timeoutId)});

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error('Timeout')), timeout);
    console.log('initialize timeoutId',timeoutId)
  });

  return Promise.race([fetchPromise, timeoutPromise]);
};
