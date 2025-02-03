import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
import { Flex, ButtonGroup, Button } from "@wordpress/components";
import {
  Background,
  BoxControl,
  ColorControl,
  ColorsControl,
  IconLibrary,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    CardsContainerStyle,
    titleColor,
    titleAlign,
    titleTypo,
    priceColor,
    priceAlign,
    priceTypo,
    featuresColor,
    featureTypo,
    buttonColor,
    ButtonTypo,
    buttonPadding,
    buttonRadius,
    iconColor,
    iconSize,
    cardBorder,
    cardsFather,
    cardShadow,
    cardRadius,
    icon,
  } = attributes;
  console.log(icon);
  const handleAlignment = (value) => {
    setAttributes({ titleAlign: value });
  };

  const handleAlignmentp = (value) => {
    setAttributes({ priceAlign: value });
  };
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Cards Style", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label="width"
          value={CardsContainerStyle?.width}
          onChange={(value) => {
            setAttributes({
              CardsContainerStyle: { ...CardsContainerStyle, width: value },
            });
          }}
        />
        <UnitControl
          label="height"
          value={CardsContainerStyle?.height}
          onChange={(value) => {
            setAttributes({
              CardsContainerStyle: { ...CardsContainerStyle, height: value },
            });
          }}
        />

        <BorderBoxControl
          label="Border "
          value={cardBorder}
          onChange={(value) => {
            setAttributes({ cardBorder: value });
          }}
        />

        <Background
          label="Background Color"
          value={cardsFather}
          onChange={(value) => {
            setAttributes({ cardsFather: value });
          }}
        />

        <ShadowControl
          label="Card Shadow"
          value={cardShadow}
          onChange={(value) => {
            setAttributes({ cardShadow: value });
          }}
        />

        <BoxControl
          label="Border Radius"
          values={cardRadius}
          onChange={(value) => {
            setAttributes({ cardRadius: value });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card Title", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={titleColor}
          onChange={(value) => {
            setAttributes({ titleColor: value });
          }}
        />

        <Label>Text Alignment</Label>
        <ButtonGroup>
          <Button
            isPrimary={titleAlign === "left"}
            onClick={() => handleAlignment("left")}
          >
            Left
          </Button>
          <Button
            isPrimary={titleAlign === "center"}
            onClick={() => handleAlignment("center")}
          >
            Center
          </Button>
          <Button
            isPrimary={titleAlign === "right"}
            onClick={() => handleAlignment("right")}
          >
            Right
          </Button>
        </ButtonGroup>

        <Typography
          value={titleTypo}
          onChange={(value) => setAttributes({ titleTypo: value })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card Price", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={priceColor}
          onChange={(value) => {
            setAttributes({ priceColor: value });
          }}
        />

        <Label>Text Alignment</Label>
        <ButtonGroup>
          <Button
            isPrimary={priceAlign === "left"}
            onClick={() => handleAlignmentp("left")}
          >
            Left
          </Button>
          <Button
            isPrimary={priceAlign === "center"}
            onClick={() => handleAlignmentp("center")}
          >
            Center
          </Button>
          <Button
            isPrimary={priceAlign === "right"}
            onClick={() => handleAlignmentp("right")}
          >
            Right
          </Button>
        </ButtonGroup>

        <Typography
          value={priceTypo}
          onChange={(value) => setAttributes({ priceTypo: value })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card Features", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={featuresColor}
          onChange={(value) => {
            setAttributes({ featuresColor: value });
          }}
        />

        <Typography
          value={featureTypo}
          onChange={(value) => setAttributes({ featureTypo: value })}
        />

        <ColorControl
          label="Icon Color"
          value={iconColor}
          onChange={(value) => {
            setAttributes({ iconColor: value });
          }}
        />

        <UnitControl
          label="Icon Size"
          value={iconSize}
          onChange={(value) => {
            setAttributes({ iconSize: value });
          }}
        />

        <IconLibrary
          value={icon}
          onChange={(value) => {
            setAttributes({ icon: value });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card Button", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={buttonColor}
          onChange={(value) => {
            setAttributes({ buttonColor: value });
          }}
        />

        <Typography
          value={ButtonTypo}
          onChange={(value) => setAttributes({ ButtonTypo: value })}
        />

        <BoxControl
          label="paddings"
          values={buttonPadding}
          onChange={(value) => {
            setAttributes({ buttonPadding: value });
          }}
        />

        <BoxControl
          label="Border Radius"
          values={buttonRadius}
          onChange={(value) => {
            setAttributes({ buttonRadius: value });
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
