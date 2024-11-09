import axios from 'axios';

async function getAllStarships(url){
    try {
        let res = await axios.get(url)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export {getAllStarships}