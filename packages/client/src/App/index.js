import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

function App() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.message);

  return (
    <div className="App">
      <header className="App-header">React + Servless with Webpack</header>
      <section>
        <button
          className="App-button"
          onClick={async () => {
            const response = await fetch("http://localhost:8000/user", {
              method: "GET"
            });
            const message = await response.json();

            dispatch({
              type: "MESSAGE",
              message
            });
          }}
        >
          Call API
        </button>
      </section>
      {message && (
        <section>
          <div className="App-message">{message}</div>
        </section>
      )}
    </div>
  );
}

export default App;
