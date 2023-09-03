import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders text inside button', async () => {
    render(<Button active={true}></Button>)
    const items = await screen.findByTestId('span-bt')
    expect(items).toBeDefined();
})