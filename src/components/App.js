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

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        //uses api method to retreive data and update list
        api.getCharacters()
            .then(characters => {
                airbenderList.update({ characters });
            })
            .catch(err => {
                console.log(err);
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