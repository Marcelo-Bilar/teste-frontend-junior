import { html } from '~/utils';
import { PlayerInteiro } from './PlayerInteiro';

import './App.css';

export function App() {
  return html`
    <div class="App">
      ${PlayerInteiro()}
    </div>
  `;
}
