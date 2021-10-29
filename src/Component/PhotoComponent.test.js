import React from 'react'

// eslint-disable-next-line no-unused-vars
import {findByText, fireEvent, render,screen,waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'

/**
 * Photo Component is tested 
 *  tested string  'Photo' toBeInTheDocument()
 */
test('PhotoComponent component testing', async() => {
    
    render(<App/>)
    expect(screen.getByText('loading')).toBeInTheDocument()
    await waitForElementToBeRemoved(() =>screen.getByText(/loading/i))
    fireEvent.click( screen.getByRole('button', {
        name: /view profile3/i
      }))
       await screen.findByText(/id non nostrum expedita/i)
      fireEvent.click(
        screen.getByRole('button', {
            name: /view picture21/i
          })
      )
      // eslint-disable-next-line no-unused-vars
      const text2 = await screen.findByText('Photo')
      expect(screen.getByText('Photo')).toBeInTheDocument()
    //  screen.debug()
    
   
    
})
