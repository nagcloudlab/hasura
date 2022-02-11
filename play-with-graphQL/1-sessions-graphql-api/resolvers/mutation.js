

module.exports = {

    addNewSession: (parent, { session }, { dataSources }, info) => {
        return dataSources.sessionAPI.addSession(session)
    },
    deleteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.deleteSession(id)
    },
    toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.toggleFavoriteSession(id)
    },


}