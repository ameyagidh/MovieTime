# MOVIE TIME

Movie Time is a MERN Stack website which uses MongoDB, Express Js, React, Node js to build a full stack website. 
The website is a place where the backend movie data is stored  in MonogoDB atlas cluster, retrieved and displayed on the react website. I have used Html, CSS, Bootstrap, React for the frontend development and design of the website.
For the backend I have used Node js, Express js and MonogDB Atlas Cluster. 
The website is hosted and deployed on Heroku.

## Applicaiton url 

https://movietime-frontend-ameyasgidh.herokuapp.com/

- Git Clone https://github.com/ameyagidh/Movie-Time.git

## Installation
to access the backend repo.
- run command 
```cd AmeyaSantoshGidh-backend```

to access the frontend repo.
- run command 
```cd AmeyaSantoshGidh-frontend/movieapp``` 

- install node modules by running
```cd npm install``` in both the repo.

First run the backend then the front end so that the movies are fetched before displaying them.
- To run backend use the command 
```node index.js```
- To run frontend use the command 
```npm run start```

## Requirements
1) Node version 17.6 or higher.
2) Integrated development environment such as Visual Studio code (preferred)
3) React version 16 

## Links
- Github repo - https://github.com/ameyagidh/Movie-Time/tree/main/MERN%20STACK
- Github Frontend repo- https://github.com/ameyagidh/Movie-Time/tree/main/MERN%20STACK/AmeyaSantoshGidh-frontend/movieapp
- Github Backend repo - https://github.com/ameyagidh/Movie-Time/tree/main/MERN%20STACK/AmeyaSantoshGidh-backend
- Frontend Heroku - https://jiggle-frontend.herokuapp.com/
- Backend Heroku - https://movietime-backend-ameyasgidh.herokuapp.com/

## App Functionalities
- Sign in/out functionality using google api has been implemented
- When user is not logged in--> User can see the Movies as well as the reviews.
- when we click on a movie add review url calls the add review and the user if not logged in cannot add the reviews but can view them. 
- User logged in--> In addition to songs and add review, user can see a Favourites landing page as well. The user is given extra functionality of updating the reviews, adding them and deleting a review.
- Landing Page(Movies): All the Movies from the webpage. 
- Landing Page(Reviews): The movie reviews can be viewed, added, deleted or updated by the user. 
- Landing Page (Favourites): Movies that have been added by user as favorites.
- There is a filter function and a search function which allows user to access the required movies by name, All ratings, Approved, Passed, Open, Unrated.

## Screenshots
![MovieTimeGif](https://user-images.githubusercontent.com/65457905/190870065-ae027181-d8de-4e14-9a4b-d03118f2c005.gif)

### Landing Page
![LandingHomePage](https://user-images.githubusercontent.com/65457905/190870108-12f1f9e3-31c3-4510-abb8-ad5f24fb4a1f.PNG)

### Search By Name 
![SearchByName](https://user-images.githubusercontent.com/65457905/190870113-55326a10-526a-466d-a064-3657c993fb01.PNG)

### Filtered by a category called Approved
![FilteredBy_Approved](https://user-images.githubusercontent.com/65457905/190870116-e99b08a0-ae7c-410c-b59e-d77f7f920bfc.PNG)

### Login Favourites DND Card
![LoginFav](https://user-images.githubusercontent.com/65457905/190870110-0a98e2a9-88f3-4473-8bdd-4e1dd19085ba.PNG)

### Favourites page
![Favorites](https://user-images.githubusercontent.com/65457905/190870115-9f1dc385-d6de-42b7-af1d-4da2051f5e95.PNG)

