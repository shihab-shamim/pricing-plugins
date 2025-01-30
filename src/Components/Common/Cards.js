import {  RichText } from '@wordpress/block-editor';
import { updateData } from '../../utils/functions';

const Cards = ({cards,isShow,setAttributes,attributes}) => {
    return (
        <div className="snip1404">
  {/* <div className="plan">
    <header>
      <h4 className="plan-title">
        {title}
      </h4>
      <div className="plan-cost"><span className="plan-price">{price}</span><span className="plan-type">{type}</span></div>
    </header>
    <ul className="plan-features">
      <li><i className="ion-checkmark" /> 5GB Linux Web Space</li>
      {
        features.map((feature,index)=><li key={index}><i className="ion-checkmark" /> {feature}</li>)
      }
      
    </ul>
    <div className="plan-select"><a href="">Select Plan</a></div>
  </div> */}
  {
    cards.map((card,index)=> <div key={index} className="plan">
  <div style={{
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "space-between", 
  height: "100%", 
  border: "1px solid red", 
  padding: "10px", 
  gap: "10px"
}}>
  <div style={{
    border: "1px solid red", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between", 
    flexGrow: 1,
    padding: "10px"
  }}>
    <header>
      {isShow && (
        <h4 className="plan-title">
          {card?.title}
        </h4>
      )}
      {isShow || (
        <RichText 
          placeholder='title...' 
          tagName='h4'  
          onChange={(value) => {
            setAttributes({ 
              cards: cards.map((card, i) => 
                i === index ? {...card, title: updateData(card?.title, value)} : card 
              ) 
            });
          }} 
          className="plan-title" 
          value={card?.title}
        />
      )}

      {isShow && (
        <div className="plan-cost">
          <span className="plan-price">{card?.price}</span>
          <span className="plan-type">{card?.type}</span>
        </div>
      )}
      {isShow || (
        <div className="plan-cost">
          <RichText 
            placeholder='price...' 
            tagName='span' 
            onChange={(value) => {
              setAttributes({ 
                cards: cards.map((card, i) => 
                  i === index ? {...card, price: updateData(card?.price, value)} : card 
                ) 
              });
            }} 
            className="plan-price" 
            value={card?.price}
          />
          <RichText 
            placeholder='type...' 
            tagName='span' 
            onChange={(value) => {
              setAttributes({ 
                cards: cards.map((card, i) => 
                  i === index ? {...card, type: updateData(card?.type, value)} : card 
                ) 
              });
            }} 
            className="plan-type" 
            value={card?.type}
          />
        </div>
      )}
    </header>

    <ul style={{
      display: "flex", 
      flexDirection: "column", 
      minHeight: "200px", 
      alignItems: "flex-start",  // Ensures that the list items stay aligned properly
      gap: "5px", 
      flexGrow: 1
    }} className="plan-features">
      {isShow && card?.features.map((feature, index) => (
        <li key={index} style={{
          display: "flex", 
          alignItems: "center", 
          gap: "5px",
          width: "100%" // Ensure the list items take full width to avoid overflow
        }}>
          <i className="ion-checkmark" /> {feature}
        </li>
      ))}
      {isShow || card?.features?.map((feature, i) => (
        <div key={i} style={{
          display: "flex", 
          alignItems: "center", 
          gap: "5px",
          width: "100%" // Ensures the feature div takes the full width inside the list
        }}>
          <i className="ion-checkmark"></i>
          <RichText
            tagName="span"  
            value={feature}
            placeholder="feature..."
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
        </div>
      ))}
    </ul>
  </div>

  <div style={{
    border: "1px solid red", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    padding: "10px"
  }}>
    {card?.buttonText && <div className="plan-select"><a className='select-plan'>{card?.buttonText}</a></div>}
  </div>
</div>


    
  </div>)
  }

 
</div>
    );
};

export default Cards;