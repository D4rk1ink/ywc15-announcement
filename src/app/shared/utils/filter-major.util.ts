import User from '../../shared/models/user.model'

export default (interview: any[]) => {
    const interviewGroups = {
        ct: [],
        ds: [],
        mk: [],
        pg: []
    }
    interview.forEach((user: User) => {
        switch (user.interviewRef.slice(0, 2)) {
            case 'CT':
                interviewGroups.ct.push(user)
                break
            case 'DS':
                interviewGroups.ds.push(user)
                break
            case 'MK':
                interviewGroups.mk.push(user)
                break
            case 'PG':
                interviewGroups.pg.push(user)
                break
        }
    })
    return interviewGroups
}