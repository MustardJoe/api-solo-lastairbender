const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {

    getCharacters(query) {
        console.log('from api call', query);

        let url = URL;

        if(query) {
            url = `${URL}?${query}`;
        }


        return fetch(url)
            .then(response => response.json());
    },
    // getAllies(character) {
    //     let url = URL;

    //     if(character) {
    //         const searchParams = new URLSearchParams();
    //         searchParams.set('search', character);
    //         const query = searchParams.toString();
    //         url = `${URL}?allies=${character.name}`;
    //     }

    //     return fetch(url)
    //         .then(response => response.json());
    // },
    // getEnemies(character) {

    // }
};

export default api;