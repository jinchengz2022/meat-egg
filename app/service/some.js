const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
    console.log(rule);
  }
}

module.exports = SomeService;
