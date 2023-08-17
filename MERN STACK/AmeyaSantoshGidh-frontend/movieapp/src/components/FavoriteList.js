import { useCallback, useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { DnDCard } from "./DnDCards"
import update from 'immutability-helper'
import { ItemTypes } from './ItemType.js'
import React from 'react'
import { memo } from "react";



const style = {
  width: 500,
  margin: '1em',
}

export const FavoritesList = memo(function FavoritesList({
  setRefreshFavMovies,
  favMovies,
  reorderFavorites
 }) {
  useEffect(() =>{
    setRefreshFavMovies(true);
  });

    
  const [cards, setCards] = useState(favMovies);
  useEffect(() => {
    if (favMovies.length > 0) {
      setCards(favMovies);
    }
  },


  [favMovies.toString()] )

  useEffect(() => {
    let newFavs = cards.map(c => c._id);
    reorderFavorites(newFavs);
 
  }, [cards])

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0]
      return {
        card,
        index: cards.indexOf(card),
      }
    },
    [cards],
  )

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      );
    },
    [findCard, cards, setCards],
  )
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))

  return (
    <div ref={drop} style={style}>
      {cards.map((card, index) => (
        <DnDCard
          key={card.id}
          id={`${card.id}`}
          index={index}
          title={card.title}
          poster={card.poster}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  )
})

export default FavoritesList