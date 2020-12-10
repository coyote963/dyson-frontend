import { Player } from '../app/player'
export interface Clan {
    _id : string,
    clan_tag: string,
    total: number,
    players: Player[]
}

