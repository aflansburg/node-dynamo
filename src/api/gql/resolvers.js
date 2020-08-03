module.exports.resolvers = {
  Query: {
    movies: () => [
      {
        year: 2013,
        title: 'Insidious: Chapter 2',
        info: {
          directors: ['James Wan'],
          release_date: '2013-09-13T00:00:00Z',
          rating: 7.1,
          genres: ['Horror', 'Thriller'],
          image_url:
            'http://ia.media-imdb.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX400_.jpg',
          plot:
            'The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world.',
          rank: 7,
          running_time_secs: 6360,
          actors: ['Patrick Wilson', 'Rose Byrne', 'Barbara Hershey'],
        },
      },
      {
        year: 2013,
        title: 'World War Z',
        info: {
          directors: ['Marc Forster'],
          release_date: '2013-06-02T00:00:00Z',
          rating: 7.1,
          genres: ['Action', 'Adventure', 'Horror', 'Sci-Fi', 'Thriller'],
          image_url:
            'http://ia.media-imdb.com/images/M/MV5BMTg0NTgxMjIxOF5BMl5BanBnXkFtZTcwMDM0MDY1OQ@@._V1_SX400_.jpg',
          plot:
            'United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.',
          rank: 8,
          running_time_secs: 6960,
          actors: ['Brad Pitt', 'Mireille Enos', 'Daniella Kertesz'],
        },
      },
    ],
  },
};
