import { Player } from 'src/app/player'

interface Rating {
    elo : number,
    delta : number
}

export interface TDMKill {
    _id: string,
    killer: Player,
    victim: Player,
    killer_profile: string,
    victim_profile: string,
    killer_rating: Rating,
    victim_rating: Rating,
    weapon: number,
    killer_location: string,
    victim_location: string,
    date_created: Date,
    tdm_round: string
}