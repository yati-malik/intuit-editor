import { render, screen } from '@testing-library/react'
import { Icon } from './MarkIcons'

test('renders text inside button', async () => {
    render(<Icon>save</Icon>)
    const items = await screen.findByText('save')
    expect(items).toBeDefined();
})