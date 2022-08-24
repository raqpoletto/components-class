import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

function BeerModal({ isOpen, onClose, name, tagline, description }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Name: {/* name */}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <Text>
              <b>Tagline:</b> {/* tagline */}
            </Text>
            <Text>
              {" "}
              <b>Description:</b> {/* description */}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              backgroundColor={"red.400"}
              mr={3}
              onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BeerModal;
