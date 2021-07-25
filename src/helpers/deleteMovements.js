import axios from 'axios';

export const deleteMovements = async (id) => {
    const url = `http://localhost:3000/api/products/delete/${id}`;
    axios.delete(url)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  
}
