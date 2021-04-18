
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql `
  type Movie {
    title: String
    releaseDate: String
    rating: Int
  }

  type Query {
    movies: [Movie]
  }
  # 
`
const movies = [
  {
    title: 'Fellowship of the Ring',
    releaseDate: '01-01-2000',
    rating: 5
  },
  {
    title: 'The Two Towers',
    releaseDate: '02-02-2001',
    rating: 5
  },
  {
    title: 'Return of the King',
    releaseDate: '03-03-2002',
    rating: 5
  }
]

const resolvers = {
  Query: {
    movies: () => {
      return movies;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
})
