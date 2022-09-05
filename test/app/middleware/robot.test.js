const { app } = require('egg-mock/bootstrap');

describe('test/middleware/robot', () => {
  it('should block robot', () => {
    return app
      .httpRequest()
      .get('/')
      .set('User-Agent', 'Baiduspider')
      .expect(403);
  });
});
