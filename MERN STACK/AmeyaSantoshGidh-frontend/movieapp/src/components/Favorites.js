import React from 'react'
import { HTML5Backend } from "react-dnd-html5-backend"
import Container from "react-bootstrap/Container"
import { DndProvider } from "react-dnd"
import "./favorite.css";
import FavoritesList from "./FavoriteList.js"


const Favorites = ({
  setFavorites,
  doSaveFaves,
  setDoSaveFaves,
  setRefreshFavMovies,
  favMovies,
  reorderFavorites }) => {

//CHecking

  return (
    <div>
      <Container className="favoritesContainer">
        <div className="favoritesPanel">
          
          {
            favMovies.length < 1 ?
              "You haven't chosen any favorites yet"
              :
              "Drag your favorites to rank them"
          }
        </div>
        <DndProvider backend={HTML5Backend}>
          <FavoritesList
            favMovies={ favMovies }
            setFavorites={ setFavorites }
            doSaveFaves={ doSaveFaves }
            setDoSaveFaves={ setDoSaveFaves }
            setRefreshFavMovies = {setRefreshFavMovies}
            reorderFavorites={ reorderFavorites }/>
        </DndProvider>
      </Container>
      
    </div>
  )
}

export default Favorites;