import { Player } from 'src/app/player'
interface TrueSkillRating {
    mu : number,
    sigma : number,
    mu_delta : number,
    sigma_delta : number,
}
export interface DMKill {
    _id : string,
    killer_rating : TrueSkillRating,
    victim_rating : TrueSkillRating,
    killer : Player,
    victim : Player,
    weapon : string,
    killer_location : string, 
    victim_location : string, 
    date_created : Date,
    match : string
}