
interface IGameMatch {
    total_kills: number,
    players: Array<string>,
    kills: Record<string, number>
}
// interface IGameMatches<T = Record<string, Array<string> | number | Record<string,number>>, K = Record<string, T>> { 
export interface IGameMatches<T = IGameMatch> { 
    [key: string]: T
}