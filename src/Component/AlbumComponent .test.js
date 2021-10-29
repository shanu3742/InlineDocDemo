import React from 'react'

import {fireEvent, render,screen,waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'
/**
 * Album Component is tested 
 *  tested string  `id non nostrum expedita` toBeInTheDocument()
 */

test('AlbumComponent component testing', async() => {
    
    render(<App/>)
    expect(screen.getByText('loading')).toBeInTheDocument()
    await waitForElementToBeRemoved(() =>screen.getByText(/loading/i))
    fireEvent.click( screen.getByRole('button', {
        name: /view profile3/i
      }))
     
      // eslint-disable-next-line no-unused-vars
      const text = await screen.findByText(/id non nostrum expedita/i)
      expect(screen.getByText(/id non nostrum expedita/i)).toBeInTheDocument()
      expect(screen.getByText(/omnis neque exercitationem sed dolor atque maxime aut cum/i)).toBeInTheDocument()
     
    
   
    
})
