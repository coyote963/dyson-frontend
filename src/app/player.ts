export interface Player {
    _id: string;
    name: [string];
    profile: {"platform" : string, "profile" : string},
    color: string;
    premium: string;
    hat: string;
}

export interface PlayerPage {
    docs : Array<Player>,
    totalDocs : number,
    limit : number,
    totalPages : number,
    page : number,
    pagingCounter : number,
    hasPrevPage : boolean,
    hasNextPage : boolean,
    prevPage : number,
    nextPage : number
}

export interface DMPlayer {
    _id : string,
    player : Player,
    mu : number,
    sigma : number,
    rating : number,
    kills : number,
    deaths : number,
    last_updated : Date
}

export interface DMPlayerPage {
    docs : Array<DMPlayer>,
    totalDocs : number,
    limit : number,
    totalPages : number,
    page : number,
    pagingCounter : number,
    hasPrevPage : boolean,
    hasNextPage : boolean,
    prevPage : number,
    nextPage : number
}

export interface TDMPlayer {
    _id : string,
    player : Player,
    mu : number,
    sigma : number,
    rating : number,
    elo : number, 
    kills : number,
    deaths : number,
    wins : number,
    losses : number,
    last_updated : Date
}
export interface TDMPlayerPage {
    docs : Array<TDMPlayer>,
    totalDocs : number,
    limit : number,
    totalPages : number,
    page : number,
    pagingCounter : number,
    hasPrevPage : boolean,
    hasNextPage : boolean,
    prevPage : number,
    nextPage : number
}

export interface CTFPlayer {
    _id : string,
    player : Player,
    mu : number,
    sigma : number,
    kill : number,
    deaths : number, 
    wins : number,
    losses : number,
    captures : number,
    games : number,
    rating : number,
    last_updated : Date
}

export interface CTFPlayerPage {
    docs : Array<CTFPlayer>,
    totalDocs : number,
    limit : number,
    totalPages : number,
    page : number,
    pagingCounter : number,
    hasPrevPage : boolean,
    hasNextPage : boolean,
    prevPage : number,
    nextPage : number
}


export interface TDMPlayerDetail {
    profile : TDMPlayer,
    percentile : number,
    ranking : number,
    total : number
}

export interface CTFPlayerDetail {
    profile : CTFPlayer,
    percentile : number,
    ranking : number,
    total : number
}

export interface DMPlayerDetail {
    profile : DMPlayer,
    percentile : number,
    ranking : number,
    total : number
}

export interface ColorInfo {
    name : {
        value : string
    }
}
export interface Avatar {
    avatar : string
}

export interface WeaponUsage {
    _id : string,
    frequency: number
}

export interface AuthUser {
    user : Player,
    iat : number,
    exp: number

}