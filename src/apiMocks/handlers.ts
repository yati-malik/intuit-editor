import { rest } from 'msw'
import { APIS } from '../constants/contants'
import createdContent from './createContent.json';
import contentEntries from './contentEntries.json';
import contents from './getContent.json';


export const handlers = [
    rest.post(APIS.createContent, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(createdContent)
        )
    }),

    rest.get(APIS.getContentEntries, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(contentEntries),
        )
    }),

    rest.get(APIS.getContent, (req, res, ctx) => {
        const content = contents.filter((content) => content.body.contentId === req.id)
        return res(
            ctx.status(200),
            ctx.json(content)
        )
    }),
]