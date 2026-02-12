import './App.css';

function App() {
  // --- PASTE BAD CODE HERE ---
  const x = 10; // ESLint WILL catch this as unused
  const y=20;   // Prettier WILL catch this bad spacing
  // ---------------------------

  return (
    <div className="App">
      <h1>Testing CI/CD</h1>
    </div>
  );
}

export default App;