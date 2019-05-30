import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="footer">
                <a href="./index.html"><h2>Back to Start</h2></a>
            </div>
    `;
    }
}

export default Footer;