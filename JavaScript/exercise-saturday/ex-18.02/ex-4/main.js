let courses ='[{"title": "PHP","reviews": []},{"title": "Javascript","reviews":[5,5,4.5,4,5,5,5,4.5]  },{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning", "reviews": [5,5,4.5]}]';


function average_reviews(data) {
  let courses = JSON.parse(data);
  for (let i = 0; i < courses.length; i++) {
    let review = courses[i];
    try {
      if (review.length === 0) {
        throw "No reviews";
      } else if (review.length < 5) {
        throw "Not enough reviews yet";
      }
      let sumReviews = 0;
      for (let j = 0; j < review.length; j++) {
        sumReviews += review[j];
      }
      let average_reviews = sumReviews / review.length;
      courses[i].average_rating = average_reviews.toFixed(1);
    } catch (err) {
      courses[i].average_rating = err;
    }
  }
  return JSON.stringify(courses);
}


console.log(average_reviews(courses));