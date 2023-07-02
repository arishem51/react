const Count = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log('before setState');
    setCount(count + 1);
    console.log('after setState');
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Count />
    </div>
  );
};

const main = () => {
  const container = document.getElementById('container');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};

main();
