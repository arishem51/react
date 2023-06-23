const App = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

const main = () => {
  const container = document.getElementById('container');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};

main();
