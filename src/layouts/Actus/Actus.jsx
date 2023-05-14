import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from "@chakra-ui/react";
import "./Actus.css";

function Actus(props) {
  return (
    <>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={props.image}
        alt="Image actu"
      />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {props.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{props.actu}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Actus;
