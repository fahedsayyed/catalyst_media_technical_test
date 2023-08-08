

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch(
        'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products',
        {
          headers: {
            Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo', 
          },
        }
      );
      console.log(response,"product-response")
      const data = await response.json();
      dispatch(fetchProductsSuccess(data.products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
