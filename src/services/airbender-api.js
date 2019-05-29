const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    },
    getAllies(character) {
        let url = URL;

        if(search) {
            const searchParams = new URLSearchParams();
            searchParams.set('search', search);
            const query = searchParams.toString();
            url = `${URL}?allies=${character.name}`;
        }

        return fetch(url);
    },
    // getEnemies(character) {

    // }
};

export default api;