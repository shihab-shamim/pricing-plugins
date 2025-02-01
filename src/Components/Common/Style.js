import { getColorsCSS,getTypoCSS,getBorderBoxCSS,getBackgroundCSS} from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,device }) => {
	const { colors,layout,gaps,CardsContainerStyle,titleColor,titleAlign,titleTypo,priceColor ,priceAlign,priceTypo,featuresColor,featureTypo,buttonColor,ButtonTypo,buttonPadding,buttonRadius,iconColor,iconSize,cardBorder,alignment,cardsFather} = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksTestPurpose`;
	const fatherofcards = `${mainSl} .fatherofcards`;
	const container=`${fatherofcards} .snip1404`;
	const plan=`${container} .plan`;
	const planTitlt=`${container} .plan-title`;
	const planCost=`${container} .plan-cost`;
	const planFeatures=`${container} .plan-features`;
	const feature=`${planFeatures} .feature`;
	const selectPanel=`${container} .panelSelect`;
	const selectPlan=`${selectPanel} .plan-select`
	const button=`${selectPanel} .select-plan`;
	

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', titleTypo)?.googleFontLink}
       ${getTypoCSS(planTitlt, titleTypo)?.styles}

		${getTypoCSS('', priceTypo)?.googleFontLink}
       ${getTypoCSS(planCost, priceTypo)?.styles}

		${getTypoCSS('', featureTypo)?.googleFontLink}
       ${getTypoCSS(feature, featureTypo)?.styles}

		${getTypoCSS('', ButtonTypo)?.googleFontLink}
       ${getTypoCSS(button, ButtonTypo)?.styles}
		
		${blockSl} p {
			${getColorsCSS(colors)}
		  }
			${fatherofcards}{
			display: flex;
			justify-content: ${alignment};
			padding:20px;
			${getBackgroundCSS(cardsFather)}
			
			}
			${plan}{
			max-width: 350px;
			min-height: 400px;
			height: auto;
			marginTop:${gaps}; 
			${getBorderBoxCSS(cardBorder)}
			}
		  
		  ${container} {
			color: #fff;
			display: grid;
			width: ${CardsContainerStyle?.width};
			grid-template-columns: repeat(${layout?.desktop || 3}, 1fr);
		    gap: ${gaps};
			
		  }
		  ${planTitlt}{
		  ${getColorsCSS(titleColor)}
		  text-align:${titleAlign};
		  
		  }
		  ${planTitlt}:after{
		  border-style: solid;
         border-width: 40px 300px 0 0;
          border-color: ${titleColor.bgType === "solid" ? titleColor.bg : titleColor.gradient} transparent transparent;
		  
		  }
		  
		  ${planCost}{
		  ${getColorsCSS(priceColor)}
		   text-align:${priceAlign};
          }
		   ${plan}{
		   ${getColorsCSS(featuresColor)}
		   
		   }
		   ${selectPanel}{
		   
		  border-top: 1px solid rgba(0, 0, 0, 0.2);
		   
		   }
		  ${button}{
		   ${getColorsCSS(buttonColor)}
		 padding: ${buttonPadding?.top} ${buttonPadding?.right} ${buttonPadding?.bottom} ${buttonPadding?.left};
		border-top-left-radius:${buttonRadius?.top};
		border-top-right-radius: ${buttonRadius?.right};
		border-bottom-left-radius:${buttonRadius?.bottom};
		border-bottom-right-radius: ${buttonRadius?.left};

		
		  
		  }
		${planFeatures} i{
		color: ${iconColor};
		font-size: ${iconSize};
		
		}






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