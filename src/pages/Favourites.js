import React, { Component } from 'react'
import FavouriteList from '../components/FavouriteList/FavouriteList'

export default class Favourites extends Component {
  render() {
    return (
      <div>
          <h1>Favourite Todos</h1>
          <FavouriteList />
      </div>
    )
  }
}
