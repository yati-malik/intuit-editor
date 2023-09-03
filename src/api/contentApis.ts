import { APIS, ContentItemType } from "../constants/contants";
import { EditorContent } from "../types"
import { Axios } from './axios';
import { Editor, Descendant } from 'slate';

export const getContentById = async (id: string): Promise<EditorContent> => {
    const content: EditorContent = {
        contentId: "1101",
        items: [
            {
                id: "1_1",
                stylesClasses: ['itlaic'],
                type: ContentItemType.text,
                content: {
                    text: "this is 1st line "
                }
            },
            {
                id: "1_2",
                stylesClasses: ['yellow', 'newLine'],
                type: ContentItemType.newLineText,
                content: {
                    text: "this is 2st line "
                }
            },
            {
                id: "1_2",
                stylesClasses: ['bold'],
                type: ContentItemType.text,
                content: {
                    text: "this is 3rd line"
                }
            }

        ]
    }
    return content;
}

export const updateContent = async (content: Descendant[]) => {
    const apiResponse = await Axios.post(APIS.updateContent, content, {});
}

export const createContent = async (title: string) => {
    const apiResponse = await Axios.post(APIS.createContent, { title: title }, {});
    return apiResponse;
}
