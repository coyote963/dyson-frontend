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