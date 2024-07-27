import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/style.css" rel="stylesheet" />
        {/* */}
        <script
        src="https://unpkg.com/htmx.org@1.9.10"
        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
        crossOrigin="anonymous"
        ></script>      
      </head>
      <body>
        <div class="navi_wrap">
          <a href="/">[ home ]</a>
          <a href="/htmx1">[ Htmx1 ]</a>
          <a href="/htmx2">[ Htmx2 ]</a>
          <hr />
        </div>
        {children}
      </body>
    </html>
  )
})
