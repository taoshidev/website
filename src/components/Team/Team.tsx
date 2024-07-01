import {
  Box,
  Grid,
  List,
  Group,
  Title,
  Text,
  Avatar,
  Card,
  ActionIcon,
} from "@mantine/core";

import { IconBrandTwitter } from "@tabler/icons-react";

import ken from "@/assets/team/ken.jpg";
import jordan from "@/assets/team/jordan.jpg";
import arrash from "@/assets/team/arrash.jpg";
import luke from "@/assets/team/luke.jpg";
import thomas from "@/assets/team/thomas.jpg";
import michael from "@/assets/team/michael.jpg";
import lucas from "@/assets/team/lucas.jpg";
import tom from "@/assets/team/tom.jpg";
import sam from "@/assets/team/sam.jpg";
import diego from "@/assets/team/diego.jpg";
import mike from "@/assets/team/mike.jpg";
import mitra from "@/assets/team/mitra.png";

export const team = [
  {
    name: "Arrash Yasavolian",
    twitter: "https://twitter.com/0xarrash",
    image: arrash,
    position: "Chief Executive Officer",
    previously: ["LinkedIn", "TARVIS Labs"],
  },
  {
    name: "Mitra Ehsanipour",
    image: mitra,
    position: "Chief Financial Officer",
    previously: ["25+ years of CPA experience"],
  },
  {
    name: "Michael Brown",
    image: michael,
    position: "Software Engineering Architect",
    previously: ["NASA", "TARVIS Labs"],
  },
  {
    name: "Mike Galligan",
    image: mike,
    position: "Sr. Director of Strategy",
    previously: ["KMR Systems", "3+ years in crypto"],
  },
  {
    name: "Jordan Bonilla",
    image: jordan,
    position: "Sr Staff Software Engineer",
    previously: ["Tesla", "LinkedIn", "B.S. Comp Sci Caltech"],
  },
  {
    name: "Kenneth Nicholson",
    twitter: "https://twitter.com/Raleigh_CA",
    image: ken,
    position: "Growth Engineer",
    previously: ["Vexchange", "The Graph", "7+ years in crypto"],
  },
  {
    name: "Luke Nosek",
    twitter: "https://twitter.com/Lukes_Trades",
    image: luke,
    position: "Marketing & Growth Coordinator",
    previously: [
      "B.B.A in Marketing from University of Wisconsin",
      "3+ years in crypto",
    ],
  },
  {
    name: "Thomas Dougherty",
    image: thomas,
    position: "Staff ML Scientist",
    previously: ["PhD Stanford University"],
  },
  {
    name: "Lucas Phan",
    image: lucas,
    position: "Sr Staff Full-Stack Software Engineer",
    previously: [
      "Squadformers",
      "Bitwise Industries",
      "CSUF - Professor",
      "Executive MBA - Management Information Systems",
    ],
  },
  {
    name: "Tom Alperin",
    image: tom,
    position: "Staff Full Stack Software Engineer",
    previously: ["Bitwise Industries"],
  },
  {
    name: "Diego Arenas",
    image: diego,
    position: "Software Engineer",
    previously: ["B.S. in Math with Computer Science - MIT", "B.B.A. in Business Analytics - MIT"],
  },
  {
    name: "Samuel Li",
    image: sam,
    position: "Software Engineer",
    previously: ["AMD", "BSE Duke University"],
  },

];

export const Team = () => {
  return (
    <Box id="team" pt={48} mt={-48} mb={100}>
      <Box mb="xl" ta='center'>
        <Text fw="bold" mb="sm" size="sm">
          Meet the team
        </Text>
        <Title order={3}>Led By Domain Experts</Title>
      </Box>

      <Grid mb="xl" gutter="lg">
        {team.map((member) => (
          <Grid.Col key={member.name} span={{ sm: 4 }}>
            <Card h="100%" withBorder>
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
                  <Group align="center" justify="space-between">
                    <Text fw="bold" c="orange" size="sm">
                      {member.name}
                    </Text>
                    {member.twitter && (
                      <ActionIcon
                        component="a"
                        target="_blank"
                        radius={0}
                        href={member.twitter}
                        variant="subtle"
                        size="xs"
                        aria-label="twitter"
                      >
                        <IconBrandTwitter stroke={1.5} />
                      </ActionIcon>
                    )}
                  </Group>
                  <Text mb="xs" size="xs">
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
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
