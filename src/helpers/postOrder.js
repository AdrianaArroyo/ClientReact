import axios from 'axios';


export const postOrder = async (listProducts) => {
    const url = `http://localhost:3000/api/orders/addOrders`;
    axios.post(url, listProducts)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  
}
