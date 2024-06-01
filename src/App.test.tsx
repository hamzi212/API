// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import APIHandlingScreen from './pages/APIHandlingScreen';
import Note from './components/Notes';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <APIHandlingScreen />
      <Note />
    </div>
  );
}

export default App;
