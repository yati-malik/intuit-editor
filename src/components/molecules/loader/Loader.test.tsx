import { render } from '@testing-library/react'
import { Loader } from './Loader'

test('renders text inside button', async () => {
    const { asFragment } = render(<Loader></Loader>)
    expect(asFragment()).toMatchSnapshot();
})