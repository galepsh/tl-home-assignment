export interface MediaValidatorChecker {
    check(url: string): Promise<boolean>;
}

export class MediaSourceValidator implements MediaValidatorChecker {

    check(url: string): Promise<boolean> {
        return fetch(url,{ cache: 'no-store' }).then(ret => ret.status === 200).catch(err => false);
    }
}

