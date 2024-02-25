import { Box, Grid, List, Group, Title, Text } from "@mantine/core";
import Avatar from "boring-avatars";
import { orange } from "@/theme/colors";

const team = [
  {
    name: "Arrash Yasavolian",
    position: "CEO",
    previously: ["LinkedIn", "Tarvis Labs"],
  },
  {
    name: "Michael Brown",
    position: "CTO",
    previously: ["NASA", "Tarvis Labs"],
  },
  {
    name: "Jordan Bonilla",
    position: "Sr Staff SWE",
    previously: ["Tesla", "LinkedIn", "Microsoft"],
  },
  {
    name: "Kenneth Nicholson",
    position: "Growth Engineer",
    previously: ["Vexchange", "The Graph"],
  },
  {
    name: "Luke Nosek",
    position: "Marketing and Growth Coordinator",
    previously: ["Univ of Wisconsin Madison"],
  },
  {
    name: "Thomas Dougherty",
    position: "Staff ML Scientist",
    previously: ["PhD Stanford University"],
  },
];

export const Team = () => {
  return (
    <Box>
      <Box mb="xl">
        <Text fw="bold" mb="sm">
          Meet the team
        </Text>
        <Title order={3}>Led By Domain Experts</Title>
      </Box>

      <Grid mb="xl" gutter="xl">
        {team.map((member) => (
          <Grid.Col key={member.name} span={4}>
            <Group align="flex-start">
              <Box>
                <Avatar
                  square
                  size={50}
                  name={member.name}
                  variant="pixel"
                  colors={["#000000", ...orange]}
                />
              </Box>
              <Box flex="1">
                <Text size="sm" fw="bold">
                  {member.name}
                </Text>
                <Text mb="xs" c="orange" size="xs">
                  {member.position}
                </Text>
                <Text size="xs" fw="bold">
                  Previously
                </Text>
                <List size="xs">
                  {member.previously.map((item) => (
                    <List.Item key={item}>{item}</List.Item>
                  ))}
                </List>
              </Box>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
