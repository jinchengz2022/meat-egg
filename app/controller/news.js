const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'qwe' },
    //     { id: 2, title: 'opp' },
    //   ],
    // };
    await this.ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
