const usersModel = require("./users.model");

const usersResolvers = {
    User: {
        __resolveType(user, context, info) {
            if (user.customerId) {
                return 'Customer'
            }
            if (user.sellerId) {
                return 'Seller'
            }

            return null; // GraphQLError is thrown

        }
    },
    Query: {
        users: (_, args) => {
            return usersModel.getAllUsers();
        }
    }
}

module.exports = usersResolvers;