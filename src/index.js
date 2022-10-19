import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import FirestoreContext from './context/firebaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirestoreContext>
      <App />
    </FirestoreContext>
  </React.StrictMode>
);

