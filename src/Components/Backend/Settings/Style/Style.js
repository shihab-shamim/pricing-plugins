import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { Flex } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors ,CardsContainerStyle} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



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
    </>
  );
};

export default Style;
