import axios from 'axios';

const findProduct = (product) => {
  axios.get(`https://www.frisco.pl/app/commerce/api/v1/offer/products/query?search=${product}&pageSize=100`)
  .then(response => console.log(response));
}

export default findProduct
