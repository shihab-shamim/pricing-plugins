import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,device }) => {
	const { colors,layout,gaps,CardsContainerStyle } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksTestPurpose`;
	const container=`${mainSl} .snip1404`;
	const plan=`${container} .plan`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} p {
			${getColorsCSS(colors)}
		  }
			${plan}{
			max-width: 350px;
			min-height: 400px;
			height: auto;
			marginTop:${gaps}
			}
		  
		  ${container} {
			color: #fff;
			display: grid;
			width: ${CardsContainerStyle?.width};
			grid-template-columns: repeat(${layout?.desktop || 3}, 1fr);
		  gap: ${gaps};
		  }
		  
		  /* Tablet (645px - 1024px) */
		  @media only screen and (min-width: 645px) and (max-width: 1024px) {
			${container} {
			  grid-template-columns: repeat(${layout?.tablet || 2}, 1fr);
			   gap: ${gaps};
			}
		  }
		  
		  /* Mobile (Below 645px) */
		  @media only screen and (max-width: 645px) {
			${container} {
			  display: flex;
			  flex-direction: column;
			  max-width: 100%;
			  justify-content: center;
			  align-items: center;
			  gap: ${gaps};
			  ${plan}{
				max-width: 350px;
				}
			}
		  }
		  
	`}} />;
}
export default Style;