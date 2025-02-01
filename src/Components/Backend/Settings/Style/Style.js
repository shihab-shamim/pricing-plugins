import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl ,__experimentalBorderBoxControl  as BorderBoxControl 
} from "@wordpress/components";
import { Flex ,ButtonGroup,Button} from "@wordpress/components";
import {  ColorsControl, Label, Typography } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { CardsContainerStyle,titleColor,titleAlign,titleTypo,priceColor,priceAlign,priceTypo,featuresColor,featureTypo,buttonColor,ButtonTypo} = attributes;


const handleAlignment =(value)=>{

  setAttributes({titleAlign:value})
}

const handleAlignmentp =(value)=>{

  setAttributes({priceAlign:value})
}
  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Cards Container style", "b-blocks")}
        initialOpen={false}
      >
       <Flex gap='15px'>
       <UnitControl
        label="width"
        value={CardsContainerStyle?.width}
        onChange={(value)=>{
          setAttributes({CardsContainerStyle:{...CardsContainerStyle,width:value}})
        }}
        />
         <UnitControl
        label="height"
        value={CardsContainerStyle?.height}
        onChange={(value)=>{
          setAttributes({CardsContainerStyle:{...CardsContainerStyle,height:value}})
        }}
        />
       </Flex>
        

      </PanelBody>

      <PanelBody
      className="bPlPanelBody"
      title={__("Cards Title", "b-blocks")}
      initialOpen={false}
      >



                <ColorsControl value={titleColor} onChange={(value)=>{
                
                 setAttributes({titleColor:value})
               }}/>

               <Label>Text Alignment</Label>
<ButtonGroup>
	<Button isPrimary={titleAlign==="left"}   onClick={()=>handleAlignment('left')}>Left</Button>
	<Button isPrimary={titleAlign==="center"}     onClick={()=>handleAlignment('center')}>Center</Button>
	<Button isPrimary={titleAlign==="right"}    onClick={()=>handleAlignment('right')}>Right</Button>
</ButtonGroup>

         <Typography
           value={titleTypo}
          onChange={(value)=>setAttributes({titleTypo:value})}/>
      </PanelBody>

      <PanelBody
      className="bPlPanelBody"
      title={__("Cards Price", "b-blocks")}
      initialOpen={false}
      >



                <ColorsControl value={priceColor} onChange={(value)=>{
                
                 setAttributes({priceColor:value})
               }}/>

               <Label>Text Alignment</Label>
<ButtonGroup>
	<Button isPrimary={priceAlign==="left"}   onClick={()=>handleAlignmentp('left')}>Left</Button>
	<Button isPrimary={priceAlign==="center"}     onClick={()=>handleAlignmentp('center')}>Center</Button>
	<Button isPrimary={priceAlign==="right"}    onClick={()=>handleAlignmentp('right')}>Right</Button>
</ButtonGroup>

         <Typography
           value={priceTypo}
          onChange={(value)=>setAttributes({priceTypo:value})}/>
      </PanelBody>



      <PanelBody
      className="bPlPanelBody"
      title={__("Cards Features", "b-blocks")}
      initialOpen={false}
      >



                <ColorsControl value={featuresColor} onChange={(value)=>{
                
                 setAttributes({featuresColor:value})
               }}/>

            

         <Typography
           value={featureTypo}
          onChange={(value)=>setAttributes({featureTypo:value})}/>

      </PanelBody>



      <PanelBody
      className="bPlPanelBody"
      title={__("Cards Button", "b-blocks")}
      initialOpen={false}
      >

        {/* <BorderBoxControl
            
            label={ __( 'Borders' ) }
            onChange={ 'onChange' }
        /> */}


                <ColorsControl value={buttonColor} onChange={(value)=>{
                
                 setAttributes({buttonColor:value})
               }}/>

            

         <Typography
           value={ButtonTypo}
          onChange={(value)=>setAttributes({ButtonTypo:value})}/>


      </PanelBody>
    </>
  );
};

export default Style;
