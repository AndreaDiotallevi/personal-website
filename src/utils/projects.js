export default [
  {
    name: "The Movie Mapper",
    overview:
      "A single page application that allows users to click on a country from a map and see a suggestion of the best movies for that country. Users can then filter the movies by genre and expand the research by clicking on the movie poster, to be redirected to the IMDB page. The map is shown with the Google Maps Api, the selected country is calculated with the LocationIQ Api, the list of best movies is collected via python web scraping and each movie info is fetched with the OMDb Api.",
    demoUrl: "https://www.themoviemapper.com",
    githubUrl: "https://github.com/AndreaDiotallevi/the-movie-mapper",
    technologies: ["React", "Redux", "JavaScript", "Python", "CircleCI", "AWS"],
    learnings: [
      "Front End Architecture",
      "Multiple Asynchronous APIs Calls",
      "Web Scraping",
      "AWS Deployment",
    ],
  },
  {
    name: "Archquery",
    overview:
      "Stack Overflow for architects. A full-stack application that allows architects to ask, answer, tag and vote technical questions like software engineers do on Stack Overflow. The relational database schema and layout are inspired by the amazing Stack Exchange architecture. This application also features a persistent authentication system designed with passport.js and session storage with the Redis database.",
    demoUrl: "https://archquery.herokuapp.com/",
    githubUrl: "https://github.com/AndreaDiotallevi/archquery",
    technologies: [
      "Node",
      "PostgreSQL",
      "Express",
      "React",
      "Redux",
      "Redis",
      "CircleCI",
      "Heroku",
    ],
    learnings: [
      "CRUD API Design",
      "SQL Relational Database",
      "Persistent Authentication",
      "Redis Session Store",
    ],
  },
  {
    name: "Albums Manager",
    overview:
      "A full-stack application built with the MERN stack and the LastFM Api that allows users to manage their personal album collections. Users can add albums dinamically to the collection, view all the albums, click on each album to see all the info, loan albums to friends, note the loan date & name on the album and mark the loaned album as returned. Users can also filter the albums that have been loaned to a specific friend.",
    demoUrl: "https://albums-manager.herokuapp.com",
    githubUrl: "https://github.com/AndreaDiotallevi/albums-manager",
    technologies: ["Node", "Express", "MongoDB", "React", "CircleCI", "Heroku"],
    learnings: [
      "Back End Architecture",
      "RESTful APIs Design",
      "API Endpoint Testing",
      "Non Relational Database",
    ],
  },
  {
    name: "Generative Art",
    overview:
      "A static website showcasing my generative art experimentations with p5.js, a Javascript client-side library for creating graphic and interactive experiences. I have been working on this side project since I started learning to code about two years ago. I plan to extend it by designing a payment system via PayPal and Stripe, to manage the shop in the future.",
    demoUrl: "https://www.andreadiotalleviart.com",
    githubUrl: "https://github.com/AndreaDiotallevi/generative-art-website",
    technologies: [
      "React",
      "JavaScript",
      "CSS Flexbox",
      "p5.js",
      "CircleCI",
      "Netlify",
    ],
    learnings: [
      "Mobile And Desktop Responsive Design",
      "Browser Interactive Animations",
    ],
  },
];
