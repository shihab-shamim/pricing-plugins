import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Cards from "../Common/Cards";

const Edit = (props) => {
  const { attributes, setAttributes, clientId ,device} = props;
  const { cards } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes ,device}} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        
        {/* <div>
               
               {
                cards.map((card,index)=><Cards key={index} card={card}/>)
               }
        </div> */}
        <Cards cards={cards} attributes={attributes} setAttributes={setAttributes}/>
        
      </div>
    </>
  );
};
// export default Edit;
// export default withSelect((select) => {
//   const { getDeviceType } = select('core/editor');
//   return {
//     device: getDeviceType()?.toLowerCase(),
//   };
// })(Edit);
export default withSelect((select)=>{
  const { getDeviceType } = select('core/editor');
  return{
    device: getDeviceType()?.toLowerCase(),
  }
  
})(Edit)

