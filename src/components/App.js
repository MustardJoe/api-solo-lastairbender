import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import Loading from './Loading.js';
import api from '../services/airbender-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        //instantiates and appends header
        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        //instantiates and appends empty airbender character list
        const airbenderList = new AirbenderList({ characters: [] });
        main.appendChild(airbenderList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        function loadCharacters() {
            const params = window.location.hash.slice(1);

            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');

            loading.update({ loading: true }); 
            //uses api method to retreive data and update list
            api.getCharacters(search)
                .then(characters => {
                    airbenderList.update({ characters });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loading: false });
                });

        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    
                </main>
            </div>
        `;
    }
}

export default App;