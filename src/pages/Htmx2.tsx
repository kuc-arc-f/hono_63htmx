const Page = () => {
  //
  return (
  <div>
    <h1>Htmx2.tsx</h1>
    <hr />
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on--before-request=""
    hx-on--after-request="alert('OK, post send')"
    >
      <input type="text" name="name" />
      <button type="submit">Test</button>
    </form>
    <hr />
    <h3 id="h2">ここに表示</h3>

  </div>
  );
};

export default Page;
