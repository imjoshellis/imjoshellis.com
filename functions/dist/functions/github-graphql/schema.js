"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.default = graphql_tag_1.default `
	type UserStatus {
		emojiHTML: HTML
		message: String
	}

	type Viewer {
      id: String
      name: String
      bio: String
      avatarUrl: URI
      location: String
      url: URI
      status: UserStatus
      company: String
      isHireable: Boolean
	}

  type About {
    viewer: Viewer
  }
	
  type Query {
    getAbout(): About
  }
`;
