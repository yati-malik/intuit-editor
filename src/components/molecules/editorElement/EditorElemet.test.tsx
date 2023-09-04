/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { EditorElement } from './EditorElement'

const attributes = {
    'enabled': "true"
}

test('renders blockquote element', async () => {
    const element = {
        type: 'block-quote'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('blockquote');
    expect(items).toBeInTheDocument();
})

test('renders bulleted-list element', async () => {
    const element = {
        type: 'bulleted-list'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('ul');
    expect(items).toBeInTheDocument();
})

test('renders heading-one element', async () => {
    const element = {
        type: 'heading-one'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('h1');
    expect(items).toBeInTheDocument();
})

test('renders heading-two element', async () => {
    const element = {
        type: 'heading-two'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('h2');
    expect(items).toBeInTheDocument();
})

test('renders list-item element', async () => {
    const element = {
        type: 'list-item'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('li');
    expect(items).toBeInTheDocument();
})

test('renders numbered-list element', async () => {
    const element = {
        type: 'numbered-list'
    }
    const childNode = <span data-testid='myspan'></span>
    const { container } = render(<EditorElement attributes={attributes} children={childNode} element={element}  ></ EditorElement>)
    const items = container.querySelector('ol');
    expect(items).toBeInTheDocument();
})
