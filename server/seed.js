const db = require('./index.js');
const Promise = require('bluebird');
const faker = require('faker')


var createUsers = () => {

  var users = [];

  for ( let i = 0; i < 100; i++) {
    const user = {
      id: i,
      name: faker.name.findName(),
      username: faker.internet.username(),
      address: faker.address.city() + ", " + faker.address.country(),
      contributions: Math.floor(Math.random() * 500),
      votes: Math.floor(Math.random() * 500),
    }
    users.push(user);
  }
  return users;
}

var addUsers= (users) => {

  var query = "INSERT INTO users \
  (name, username, address, contributions, votes) \
  VALUES (?, ?, ?, ?, ?)"

  for (var i = 0; i < users.length; i++) {

    var queryArg = [users[i].name, users[i].username, users[i].address, users[i].contributions, users[i].votes]

    return new Promise((resolve, reject) => {
      db.query(query, queryArgs, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(err)
        }
      })
    })
  }
}

var createReviews = (users) => {

  var travel_type = ['families', 'couples', 'solo', 'business', 'friends'];
  var languages = ['Russian', 'English', 'German', 'Chinese', 'French', 'Spanish', 'Italian', 'Polish', 'Swedish', 'Arabic', 'Japanese','Hindi', 'Bengai', 'Indonesian', 'Turkish'];

  var reviews = [];

  for ( let i = 0; i < 100; i++) {
    const review = {
      user_id: users[Math.floor(Math.random() * 100)].id,
      title: faker.lorem.sentence(),
      full_text: faker.lorem.sentences(),
      date: faker.date.recent(),
      travel_type: travel_type[Math.floor(Math.random() * 5)],
      language: languages[Math.floor(Math.random() * 15)],
      rating: Math.floor(Math.random() * 6),
      photo: '../public/photo1.jpeg'
    }
    reviews.push(review)
  }

  return reviews;

}


var addReviews= (reviews) => {

  var query = "INSERT INTO reviews \
  (user_id, title, full_text, date, travel_type, language, rating) \
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

  for (var i = 0; i < reviews.length; i++) {

    var queryArg = [reviews[i].user_id, reviews[i].title, reviews[i].full_text, reviews[i].date, reviews[i].travel_type, reviews[i].language, reviews[i].rating, reviews[i].photo ]

    return new Promise((resolve, reject) => {
      db.query(query, queryArgs, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(err)
        }
      })
    })
  }

}


createUsers()
  .then( (users) => {
    addUsers(users)
    return users
  })
  .then( (users) => {
    return createReviews(users)
  })
  .then ( (reviews) => {
    addReviews(reviews)
  })
  .catch( (err) = > {
    console.log(err)
  })



