interface Photo {
    value: string
}
export interface User {
    provider: string,
    _json: {
        steamid: string,
        communityvisibilitystate: number,
        profilestate: number,
        personaname:string,
        profileurl: string,
        avatar: string,
        avatarmedium: string,
        avatarfull: string,
        avatarhash: string,
        lastlogoff: number,
        personastate: number,
        primaryclanid: string,
        timecreated: number,
        personastateflags: number
    },
    id: string,
    displayName: string,
    photos: [Photo],
    identifier: string,
}

export interface AuthUser {
    user : User,
    iat : number,
    exp: number
}
