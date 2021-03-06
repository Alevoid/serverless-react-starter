import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAPIRoute } from "../../api";
import { makeRequest } from "../../api/utils";
import { GET_MESSAGE } from "../../reducers/types";

import "./style.css";

const App = () => {
  const dispatch = useDispatch();
  const apiResponse = useSelector(({ message }) => message);

  return (
    <div className="App">
      <header className="App-header">
        React + Serverless with Webpack and Express
      </header>
      <section>
        <button
          className="App-button"
          onClick={async () => {
            const url = getAPIRoute("/greeting");

            dispatch({
              type: GET_MESSAGE,
              message: await makeRequest({ url })
            });
          }}
        >
          Call API
        </button>
      </section>
      {apiResponse && (
        <section>
          <div className="App-message">{apiResponse}</div>
        </section>
      )}
    </div>
  );
};

export default App;
