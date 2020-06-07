import React from 'react'
//import {useLocation} from "react-router-dom"
//import axios from 'axios'

const Song = props => {

    const {Name, Artist, Key, BPM} = props


    //Ideally the song page will get it's information from the backend, however
    //I have not been able to figure out how to extract the data from the axios
    //call

    /*
    let path = useLocation().pathname
    let ID = path.slice(6,
                    (path.indexOf('/',6) === -1 ?
                        path.length : path.indexOf('/',6)))

    axios.get('http://localhost:5000/songs', {})
        .then(response => {
            console.log(response)
            this.setState({songList : response.data.song_list})
        })
        .catch(function (error) {
            console.log(error)
    })
    */
    return(
        <>
            <h1>Name: {Name}</h1>
            <h1>Artist: {Artist}</h1>
            <h1>Key: {Key}</h1>
            <h1>BPM: {BPM}</h1>
        </>
    )
}

export default Song
