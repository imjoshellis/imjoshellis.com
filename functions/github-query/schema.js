import gql from 'graphql-tag'

export default gql`
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
`
