
function App() {
  const name = "Developer Moseti";
  const x = false;

  return (
    <div className="App">
      <h1>Hello { name } </h1>
      <p> Hello { x ? 'Yes' : 'No' }</p>
    </div>
  );
}

export default App;
