import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Cards from './Components/Common/Cards';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-enque-test');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		const {cards}=attributes
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

				
		<Cards isShow={true} cards={cards}/>

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});