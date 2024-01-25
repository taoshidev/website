import { useHubspotForm } from "next-hubspot";
import { Box, Text } from "@chakra-ui/react";
export const Hubspot = () => {
  useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID as string,
    formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID as string,
    target: "#hubspot-form-wrapper",
  });

  return (
    <Box>
      <Box mb="4">
        <Text fontWeight="bold" mb="3">
          Looking for Access to Subnet 8&apos;s Predictive Outputs?
        </Text>
        <Text>
          To be among the first to access the outputs of Subnet 8, fill out the
          form below to express your interest, and we&apos;ll keep you informed
          with the latest updates and access details as soon as they&apos;re
          available.
        </Text>
      </Box>

      <div id="hubspot-form-wrapper" />
    </Box>
  );
};
