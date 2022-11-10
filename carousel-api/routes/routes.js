const carouselData = [
    {
     "image": 'https://mdbcdn.b-cdn.net/img/new/slides/040.webp',
     "title": 'Slide 1',
     "subTitle": 'Slide 1 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    "title": 'Slide 2',
    "subTitle": 'Slide 2 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
    "title": 'Slide 3',
    "subTitle": 'Slide 3 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp',
    "title": 'Slide 4',
    "subTitle": 'Slide 4 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/045.webp',
    "title": 'Slide 5',
    "subTitle": 'Slide 5 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/046.webp',
    "title": 'Slide 6',
    "subTitle": 'Slide 6 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/047.webp',
    "title": 'Slide 7',
    "subTitle": 'Slide 7 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/048.webp',
    "title": 'Slide 8',
    "subTitle": 'Slide 8 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/049.webp',
    "title": 'Slide 9',
    "subTitle": 'Slide 9 sub'
    },
    {
    "image": 'https://mdbcdn.b-cdn.net/img/new/slides/050.webp',
    "title": 'Slide 10',
    "subTitle": 'Slide 10 sub'
    }
 ];
 

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/api/carousel", function (req, res) {
        const slides = req?.query?.slides || 10;
        const slicedData = carouselData.slice(0, slides);

        res.status(200).send(slicedData);
    });
    
  }
  
  module.exports = appRouter;