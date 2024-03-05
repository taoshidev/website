import { Box, Grid, List, Group, Title, Text, Avatar } from "@mantine/core";

import ken from "@/app/assets/team/ken.jpg";
import jordan from "@/app/assets/team/jordan.jpg";
import arrash from "@/app/assets/team/arrash.jpg";
import luke from "@/app/assets/team/luke.jpg";

const team = [
  {
    name: "Arrash Yasavolian",
    image: arrash,
    position: "Chief Executive Officer",
    previously: ["LinkedIn", "TARVIS Labs"],
  },
  {
    name: "Michael Brown",
    image: null,
    position: "Chief Technology Officer",
    previously: ["NASA", "TARVIS Labs"],
  },
  {
    name: "Jordan Bonilla",
    image: jordan,
    position: "Sr Staff Software Engineer",
    previously: ["Tesla", "LinkedIn", "B.S. Comp Sci Caltech"],
  },
  {
    name: "Kenneth Nicholson",
    image: ken,
    position: "Growth Engineer",
    previously: ["Vexchange", "The Graph", "7+ years in Crypto"],
  },
  {
    name: "Luke Nosek",
    image: luke,
    position: "Marketing & Growth Coordinator",
    previously: [
      "B.B.A in Marketing from University of Wisconsin",
      "3+ years in Crypto",
    ],
  },
  {
    name: "Thomas Dougherty",
    image: null,
    position: "Staff ML Scientist",
    previously: ["PhD Stanford University"],
  },
];

export const Team = () => {
  return (
    <Box my={100}>
      <Box mb="xl">
        <Text fw="bold" mb="sm">
          Meet the team
        </Text>
        <Title order={3}>Led By Domain Experts</Title>
      </Box>

      <Grid mb="xl" gutter="xl" grow>
        {team.map((member) => (
          <Grid.Col key={member.name} span={6}>
            <Group align="flex-start" justify="center">
              <Box>
                <Avatar
                  size="lg"
                  alt={member.name}
                  radius={0}
                  src={member.image?.src}
                  variant="light"
                  color="orange"
                />
              </Box>
              <Box flex="1">
                <Text fw="bold" c="orange">
                  {member.name}
                </Text>
                <Text mb="xs" size="sm">
                  {member.position}
                </Text>
                <Text size="sm" fw="bold">
                  Experience / Education
                </Text>
                <List
                  size="xs"
                  icon={
                    <Text size="xs" c="orange">
                      -
                    </Text>
                  }
                >
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
