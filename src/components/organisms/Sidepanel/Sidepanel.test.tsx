import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../reduxTestRenderer';
import { APIS } from '../../../constants/contants';
import { SidePanel } from './Sidepanel';
import { BrowserRouter } from 'react-router-dom'

export const handlers = [
    rest.get(APIS.getContentEntries, (req, res, ctx) => {
        return res(ctx.json({
            "success": true,
            "body": [
                {
                    "contentId": "c963903a-1758-4c43-a1de-b475213ba0c9",
                    "title": "Food Blog"
                },
                {
                    "contentId": "8526db0b-13c5-46a4-a49b-7b6a78ceeb5f",
                    "title": "Entertainment Blog"
                },
                {
                    "contentId": "67e98a65-818d-477f-9129-cd190ca44b89",
                    "title": "test1"
                },
                {
                    "contentId": "test_1",
                    "title": "title_1"
                }
            ]
        }), ctx.delay(1))
    })
]

const server = setupServer(...handlers);
beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

test('render sidepanel with all content', async () => {
    renderWithProviders(
        <BrowserRouter><SidePanel /></BrowserRouter>
    )
    const item1 = await screen.findByText('test1')
    const item2 = screen.getByText('Food Blog')
    const item3 = screen.getByText('Entertainment Blog')
    const item4 = screen.getByText('title_1')
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    expect(item4).toBeInTheDocument();
})
