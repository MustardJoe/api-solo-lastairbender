import Component from './Component.js';

class AirbenderItem extends Component {
    // render() {
    //     const linkPart = this.renderDOM();
    //     const allies = document.getElementById();

    //     allies.addEventListener('click', event => {
    //         event.preventDefault();
    //         const searchParams = new URLSearchParams();
    //         searchParams.set('search', allies);
    //         window.location.hash = searchParams.toString(); 
    //     });

    //     return linkPart;
    // }

    renderTemplate() {
        const character = this.props.character;
        return /*html*/`
        <li class="airbender-item">
            <h2>${character.name}</h2>
            <img src="${character.photoUrl}"> 
            <div class="links">
                <a id="allies-link" href="#allies=${character.name}">Allies</a>
                <a id="enemies-link" href="#enemies=${character.name}">Enemies</a>
            </div>
        </li>
        `;
    }

}

export default AirbenderItem;