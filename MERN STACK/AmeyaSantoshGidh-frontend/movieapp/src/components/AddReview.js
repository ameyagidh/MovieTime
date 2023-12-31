import React,{useState} from 'react';
import MovieDataService from "../services/movies";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import { Form } from 'react-bootstrap/lib/navbar';

const AddReview = ({user}) =>{
    let editing = false;
    let initialReviewState = "";

    const navigate = useNavigate()
    let params = useParams();
    let location = useLocation();

    if(location.state && location.state.currentReview.review)
    {
        editing = true; initialReviewState = location.state.currentReview.review
    }

    const [review,setReview] = useState(initialReviewState);

    const onChangeReview = e=>{
        const review = e.target.value;
        setReview(review);
    }

    const saveReview=()=>{
    var data={
        review:review,
        name:user.name,
        user_id:user.googleId,
        movie_id:params.id

    }
    if(editing){
        //TODO: Editing
        console.log(location.state.currentReview);
        data.review_id = location.state.currentReview._id
        console.log(data.review_id);
        MovieDataService.editReview(data)
        .then(response=>{
            navigate("/movies/"+params.id)
        })
        .catch(e=>{
            console.log(e);
        });

    }   
    else{
        MovieDataService.createReview(data)
        .then(response=>{
            navigate("/movies/"+params.id)
        })
        .catch(e=>{
            console.log(e);
        });
    }
   } 


return(
    <Container className="main-container">
    <Form>
    <Form.Group className="mb-3">
    <Form.Label>
    {editing?"Edit":"Create"}
    Review
    </Form.Label>
 <Form.Control
    as ="textarea"
    type="text" 
    required
    review={review}
    onChange={onChangeReview}
    defaultValue={ editing ? null : ""}
    />
    </Form.Group>
    <Button
    variant = "primary" onClick={saveReview}>
        Submit
    </Button>
    </Form>
    </Container>
);
}
export default AddReview;