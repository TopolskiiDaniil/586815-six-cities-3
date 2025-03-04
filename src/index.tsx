import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import { placeCards } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { Provider } from 'react-redux';
import { store } from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={placeCards} reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
