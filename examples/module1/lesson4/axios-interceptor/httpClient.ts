export const fetchProxy = new Proxy(fetch, {
  apply: function(target, thisArg, args) {
    const [url, options] = args;
    const startTime = new Date().getTime();

    return target.apply(thisArg, args).then(response => {
      const endTime = new Date().getTime();
      const duration = endTime - startTime;

      console.log(`Request to ${url} completed in ${duration}ms`);

      return response;
    });
  }
});