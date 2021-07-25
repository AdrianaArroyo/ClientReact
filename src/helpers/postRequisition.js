import axios from 'axios';


export const postRequisition = async (listProducts) => {
    const url = `http://localhost:3000/api/requisitions/addRequisitions`;
    axios.post(url, listProducts)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  
}