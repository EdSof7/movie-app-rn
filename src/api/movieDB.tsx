import axios from "axios";

const movieDB = axios.create({
    baseURL : "https://api.themoviedb.org/3/movie",
    params:{
        api_key : 'c015f50d788dce36e1aa2a042dfcb2d2', 
        languaje: 'es-ES'
    }
})

export default movieDB;