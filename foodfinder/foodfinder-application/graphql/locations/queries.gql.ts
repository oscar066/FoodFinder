
export default `
    allLocations: [Location]!
    LocationsById(location_ids: [String]!): [Location]!
    onUserWishlist(user_id: String!): [Location]!
`;