import axios from 'axios';


export const postSupplie = async ({name}) => {
    const url = `http://localhost:3000/api/products/addSupplie`;
    axios.post(url, {
        nombre_producto: name,
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  
}