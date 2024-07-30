import { useHubspotForm } from "next-hubspot";
import { Box, Text } from "@mantine/core";

export const Hubspot = () => {
  useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID as string,
    formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_2 as string,
    target: "#hubspot-form-wrapper",
  });

  return (
    <Box>
      <Box my="lg">
        <Text fw="bold" mb="sm">
          Stay Informed
        </Text>
        <Text mb="xl">
          If you&apos;re interested in mining on PTN, please fill out the form below for updates. We’ll keep you informed about all developments—your financial journey starts here!
        </Text>
      </Box>

      <div id="hubspot-form-wrapper" />
    </Box>
  );
};
