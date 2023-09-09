// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SelectedItemProvider } from './SelectedItemContext'; // Import your context provider

// ReactDOM.render(
//   <React.StrictMode>
//     <SelectedItemProvider> {/* Wrap your app with the context provider */}
//       <App />
//     </SelectedItemProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SelectedItemProvider> {/* Wrap your app with the context provider */}
    <App />
  </SelectedItemProvider>
</React.StrictMode>
)