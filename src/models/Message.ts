export interface ChatMessage { 
    sender_id : string,
    date: Date,
    message : string,
    username : string
}

export interface PrivateMessage {
    from :string,
    from_name : string
    to: string,
    to_name: string,
    date: Date,
    message : string,
}