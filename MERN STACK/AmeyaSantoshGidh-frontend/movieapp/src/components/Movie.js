import React, {useState, useEffect} from 'react';
import MovieDataservice from '../services/movies';
import {Link,useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image' ;
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import './MoviesList';

const Movie = ({ user }) => {
let params = useParams();
//const [currentPage, setCurrentPage ] = useState(0);

const [movie, setMovie] = useState({
id: null,
title:"",
rated: "",
reviews: []
});

useEffect (() => {
const getMovie = id =>{
    MovieDataservice.findById(id)
            .then(response => {
                setMovie(response.data) ;
            })
        .catch(e => {
            console.log (e) ;
        });
        }
    getMovie(params.id)
},[params.id]);

return (
<div>
<Container>
<Row>
    <Col>
    <div className="poster">
    <Image
    className="bigPicture"
    src={movie.poster+"/100px250"}
    onError={(e)=>{e.target.onerror = null; e.target.src="./images/NoPosterAvailable-crop.jpg"}}
    fluid />
</div>
</Col>
<Col>
<Card>
<Card.Header as="h5">{movie.title}</Card.Header>
<Card.Body>
<Card.Text>
{movie.plot}
</Card.Text>
{ user &&
<Link to={"/movies/"+params.id+"/review" }>
Add Review
</Link> }
</Card.Body>
</Card>
<h2>Reviews</h2>
<br></br>
{movie.reviews.map((review,index)=>{
    return(
        <div className="d-flex">
           <div className='flex-shrink-0 reviewsText'>
            <h5>
                {review.name+" reviewed on "}
                {moment(review.date).format("Do MMMM YYYY")}
            </h5>
            <p className='review'>
            {review.review}
            </p>
            {user && user.googleId === review.user_id &&
            <Row>
                <Col>
                <Link to = {{pathname:"/movies/"+params.id+"/review"
                }}
                    state ={{
                        currentReview:review
                        
                    }}>
                    Edit
                </Link>
                </Col>
                    <Col>
                    <Button variant = "link" onClick={()=>{
                    //todo
                      var data = {
                        review_id: review._id,
                        user_id: user.googleId
                      }

                      MovieDataservice.DeleteReview(data)
                        .then(response => {
                            setMovie((prevState)=>{
                                prevState.reviews.splice(index, 1);
                                return({
                                    ...prevState
                                })
                            })
                        })
                        .catch(e=>{
                            console.log(e);
                        })
                    }}>Delete
                    </Button>

                    </Col>
                </Row>
            }
            </div>     
        </div>
    )
})}  


    </Col>
    </Row>
</Container>

</div>
)
}
export default Movie;