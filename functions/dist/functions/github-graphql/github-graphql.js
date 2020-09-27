"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const axios_1 = __importDefault(require("axios"));
const queries_1 = require("./queries");
const schema_1 = __importDefault(require("./schema"));
const API_URL = 'https://api.github.com/grapql';
const headers = {
    authorization: `Bearer ${process.env.GH_TOKEN}`
};
const postAPI = (query) => axios_1.default.post(API_URL, { query }, { headers });
const resolvers = {
    Query: {
        getAbout: async () => {
            const res = await postAPI(queries_1.AboutQuery);
            console.log(res);
            return res;
        }
        // getFeaturedRepos: async () => await postAPI(FeaturedReposQuery),
        // getRecentRepos: async () => await postAPI(RecentReposQuery)
    }
};
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers
});
exports.handler = server.createHandler();
