import {MediaSourceValidator} from "@/app/media-fetcher/media-source-validator";
import {ImageDataItem} from "@/app/media-fetcher/image-data.interface";

export const API_ADDRESS = 'https://terrific-live.free.beeceptor.com/promotionVideo/';

export interface DataFetchingResult {
    success: boolean,
    data: Array<ImageDataItem>
}

export class MediaFetcher {

    async getDataById(id: string | number): Promise<DataFetchingResult> {
        try {
            const serverRes = await fetch(API_ADDRESS + String(id));
            if (serverRes.status !== 200) {
                return { success: false, data:[] };
            }
            const serverDataItem = (await serverRes.json()) as Array<ImageDataItem>;
            const mediaValidator = new MediaSourceValidator();
            const dataItems = serverDataItem.filter(async item => {
                const isValid = await mediaValidator.check(item.image) && await mediaValidator.check(item.video);
                return isValid;
            });
            return { success: true, data: dataItems };
        } catch (err) {
            console.error(err);
            return { success: false, data: [] };
        }
    }

}
