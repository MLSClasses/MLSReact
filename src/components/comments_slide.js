import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/index.css";
const comment = (comment, name) => {
  return (
    <div class="comment-body">
      <div class="comment-content">{comment}</div>
      <span class="commenter">-{name}</span>
    </div>
  );
};
const CommentCarousel = () => {
  const comments = [
    {
      id: 1,
      comment: comment(
        "Shreya scored 1390/1440 in PSAT with very little prep. The score was `99 percentile at national level.",
        "Shreya's Parents",
        5
      ),
    },
    {
      id: 2,
      comment: comment(
        "Shreya scored 1390/1440 in PSAT with very little prep. The score was `99 percentile at national level.",
        "Shreya's Parents"
      ),
    },
    // Add more comments as needed
  ];

  return (
    <div className="carousell">
      <h1>Parents and students love us!</h1>
      <Carousel>
        {comments.map((comment) => (
          <Carousel.Item key={comment.id}>{comment.comment}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CommentCarousel;
