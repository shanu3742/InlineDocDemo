
import {render,screen,waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'


/**
 * profile component testing using `jest` with the help of `react-testing library`
 * testing Profile component after loading
 * testing shoud be continue after task 3 
 */



test('Profile component testing', async() => {
    render(<App/>)
    expect(screen.getByText('loading')).toBeInTheDocument()
    await waitForElementToBeRemoved(() =>screen.getByText(/loading/i))
    expect(screen.getByText(/leanne graham/i)).toBeInTheDocument()
    expect(screen.getByText(/gwenborough ,/i)).toBeInTheDocument()
    expect(screen.getByText(/Kulas Light ,/i)).toBeInTheDocument()
   
    screen.debug()
})
