import axios from 'axios';


export const updateSupplie = async ({name, id}) => {
    const url = `http://localhost:3000/api/products/updateSupplie/${id}`;
    axios.put(url, {
        nombre_producto: name,
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
}