// src/redux/actions/colorsActions.js
export const setColors = (colors) => ({

    type: 'SET_COLORS',
    payload: colors,
  });
  
  export const fetchColors = () => {
    return async (dispatch) => {
      try {
        const bearerToken = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo';
        const response = await fetch(
          'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors',
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log(response,"color-response")
        const colorsData = await response.json();
        console.log(colorsData.colors,"colorData")
        dispatch(setColors(colorsData.colors));
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };
  };
  