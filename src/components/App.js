import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import api from '../services/airbender-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        console.log(headerDOM);
        dom.insertBefore(headerDOM, main);

        const airbenderList = new AirbenderList({ characters: [] });
        main.appendChild(airbenderList.render());

        api.getCharacters()
            .then(characters => {
                airbenderList.update({ characters });
            })
            .catch(err => {
                console.log(err);
                // errorDisplay.update({ error: err.message });
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