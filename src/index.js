import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './style/owfont-regular.min.css';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
