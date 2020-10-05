import React from "react";
import { Provider } from "react-redux";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

import { store } from "./store/store";

import Calendar from "./components/Calendar/Calendar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider rootComponent={TransitionGroup}>
        <div className="App">
          <Calendar />
        </div>
      </ModalProvider>
    </Provider>
  );
}

export default App;
