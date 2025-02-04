import { __ } from '@wordpress/i18n';

import { PanelBody, __experimentalInputControl as InputControl, __experimentalNumberControl as NumberControl, __experimentalUnitControl as UnitControl, TextControl, FormToggle} from '@wordpress/components';
import { updateData } from '../../../../utils/functions';
import { Flex } from '@wordpress/components';
import {  Device,Label } from '../../../../../../bpl-tools/Components';



const General = ({ attributes, setAttributes,device }) => {
  const { cards ,layout,gaps} = attributes;

 
  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Plans', 'b-blocks')} initialOpen={false}>

    {
      cards.map((card,index)=><PanelBody key={index} className='bPlPanelBody' title={__(`Plan(${card?.title})`, 'b-blocks')} initialOpen={false}>

<InputControl
	label={`Title (${card?.title})`}
	labelPosition="top"
	value={card?.title}
	type="text"
	
	onChange={ ( value ) => {
    setAttributes({ cards: cards.map((card, i) => i === index? {...card, title: updateData(card?.title, value) } : card) });
  } }
/>
<Flex style={{marginTop:"3px"}} justify='center'>
<NumberControl
type='text'
style={{width:"50px"}}
label={`Price (${card?.title})`}
	onChange={ (value)=>{
    setAttributes({ cards: cards.map((card, i) => i === index? {...card, price: updateData(card?.price, value) } : card) });
  } }
	isDragEnabled
	isShiftStepEnabled
	shiftStep={ 1}
	step={1}
	value={card.price }
/>
<InputControl
	label={`payment type (${card?.title})`}
	labelPosition="top"
	value={card?.type}
	type="text"
	
	onChange={ ( value ) => {
    setAttributes({ cards: cards.map((card, i) => i === index? {...card, type: updateData(card?.type, value) } : card) });
  } }
/>

</Flex>

     <Label>Features List</Label>
     {
   card?.features?.map((feature, i) => (
    <div key={index} className="feature-item">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>

      <InputControl
        label={`Feature-${i + 1} (${card?.title})`}
        labelPosition="top"
        value={feature}
        placeholder='feature...'
        onChange={(value) => {
          const newCards = [...cards];
          newCards[index] = {
              ...newCards[index], 
              features: newCards[index].features.map((feature, featureIndex) => 
                  featureIndex === i ? value : feature
              )
          };
          setAttributes({ cards: newCards });
      }}
      />
      <button
      title='Delete Feature'
      style={{
        height:"30px",
        marginTop: '25px', 
        cursor:'pointer',
      }}
        type="button"
        onClick={() => {
          
          const updatedFeatures = card.features.filter((_, i) => i !== index);

         
          const updatedCard = { ...card, features: updatedFeatures };

       
          setAttributes({
            cards: cards.map((c, i) => (i === cards.indexOf(card) ? updatedCard : c)),
          });
        }}
      >
      <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M292.7 840h438.6l24.2-512h-487z"></path><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path></svg>
      </button>

      </div>
    </div>
  ))
}

<button
style={{
  backgroundColor: '#4CAF50', 
  color: 'white',  
  padding: '4px 6px',  
  border: 'none',  
  borderRadius: '5px',  
  fontSize: '14px',  
  cursor: 'pointer',  
  transition: 'background-color 0.3s ease', 
  marginTop: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',   
}}
  type="button"
  onClick={() => {
    const newFeature = "New Feature";  
    const updatedFeatures = [...card.features, newFeature];  
    const updatedCard = { ...card, features: updatedFeatures };  

    setAttributes({
      cards: cards.map((c, i) => (i === cards.indexOf(card) ? updatedCard : c)),
    });
  }}
>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.515,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 S16.411,16,12,16z"></path><path d="M13 6L11 6 11 9 8 9 8 11 11 11 11 14 13 14 13 11 16 11 16 9 13 9z"></path></svg>
Add Feature
</button>

   

        <InputControl
        label={`Button (${card?.title})`}
        value={card?.buttonText}
        onChange={(value)=>{
          setAttributes({ cards: cards.map((card, i) => i === index? {...card, buttonText: updateData(card?.buttonText, value) } : card) });
      }}
        />
        <small>Button hidden when empty</small>

        {card?.buttonText &&  <>
       <Label>Button Link</Label>
  <TextControl value={card?.link} onChange={(value)=>{
    setAttributes({ cards: cards.map((card, i) => i === index? {...card, link: value } : card) });
  }}></TextControl>
       </>}

<Label>Plan:</Label>
    <Flex style={{marginTop:"4px" ,width:"100%"}} justify='center' align='center'>
    <button
  type="button"
  title='Delete Card'
  style={{
    backgroundColor: "#FF4D4D", 
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',   
  }}
  onClick={() => {
    if (cards.length > 1) {
      setAttributes({ cards: cards.filter((_, i) => i !== index) });
    }
  }}
>


Delete Plan
</button>
<button
title='Copy Card'
  type="button"
  style={{
    backgroundColor: "#007BFF", 
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    color: "white",
  }}
  onClick={() => {
    const newCards = [...cards];
    const newCard = { ...cards[index] };
    newCards.splice(index + 1, 0, newCard); 
    setAttributes({ cards: newCards });
  }}
>
Duplicate plan
</button>
    </Flex>


<Label>Popular Plan  <FormToggle
   
   checked={ card?.isPopular }
   onChange={ () => {
    setAttributes({ cards: cards.map((card, i) => i === index? {...card, isPopular: !card?.isPopular } : card) });
  
  } }
 /></Label>
   


      </PanelBody>)
    }
   
      
   <button
  type="button"
  style={{
    backgroundColor: "#4CAF50", 
    color: "#fff",
    padding: "4px 6px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    
  }}
  onClick={() => {
    setAttributes({
      cards: [
        ...cards,
        {
          title: "New Plan",
          price: "$0",
          type: "/month",
          buttonText: "Select Plan",
          features: [
            "Feature 1",
            "Feature 2",
            "Feature 3",
            "Feature 4",
            "Feature 5",
            "Feature 6",
          ],
        },
      ],
    });
  }}
>
 Add Plan
</button>




      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Plans Layouts', 'b-blocks')} initialOpen={false}>


<Flex justify='space-between' alignItems='center'>
<Label>Columns</Label>

<Device/>  
  
  </Flex>      
        <NumberControl
	onChange={ e =>{
    setAttributes({ layout: {...layout, [device]: e } });
  }}
	isDragEnabled
	isShiftStepEnabled
	shiftStep={ 1 }
	step={1}
  min={1}
  max={4}
	value={ layout[device] }
/>
         <small>Choose a layout for your cards</small>

<Label>Gaps</Label>
         <UnitControl
onChange={(value)=>{
  setAttributes({gaps:value})
}}
	onUnitChange={ () => console.log("new unit") }
	isUnitSelectTabbable
	value={gaps} 
  min={0}
  />

</PanelBody>
   
   </>
  )
}

export default General