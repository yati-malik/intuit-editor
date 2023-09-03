import { render, screen } from '@testing-library/react'
import { ContentButton } from './ContentButton'

test('renders text inside content button', async () => {
    render(<ContentButton text='add content'></ContentButton>)
    const items = await screen.findAllByText('add content')
    expect(items).toHaveLength(1);
})
