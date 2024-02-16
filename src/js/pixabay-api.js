export function getGallery(queryName) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: "42411294-725222da594329eba51636ded",
        q: queryName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
 
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch(error => {
        console.log(error);
        });
    
}