"use client";

import NextImage from "next/image";

import {
	Flex,
	Box,
	Text,
	Image,
	Center,
	Group,
	Stack,
	Anchor,
	Card,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Partners } from "@/components/Partners";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { Team } from "@/components/Team";
import { Logo } from "@/components/Logo";

import logo from "@/assets/logo.svg";
import bittensor from "@/assets/bittensor.svg";
import intraday from "@/assets/intraday.svg";

const ctas = [
	{
		event: "ptn",
		text: "Get Started",
		href: "/ptn",
		isExternal: false,
	},
	{
		event: "docs",
		text: "Documentation",
		href: "https://github.com/taoshidev/proprietary-trading-network",
		isExternal: true,
	},
];

export default function Home() {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<Flex direction="column" justify="center">
			<Box mb={100}>
				<Box mb={100}>
					{!isMobile && <Logo />}
					<Hero
						ctas={ctas}
						copy="Delivering World Class Quant Trading Signals Through the Power of Decentralized AI"
					/>
				</Box>

				<Statistics />

				<Stack gap={100}>
					<Group w="100%" gap="xl">
						<Box maw="600px">
							<Text fw="bold" mb="sm">
								Taoshi
							</Text>

							<Text>
								At Taoshi, we&apos;re pioneering the Bittensor revolution with a
								keen focus on the future of trading financial markets. We craft
								dynamic subnetworks, where decentralized AI and machine learning
								power the world&apos;s most complete trading signals across
								various asset classes. By integrating cutting-edge AI & machine
								learning technology with the blockchain, we provide miners,
								traders, and developers with a fertile ground for innovation,
								where their contributions yield tangible, lucrative rewards. As
								a cornerstone of the Bittensor ecosystem, we&apos;re not just
								participating in the blockchain revolution; we&apos;re leading
								it by delivering sophisticated tools and insights that empower
								users to make informed decisions in financial markets.
							</Text>
						</Box>
						<Center flex="1" display={{ base: "none", sm: "flex" }}>
							<Image
								component={NextImage}
								width={200}
								height={200}
								src={logo}
								alt="taoshi logo"
							/>
						</Center>
					</Group>

					<Card p="xl" style={{ border: "1px dashed black" }}>
						<Group w="100%" gap="xl">
							<Center flex="1" display={{ base: "none", sm: "flex" }}>
								<Image
									component={NextImage}
									width={200}
									height={200}
									src={bittensor}
									alt="Open Source Modeling"
								/>
							</Center>
							<Box maw="600px">
								<Text fw="bold" mb="sm">
									Bittensor
								</Text>

								<Text>
									Bittensor is not just a blockchain; it&apos;s a groundbreaking
									network that fosters decentralized intelligence, where a
									consensus mechanism rewards the creation and sharing of AI
									models. This neural network of nodes, maintained by
									independent miners, promotes a cooperative space for AI
									services to be developed and utilized worldwide. At Taoshi, we
									harness Bittensor&apos;s capabilities to build specialized
									subnetworks, like our{" "}
									<Anchor href="/ptn">Proprietary Trading Network</Anchor>{" "}
									(PTN), merging AI with blockchain for secure, transparent, and
									innovative applications. As part of the Bittensor ecosystem,
									we contribute to a decentralized AI marketplace, powered by
									the Bittensor token ($TAO), to ensure the seamless exchange of
									data and intelligence. Taoshi serves as a gateway to this new
									era of accessible, incentivized intelligence, where every
									contribution to the network&apos;s growth is valued and
									rewarded.
								</Text>
							</Box>
						</Group>
					</Card>

					<Group w="100%" gap="xl">
						<Box maw="600px">
							<Text fw="bold" mb="sm">
								Our Mission
							</Text>

							<Text>
								At Taoshi, our mission is two-fold. Firstly, we aim to
								democratize access to sophisticated quant signals, traditionally
								limited to industry elites. Secondly, we strive to demystify the
								world of financial markets, making it accessible to
								everyone—from AI enthusiasts, to data scientists, to visionary
								entrepreneurs. We&apos;re dedicated to providing an intuitive,
								user-friendly environment that encourages exploration,
								innovation, and success within the Bittensor ecosystem. Join us
								at Taoshi, where we&apos;re not just participants in the
								blockchain space; we&apos;re trailblazers building a brighter,
								more informed, and decentralized future, one subnetwork at a
								time.
							</Text>
						</Box>
						<Center flex="1" display={{ base: "none", sm: "flex" }}>
							<Image
								component={NextImage}
								width={200}
								height={200}
								src={intraday}
								alt="Taoshi's Mission"
							/>
						</Center>
					</Group>
				</Stack>
			</Box>
			<Team />
			<Partners />
		</Flex>
	);
}
