import Component from './Component.js';
import Header from './Header.js';
import api from '../services/airbender-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        console.log(headerDOM);
        dom.insertBefore(headerDOM, main);

        api.getCharacters();

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