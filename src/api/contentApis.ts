import { APIS } from "../constants/contants";
import { EditorContent } from "../types"
import { IdAndTitle } from "../types/editor";
import { Axios } from './axios';

export const getContentById = async (id: string): Promise<EditorContent> => {
    const apiResponse = await Axios.get(APIS.getContent, { params: { id } });
    return apiResponse.data.body;
}

export const updateContent = async (content: EditorContent) => {
    try {
        const apiResponse = await Axios.post(APIS.updateContent, content, {});
        return apiResponse.data.body;
    }
    catch (Ex) { }
}

export const fetchContentEntriesApi = async () => {
    const apiResponse = await Axios.get(APIS.getContentEntries);
    return apiResponse.data.body;
}

export const createContentApi = async (title: string): Promise<IdAndTitle> => {
    const apiResponse = await Axios.post(APIS.createContent, { title: title }, {});
    return apiResponse.data.body;
}
