import { levels } from '../data/naezith'
import { calcScore } from '../utility/calculations'

export const getLevel = (level_id) => levels.find(l => l.id === level_id)

export const sortEntries = (entries) => entries
    .sort((a, b) => calcScore(a.eq_rank, a.lb_size) < calcScore(b.eq_rank, b.lb_size))
    //.sort((a, b) => getLevel(a.id).name > getLevel(b.id).name) 
    .sort((a, b) => getLevel(a.id).chapter > getLevel(b.id).chapter)
    .sort((a, b) => getLevel(a.id).is_secret > getLevel(b.id).is_secret) 
