const Page = () => {
  //
  return (
  <div>
    <h1>Htmx1.tsx</h1>
    <hr />
    <button
      hx-get="https://jsonplaceholder.typicode.com/users/1"
      hx-target="#h2"
    >
      Click
    </button>
    <h3 id="h2">ここに表示</h3>

  </div>
  );
};

export default Page;
