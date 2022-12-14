// eslint-disable-next-line no-unused-vars
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(u => u.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'go go go';
    } else {
      await next();
    }
  };
};

