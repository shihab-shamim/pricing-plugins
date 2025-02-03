import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";

const Cards = ({ cards, isShow, setAttributes, attributes }) => {
  const icon = attributes?.icon || "";

  return (
    <div className="fatherofcards">
     
      <div className="snip1404">
        {cards.map((card, index) => (
          <div key={index} className="plan">
          { card?.isPopular && <div className="popular">
      popular
     </div>}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <header>
                  {isShow && <h4 className="plan-title">{card?.title}</h4>}
                  {isShow || (
                    <RichText
                      placeholder="title..."
                      tagName="h4"
                      onChange={(value) => {
                        setAttributes({
                          cards: cards.map((card, i) =>
                            i === index
                              ? {
                                  ...card,
                                  title: updateData(card?.title, value),
                                }
                              : card
                          ),
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
                        placeholder="price..."
                        tagName="span"
                        onChange={(value) => {
                          setAttributes({
                            cards: cards.map((card, i) =>
                              i === index
                                ? {
                                    ...card,
                                    price: updateData(card?.price, value),
                                  }
                                : card
                            ),
                          });
                        }}
                        className="plan-price"
                        value={card?.price}
                      />
                      <RichText
                        placeholder="type..."
                        tagName="span"
                        onChange={(value) => {
                          setAttributes({
                            cards: cards.map((card, i) =>
                              i === index
                                ? {
                                    ...card,
                                    type: updateData(card?.type, value),
                                  }
                                : card
                            ),
                          });
                        }}
                        className="plan-type"
                        value={card?.type}
                      />
                    </div>
                  )}
                </header>

                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "200px",
                    alignItems: "flex-start",
                    gap: "5px",
                    flexGrow: 1,
                    paddingLeft: "10px",
                  }}
                  className="plan-features"
                >
                  {isShow &&
                    card?.features.map((feature, index) => (
                      <li
                        className="feature"
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          width: "100%",
                        }}
                      >
                        <span className="icons" dangerouslySetInnerHTML={{ __html: icon }} />{" "}
                        {feature}
                      </li>
                    ))}
                  {isShow ||
                    card?.features?.map((feature, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          width: "100%",
                        }}
                      >
                        <div
                          className="icons"
                          dangerouslySetInnerHTML={{
                            __html: `${icon}`,
                          }}
                        />
                        <RichText
                          className="feature"
                          tagName="span"
                          value={feature}
                          placeholder="feature..."
                          onChange={(value) => {
                            const newCards = [...cards];
                            newCards[index] = {
                              ...newCards[index],
                              features: newCards[index].features.map(
                                (feature, featureIndex) =>
                                  featureIndex === i ? value : feature
                              ),
                            };
                            setAttributes({ cards: newCards });
                          }}
                        />
                      </div>
                    ))}
                </ul>
              </div>

              <div
                className="panelSelect"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {card?.buttonText && (
                  <div className="plan-select">
                    {isShow && (
                      <a
                        href={`${card?.link}`}
                        target="_fhfghfgh"
                        className="select-plan"
                      >
                        {card?.buttonText}
                      </a>
                    )}
                    {isShow || (
                      <a className="select-plan">{card?.buttonText}</a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
