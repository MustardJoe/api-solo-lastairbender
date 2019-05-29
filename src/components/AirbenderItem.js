import Component from './Component.js';

class AirbenderItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        return /*html*/`
        <li class="airbender-item">
            <h2>${character.name}</h2>
            <img src="${character.photoUrl}"> 
        </li>
        `;
    }

}

export default AirbenderItem;