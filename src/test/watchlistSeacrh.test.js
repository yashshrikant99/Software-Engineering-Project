import { render, fireEvent, screen } from '@testing-library/react';
import {SearchBar} from '../components/SearchBar';

test('searches through the watchlist', async () => {
  // Render the Watchlist component
  
  const userData = 
    {    
        allowLogin: true,
        id: 1,
        email: "yexaf4658112@othao.com",
        username: "test1",
        funds_available: 0
     }
  
  render(<SearchBar user={userData} />);

  // Simulate user typing into the search field
  fireEvent.change(screen.getByLabelText('Search Watchlist'), {
    target: { value: 'Apple' },
  });

  // Wait for the search results to appear
  // Replace 'Search result' with the actual text you expect to find
  await screen.findByDisplayValue('APPLE INC.,,APC.DE');

  // Check that the search results are displayed
  // Replace 'Search result' with the actual text you expect to find
  expect(screen.getByText('Search result')).toBeInTheDocument();
});