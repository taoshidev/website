import { useHubspotForm } from "next-hubspot";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Portal,
} from "@chakra-ui/react";

export const Hubspot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID as string,
    formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID as string,
    target: "#hubspot-form-wrapper",
  });

  return (
    <div>
      <div id="hubspot-form-wrapper" />
    </div>
  );
};
