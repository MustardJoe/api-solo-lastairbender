import Component from './Component.js';
import AirbenderItem from './AirbenderItem.js';

class AirbenderList extends Component {
    render() {
        const list = this.renderDOM();
        
        this.props.characters.forEach(character => {
            const airbenderItem = new AirbenderItem({ character });
            list.appendChild(airbenderItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="character-list">    
            </ul>
        `;
    }
}

export default AirbenderList;