import * as React from "react";
import * as ReactDOM from 'react-dom';
import App from './pages/App';
import favicon from "./assets/favicon.ico";


// For favicon hashing
document.getElementById('favicon').href = favicon

ReactDOM.render(<App />, document.getElementById('root'));