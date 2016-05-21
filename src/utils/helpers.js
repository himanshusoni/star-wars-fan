import axios from 'axios'

// axios.get - returns Promise
// handle .then((data) => {})

export default (() => {

  const getApis = () => axios.get(`http://swapi.co/api/`)

  return {
    getApis
  }
})()
