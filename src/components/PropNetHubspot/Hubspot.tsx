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
          If you&apos;re an algorithmic trader interested in mining on our new
          subnet, simply fill out the form below. We&apos;ll keep you in the
          loop with the latest updates, you&apos;ll be among the first to access
          the full power of the subnet. Your journey in the future of trading
          begins here!
        </Text>
      </Box>

      <div id="hubspot-form-wrapper" />
    </Box>
  );
};
