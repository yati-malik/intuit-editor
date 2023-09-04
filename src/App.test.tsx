
import React from 'react'
import { handlers } from './apiMocks/handlers';
import { setupServer } from 'msw/node';
import App from './App';
import { render, screen } from '@testing-library/react';
import contentEntries from './apiMocks/contentEntries.json';
import userEvent from '@testing-library/user-event';


const server = setupServer(...handlers);
beforeAll(() => {
    server.listen();
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

test('check app renders', async () => {
    render(<App></App>)
    const appContainer = await screen.findByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
})

test('check all entries in side panel', async () => {
    render(<App></App>)
    const firstItem = await screen.findByText(contentEntries.body[0].title);
    expect(firstItem).toBeInTheDocument();
    for (const contentEntry of contentEntries.body) {
        const contentTitle = await screen.findByText(contentEntry.title);
        expect(contentTitle).toBeInTheDocument();
    }
})

test('check navigation', async () => {
    render(<App></App>)
    const firstItem = await screen.findByText(contentEntries.body[0].title);
    await userEvent.click(firstItem);
    const markButtons = await screen.findAllByTestId('span-bt');
    expect(markButtons[0]).toBeInTheDocument();
})