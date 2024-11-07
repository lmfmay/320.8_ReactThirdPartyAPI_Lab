import axios from 'axios';

async function getAllStarships(url){
    try {
        let res = await axios.get(url)
        return res.data.results;
    } catch (error) {
        console.error(error)
    }
}

// async function createProduce(formData){
//     try {
//         let url = 'http://localhost:3000/api/produce';
//         formData.price = '$' + formData.price;
//         let res = await axios.post(url, formData);
//         return res.data;
//     } catch (error) {
//         console.error(error)
//     }
// }

// async function deleteProduce(id){
//     try {
//         let url = `http://localhost:3000/api/produce/${id}`;
//         let res = await axios.delete(url);
//         return true;
//     } catch (error) {
//         console.error(error)
//     }
// }

// async function updateProduce(id, formData){
//     try {
//         let url = `http://localhost:3000/api/produce/${id}`;
//         let res = await axios.put(url, formData);
//         return res.data;
//     } catch (error) {
//         console.error(error)
//     }
// }

export {getAllStarships}