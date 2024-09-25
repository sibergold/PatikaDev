const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = '<h1>Welcome to Index Page</h1>';
});

router.get('/about', (ctx) => {
    ctx.body = '<h1>Welcome to About Page</h1>';
});

router.get('/contact', (ctx) => {
    ctx.body = '<h1>Welcome to Contact Page</h1>';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

    let port=3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
