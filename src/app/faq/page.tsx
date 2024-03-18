"use client";

import NextImage from "next/image";

import {
  Box,
  Text,
  Center,
  Accordion,
  List,
  Image,
  Title,
  Anchor,
  Button,
  Divider,
} from "@mantine/core";

import brain from "@/assets/brain.svg";

const questions = [
  {
    title: "Taoshi",
    items: [
      {
        value: "Does Taoshi have a token?",
        description: "No. We want to provide as much value to Tao as possible.",
      },
      {
        value:
          "I am completely new, and want to run a miner or validator, where does one recommend I start?",
        description: (
          <Box>
            <Text size="sm" mb="sm">
              The current landscape of Bittensor isn&apos;t the most friendly to
              completely new non technical individuals. If you want to run a
              miner or validator it is recommended to learn some python.
            </Text>

            <Text size="sm">
              We have partners launching automated trading solutions built on
              PTN and they&apos;ll be onboarding customers.
            </Text>
          </Box>
        ),
      },
    ],
  },
  {
    title: "Proprietary Trading Network",
    items: [
      {
        value: "What are the goals of PTN?",
        description:
          "Miner provide trading strategies based on deep ML models.",
      },
      {
        value: "Will there be a dashboard where I can see the statistics?",
        description: "We provide an analysis on our Dashboard.",
      },
      {
        value: "What is the netuid of the PTN testnet?",
        description: "Currently PTN is on the testnet at netuid 3.",
      },
      {
        value: "What is roadmap for other assets?",
        description:
          "It is likely we will add other pairs. The decision is based off demand.",
      },
      {
        value: "Is a fee applied when taking profit?",
        description:
          "Fees are applied per positional level, not per-order basis (when you'd be taking profits).",
      },
      {
        value:
          "The PTN repo doesn't supply a base model like the old TSPS repo, does this mean I need to build my own model?",
        description:
          "It is true the current repo doesn't contain a base model. However you can alter the previous model to be a return based model and build a trading strategy on top.",
      },
      {
        value: "Is there any special reason for a 10x higher fee for crypto?",
        description:
          "Forex/indices fees are generally lower and based on swap fees. Crypto fees are based on typical exchange fees and funding rates. We recommend reviewing the fees of each market against exchanges, what they typically are, and how they compare against our rates. You'll see strong alignment.",
      },
      {
        value:
          "The registration fee will be dynamically adjusted, but the floor price is 5 TAO?",
        description:
          "Yes, the floor fee to register will be 5 TAO. We suspect only the best trading strategies will enter due to the nature of the subnet; therefore, we won't see continuous registration pressure. We expect the floor to be the price to enter at most times. Because of this, there needs to be a higher floor fee to disincentivize miners from joining & taking aggressive trading strategies to try and gain an advantage. The goal is to get miners who produce trading strategies with steady gains and proper R/R models.",
      },
      {
        value: "How often are the incentives granted to miners?",
        description:
          "Incentives are granted every 30 minutes, based on a 30-day rolling lookback period (can be found in the source code). ",
      },
      {
        value: "What are the benefits of having immunity?",
        description:
          "Immunity allows time for a miner to provide returns. A trader (miner) doesn't necessarily have trades on day 1, it may take a few days to have a viable trade, especially a set of trades to become competitive. The immunity period allows them to enter trades.",
      },
      {
        value: "What if miner drops to 0 during immunity - can it restart?",
        description:
          "You can be eliminated during the immunity period. Elimination is completely separate logic from deregistration. This can be due to exceeding drawdown limits, or being eliminated due to detected plagiarism. Once a miner is eliminated from the network they will need to wait until they are deregistered if they are in immunity to try and rejoin.",
      },
      {
        value:
          "Will there be a base model/strategy to get miners started, ie Taoshi v3, 4.5?",
        description:
          "Models and strategies are separate. well work to continue to build open source models. it's on teams to take that basis to generate even better models & working strategies.",
      },
      {
        value: "Are there plans to expand the asset classes?",
        description: "",
      },
    ],
  },
  {
    title: "Time Series Prediction Subnet?",
    items: [
      {
        value: "What happened to Taosh's Time Series Prediction Subnet?",
        description:
          "PTN is the next iteration of TSPS. You can now take your prediction models and apply them to make a trading strategy to be used on PTN",
      },
      {
        value: "Why not launch a new subnet instead?",
        description: (
          <Box>
            <Text mb="md" size="sm">
              There are many reasons as to why we didn&apos;t just take another
              SN slot. PTN is simply more valuable than TSPS. The output is
              directly usable, providing businesses a clear opportunity to build
              using the request network. PTN has so many overlapping parts with
              TSPS it didn&apos;t make sense to have both at this time
              especially when considering the following when registering another
              SN:
            </Text>
            <List>
              <List.Item mb="md">
                <Text size="sm">
                  Adding congestion on the SN slot level. There are currently
                  many potentially valuable SNs trying to register running on
                  testnet. Adding another Taoshi SN at this time would only add
                  to it and increase the cost of registration for everyone else
                  as well.
                </Text>
              </List.Item>
              <List.Item mb="md">
                <Text size="sm">
                  Concentrating on a single SN to bring the most value.
                  Splitting our attention across SNs means we&apos;re not
                  concentrating all our efforts & resources on bringing the most
                  value to the community. Considering that PTN has an incredibly
                  significant SN, especially with the launch of the request
                  network, we want to ensure we drive as much revenue and
                  support for TAO as we can.
                </Text>
              </List.Item>
            </List>
            <Text size="sm">
              This isn&apos;t to say TSPS will never exist as an SN in the
              future, but with the limited number of slots and how important it
              is to drive as much value as possible now to showcase & drive the
              value of TAO, evolving TSPS to PTN was clearly best for the
              network.
            </Text>
          </Box>
        ),
      },
      {
        value:
          "Will we be able to use the models we've built for TSPS in the new platform?",
        description:
          "Short answer is yes, indirectly. Long answer is that in PTN miners must submit LONG, SHORT, or FLAT orders into the network. The logic for doing this will involve estimations of future prices.",
      },
    ],
  },
  {
    title: "Request Network",
    items: [
      {
        value: "What is the revenue model?",
        description: "Likely users will pay per signal.",
      },
      {
        value:
          "Wont validators or miners just give away their signals for free?",
        description: (
          <Box>
            <Text size="sm">
              Not every trader has capital. Traders share signals because they
              might want capital.
            </Text>
            <Text size="sm">
              Our incentives are greater than those of a prop firm. Taoshi has
              over 100k paid out daily. A trader on PTN can earn millions of
              dollars. Taoshi is the evolution of prop firms.
            </Text>
          </Box>
        ),
      },
    ],
  },
];

export default function Page() {
  return (
    <Box>
      <Box mb={200}>
        <Box ta="center" mb={75}>
          <Center mb="lg">
            <Image
              component={NextImage}
              w="auto"
              h={100}
              fit="contain"
              src={brain}
              alt="Hero Image"
            />
          </Center>

          <Title mb="sm">Frequently Asked Questions</Title>
          <Text>
            Find quick answers to common queries about our services, process,
            and more.
          </Text>
        </Box>

        <Box>
          <Accordion>
            {questions.map((question) => (
              <Box key={question.title} mb={50}>
                <Title order={3} mb="sm">
                  {question.title}
                </Title>
                {question.items.map((item) => (
                  <Accordion.Item key={item.value} value={item.value}>
                    <Accordion.Control>
                      <Text size="sm">{item.value}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      {typeof item.description === "string" ? (
                        <Text size="sm">{item.description}</Text>
                      ) : (
                        item.description
                      )}
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Box>
            ))}
          </Accordion>
        </Box>

        <Center my={100}>
          <Divider variant="dashed" w="50%" bg="black" />
        </Center>

        <Box ta="center">
          <Title order={3} mb="xl">
            Didn&apos;t find what you were looking for? Ask Us.
          </Title>
          <Anchor href="https://discord.gg/MKtKVYnCDh" target="_blank">
            <Button variant="primary" size="sm" w="200px">
              Join our Discord.
            </Button>
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}
