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

export const team = [
	{
		name: "Arrash Yasavolian",
		twitter: "https://twitter.com/0xarrash",
		image: arrash,
		position: "Chief Executive Officer",
		previously: ["LinkedIn", "TARVIS Labs"],
	},
	{
		name: "Michael Brown",
		image: michael,
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
		twitter: "https://twitter.com/Raleigh_CA",
		image: ken,
		position: "Growth Engineer",
		previously: ["Vexchange", "The Graph", "7+ years in Crypto"],
	},
	{
		name: "Luke Nosek",
		twitter: "https://twitter.com/Lukes_Trades",
		image: luke,
		position: "Marketing & Growth Coordinator",
		previously: [
			"B.B.A in Marketing from University of Wisconsin",
			"3+ years in Crypto",
		],
	},
	{
		name: "Thomas Dougherty",
		image: thomas,
		position: "Staff ML Scientist",
		previously: ["PhD Stanford University"],
	},
];

export const Team = () => {
	return (
		<Box id="team" pt={48} mt={-48} mb={100}>
			<Box mb="xl">
				<Text fw="bold" mb="sm" size="sm">
					Meet the team
				</Text>
				<Title order={3}>Led By Domain Experts</Title>
			</Box>

			<Grid mb="xl" gutter="lg" grow>
				{team.map((member) => (
					<Grid.Col key={member.name} span={{ sm: 4 }}>
						<Card h="100%" style={{ border: "1px dashed black" }}>
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
