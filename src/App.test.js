import React from 'react'

import {render,screen,waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'


/**
 * App Component and profile component testing using `jest` with the help of `react-testing library`
 * tesing App component before loading and after loading
 * testing Profile component after loading
 * testing shoud be continue after task 3 
 */
test('App component testing', async() => {
    render(<App/>)
    expect(screen.getByText('loading')).toBeInTheDocument()
    await waitForElementToBeRemoved(() =>screen.getByText(/loading/i))
   
})

