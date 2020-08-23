interface ClimbTime {
    names : string[],
    player : string
    time : number,
    date_created : Date
}

export interface Climb {
    _id : string,
    map_id : string,
    times : ClimbTime[]
}

