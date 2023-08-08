// src/redux/actions/materialsActions.js
export const setMaterials = (materials) => ({
    type: 'SET_MATERIALS',
    payload: materials,
  });
  
  export const fetchMaterials = () => {
    return async (dispatch) => {
      try {
        const bearerToken = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo';
        const response = await fetch(
          'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material',
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log(response,"material-action")
        const materialsData = await response.json();
        dispatch(setMaterials(materialsData.material));
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };
  };
  