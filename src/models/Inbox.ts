import { Player}  from '../app/player'


export  interface Inbox {
    _id: string,
    date: Date,
    message: string,
    user_name: string,
    user: string,
}