import { Hono } from 'hono'
import { renderer } from './renderer'
//
import Htmx1 from './pages/Htmx1';
import Htmx2 from './pages/Htmx2';
//
const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})
//
app.get('/htmx1', (c) => {
  return c.render(<Htmx1 />)
});
app.get('/htmx2', (c) => {
  return c.render(<Htmx2 />)
});
/*
API
*/
app.post('/api/test/test', async (c) => {
  const formData = await c.req.parseBody();
console.log(formData);
  return c.json({ret: "OK", data: formData})
});


export default app
