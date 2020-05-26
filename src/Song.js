import React, { Component } from 'react'

const Song = props => {

   const {name, artist, Key, bpm} = props

   return( 
      <>
         <h1>Name: {name}</h1>
         <h1>Artist: {artist}</h1>
         <h1>Key: {Key}</h1>
         <h1>BPM: {bpm}</h1>
      </>
   )
}

export default Song
