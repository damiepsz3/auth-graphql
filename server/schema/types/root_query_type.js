const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./user_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { email: { type: GraphQLString }},
      resolve(parentValue, args) {
        return 'text'
      }
    }
  }
});

module.exports = RootQueryType;
