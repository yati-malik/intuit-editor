/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import { EditorLeaf } from './EditorLeaf'

const attributes = {
    'enabled': "true"
}


test('renders bold leaf', async () => {
    const leaf = {
        bold: true
    }
    const childNode = <button data-testid='myspan'></button>
    render(<EditorLeaf attributes={attributes} children={childNode} leaf={leaf}  ></ EditorLeaf>)
    const items = await screen.findByTestId('e-bold');
    const btn = await screen.findByRole('button');
    expect(btn).toBeInTheDocument();
    expect(items).toBeInTheDocument();

})

test('renders italic leaf', async () => {
    const leaf = {
        italic: true
    }
    const childNode = <span data-testid='myspan'></span>
    render(<EditorLeaf attributes={attributes} children={childNode} leaf={leaf}  ></ EditorLeaf>)
    const items = await screen.findByTestId('e-em');
    expect(items).toBeInTheDocument();

})

test('renders underline leaf', async () => {
    const leaf = {
        underline: true
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorLeaf attributes={attributes} children={childNode} leaf={leaf}  ></ EditorLeaf>)
    const items = container.querySelector('span');
    expect(items).toBeInTheDocument();
})


