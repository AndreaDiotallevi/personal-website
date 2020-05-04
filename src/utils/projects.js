const projects = [
  {
    name: "The Movie Mapper",
    overview:
      "A single page application that allows the user to click on a country from a map and see a suggestion of the best movies for that country. The user can then filter the movies by genre and expand the research by clicking on the movie poster, to be redirected to the IMDB page.",
    videoUrl: "the-movie-mapper.mov",
    demoUrl: "https://www.themoviemapper.com",
    githubUrl: "https://github.com/AndreaDiotallevi/the-movie-mapper",
    devTechnologies:
      "React, Node, Redux, Python, Google Maps, LocationIQ, OMDb APIs.",
    apis: "Google Maps, LocationIQ, OMDb",
    testingTechnologies: "Jest, Enzyme, CircleCI, AWS",
  },
  {
    name: "Albums Manager",
    overview:
      "A full-stack application that lets a user manage his personal albums collection. The user can add new albums, view albums information, loan and return them.",
    videoUrl: "albums-manager.mov",
    demoUrl: "https://albums-manager.herokuapp.com",
    githubUrl: "https://github.com/AndreaDiotallevi/albums-manager",
    devTechnologies: "React, Node, Express, MongoDB and the LastFM API.",
    apis: "LastFM",
    testingTechnologies: "Jest, Supertest, Enzyme, CircleCI, Heroku",
  },
];

export default projects;
