import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './assets/components/index';
import reportWebVitals from './reportWebVitals';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
