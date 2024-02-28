"use client";

import { Container, Flex, Box, Text, Title, Anchor } from "@mantine/core";

import { Header } from "@/components/Header";

export default function Page() {
  return (
    <Container maw="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />

          <Box my={70}>
            <Text size="sm">Official Competition Rules</Text>
            <Title>Taoshi&apos;s First Forecasting Testnet Competition</Title>
            <Text mb="lg">Terms and Conditions</Text>
            <Text td="underline" tt="uppercase" mb="xl">
              Please read these terms carefully - it may significantly affect
              Your legal rights, including your right to file a lawsuit in
              Court.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Introduction
            </Text>
            <Text>
              By entering into the Taoshi Inc. (“
              <Text component="span" fw={700}>
                Taoshi
              </Text>
              ”, “
              <Text component="span" fw={700}>
                we
              </Text>
              ”, “
              <Text component="span" fw={700}>
                us
              </Text>
              ”, “
              <Text component="span" fw={700}>
                our
              </Text>
              ”) First Forecasting Testnet Competition (the “Competition”),
              participant (“
              <Text component="span" fw={700}>
                Participant
              </Text>
              ” or “
              <Text component="span" fw={700}>
                you
              </Text>
              ”) agrees to abide by these Official Competition Terms and
              Conditions (these “
              <Text component="span" fw={700}>
                Terms
              </Text>
              ”) and the decisions of Taoshi, such decisions which are final and
              binding in all respects.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Eligibility
            </Text>
            <Text mb="sm">
              Entry is completely free. The Competition is open solely to
              individuals 18 years of age or older at the time of entry or
              entities whose controlling members are all 18 years of age or
              older at the time of entry. Employees, officers, directors, or
              agents of Taoshi or any of Taoshi&apos;s partners, related
              companies, agencies, or agents, as well as the immediate family
              (defined as spouse, parents, siblings, children, and grandparents)
              and same household members of any such employee, officer,
              director, or agent, are not eligible to participate. All
              applicable national, state, and local laws and regulations apply.
              Void where prohibited or restricted by law.
            </Text>
            <Text mb="sm">
              Taoshi will be running its miner during the Competition to set a
              performance floor a Participant must exceed in order to be
              eligible to win.
            </Text>
            <Text mb="sm">
              Taoshi will post winners on its “Taoshi Community Hub Discord
              Server”. While it is not necessary to join that Discord Server to
              participate, you are encouraged to do so to make sure you can
              receive notice if you won and for other important information
              about the Competition and Taoshi.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              How to enter; competition cycles; termination
            </Text>
            <Text mb="sm">
              To enter a Competition, visit{" "}
              <Anchor href="/competition">
                https://www.taoshi.io/competition
              </Anchor>{" "}
              and register your wallet on testnet uid 97 on the Bittensor
              network Taoshi built for the Competition (the “
              <Text component="span" fw={700}>
                Testnet
              </Text>
              ”) using the command line interface.
            </Text>
            <Text mb="sm">
              See more detailed information for registration{" "}
              <Anchor href="https://github.com/taoshidev/time-series-prediction-subnet/blob/main/docs/running_on_testnet.md">
                here
              </Anchor>
              .
            </Text>
            <Text mb="sm">
              See more detailed information on the Testnet{" "}
              <Anchor href="https://github.com/taoshidev/time-series-prediction-subnet">
                here
              </Anchor>
              .
            </Text>
            <Text mb="sm">
              Only one wallet may register with the Testnet per interval, which
              is defined in the hyperparameters of the Subnet and may be
              modified at any time in the sole discretion of Taoshi. There are a
              total of 256 available entry slots on the Testnet.
            </Text>
            <Text mb="sm">
              The Competition is broken into cycles (each a “
              <Text component="span" fw={700}>
                Competition Cycle
              </Text>
              ”) such that each Competition Cycle shall begin each Friday at
              1:00pm (13:00) United States Eastern Time and end the next Friday
              at 12:59:59pm United States Eastern Time. Results from each
              Participant&apos;s entries shall be locked in at the end of each
              Competition Cycle and a new Competition Cycle shall begin without
              reference to the Participants or results of any previous
              Competition Cycle.
            </Text>
            <Text mb="sm">
              Incorrect, fraudulent, incomplete, late, underperforming, or
              otherwise non-conforming entries or entries that are intended to
              annoy, abuse, threaten, or harass any person or entity in any way
              will be deregistered from the Testnet as soon as possible and/or
              be ineligible to claim any Prize. To this end, Taoshi runs a
              deregistration process on the Testnet.
            </Text>
            <Text mb="sm">
              Limit of one (1) entry per person per Competition Cycle; multiple
              entries per Competition Cycle by any one individual are void.
              Entries generated by macro, script, or other automated means are
              void. Any entrant using fraudulent means to participate in a
              Competition will be disqualified and may be guilty of violating
              applicable criminal laws. Eligibility is at the exclusive
              discretion of Taoshi, and Taoshi shall be entitled to reject any
              entrant or deny any entrant a Prize for any reason or no reason at
              all without having to provide an explanation.
            </Text>
            <Text mb="sm">
              Taoshi reserves the right, in its sole discretion, to cancel,
              suspend, or terminate the Competition for any reason and without
              prior notice to any Participant. In such instance, Taoshi may, in
              its sole discretion, select a winner using reasonable means that
              are materially consistent with the Competition in question.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Your responsibilities
            </Text>
            <Text mb="sm">
              You are responsible for all activities that occur with respect to
              your participation in the Competition, regardless of whether the
              activities are authorized by you or undertaken by you, your
              employees or a third party (including your contractors, agents or
              other end users), and Taoshi and its affiliates are not
              responsible for unauthorized access to the Competition or your
              registration, including any access that occurred as a result of
              fraud, phishing, or other criminal activity perpetrated against
              you by third parties. You will ensure that your participation in
              the Competition does not violate any applicable law.
            </Text>
            <Text mb="sm">
              You are solely responsible for properly configuring and using the
              tools you use in the Competition and otherwise taking appropriate
              action to secure, protect, and backup your wallet accounts, your
              content, and/or your registration in a manner that will provide
              appropriate security and protection, which might include use of
              encryption. If you are not able to be responsible for your own
              security, or do not want such an obligation, then you should not
              enter the Competition.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Changes
            </Text>
            <Text mb="sm">
              We may change or discontinue any or all of the Competition Cycles
              or the Competition or change or remove functionality of any or all
              of the Competition from time to time. We will use commercially
              reasonable efforts to communicate to you any discontinuation or
              change affecting the Competition through the Taoshi website or
              public communication channels.
            </Text>
            <Text mb="sm">
              We reserve the right, at our sole discretion, to modify or replace
              any part of these Terms or any other term or condition affecting
              the Competition and/or change or implement any policy at any time.
              It is your responsibility to check these Terms and the Taoshi
              website, public communication channels, or repositories
              periodically for changes, but we will also use commercially
              reasonable efforts to communicate any material changes to these
              Terms through the Taoshi website or public channels. You agree
              that your continued use of or participation in the Competition
              following the posting of any changes to these Terms constitutes
              acceptance of those changes, whether or not you were checking for
              changes or actually read the changes.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Provision of materials and information; license to submitted
              intellectual property
            </Text>
            <Text mb="sm">
              By entering into the Competition, Participant represents and
              warrants as follows: (1) that it fully owns or has properly
              licensed whatever materials or information it utilizes in
              connection with the Competition and may participate without
              violating any: applicable law, agreement with any third-party,
              and/or third-party right of any kind (including without limitation
              any intellectual property, data protection, privacy, or publicity
              right); and (2) that any and all materials or information utilized
              or provided by it hereunder shall be true and correct in all
              respects.
            </Text>
            <Text mb="sm">
              If you provide any suggestions to Taoshi or its affiliates, it and
              its affiliates will be entitled to use the suggestions without
              restriction. You hereby irrevocably assign to Taoshi all right,
              title, and interest in and to the suggestions and agree to provide
              it any assistance it requires to document, perfect, and maintain
              its rights in the suggestions.
            </Text>
            <Text mb="sm">
              Notwithstanding anything else to the contrary, Participant hereby
              grants Taoshi an irrevocable, royalty-free, fully paid-up,
              transferable, and fully sublicensable right and license, inclusive
              of the right to create derivative works, to use, display,
              distribute, broadcast, and exploit any and all such materials or
              information in any manner it elects for the purpose of promoting
              the Competition, its business, brand, products, and/or services.
              This grant extends to all forms of media, whether currently known
              or subsequently developed, and is applicable worldwide in
              perpetuity. To the extent permitted by applicable laws, the
              Participant also agrees to waive any and all moral rights they may
              have in such materials or information, including but not limited
              to the right to be identified as the author and the right to
              object to derogatory treatments of their works. This waiver allows
              Taoshi the flexibility to use the materials or information without
              the obligation to attribute authorship to the Participant or to
              seek approval for modifications that could be deemed derogatory.
              However, this waiver of moral rights is subject to limitations and
              exceptions provided by the laws of certain jurisdictions, and
              thus, the applicability of this waiver may vary. The Participant
              acknowledges and agrees that such a waiver is made voluntarily and
              without duress, to the fullest extent allowed by law.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Indemnification
            </Text>
            <Text mb="sm">
              You will defend, indemnify, and hold harmless us, our affiliates
              and licensors, and each of their respective employees, officers,
              directors, and representatives from and against any claims,
              damages, losses, liabilities, costs, and expenses (including
              reasonable attorneys&apos; fees) (“
              <Text component="span" fw={700}>
                Losses
              </Text>
              ”) arising out of or relating to any claim concerning: (a) breach
              of these Terms, your representations and warranties, or violation
              of applicable law by you; or (b) a dispute between you and any of
              your customers or users. You will reimburse us for reasonable
              attorneys&apos; fees and expenses, associated with claims
              described in (a) and (b) above.
            </Text>
            <Text mb="sm">
              Without limiting the foregoing, you will defend, indemnify, and
              hold harmless Taoshi, its affiliates, and their respective
              employees, officers, and directors against any third-party claim
              alleging that any of the intellectual property you used and/or
              licensed to Taoshi pursuant to the Competition or these Terms
              infringes or misappropriates that third party&apos;s intellectual
              property rights, and will pay the amount of any adverse final
              judgment or settlement.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Prizes; selecting and notifying prize winners
            </Text>
            <Text mb="sm">
              Each Participant&apos;s chance of winning the stated prize for a
              Competition Cycle (each a “
              <Text component="span" fw={700}>
                Prize”
              </Text>
              ) is based upon how well their miner predicts the intraday price
              movements of Bitcoin. This information is set forth in each
              Competition&apos;s webpage, which can be found by clicking on the
              appropriate link at:{" "}
              <Anchor href="https://www.taoshi.io/competition">
                https://www.taoshi.io/competition
              </Anchor>{" "}
              . All Competition winners will be selected pursuant to the
              specific procedures herein, the Taoshi GitHub links above, and as
              communicated by Taoshi to Participants.
            </Text>
            <Text mb="sm">
              Taoshi will post the winning registrants on the “Taoshi Community
              Hub Discord Server” shortly after the close of each Competition
              Cycle . If your registration is among the winners, please contact
              Taoshi by email to{" "}
              <Anchor href="mailto:support@taoshi.io">support@taoshi.io</Anchor>{" "}
              . Taoshi is not responsible for digital communications that are
              undeliverable as a result of any filtering of any kind,
              insufficient space in a Participant&apos;s account, or any other
              failure beyond its reasonable control. In the event of a dispute
              with respect to entries received from more than one user having
              the same e-mail address/account, the authorized subscriber of the
              account in question at the time of entry will be deemed the proper
              entrant. Additionally, Taoshi may ask if winner(s) wish to be
              listed on its website in a direct, general, or anonymous way. Once
              granted, this right can only be revoked at the written request of
              the same winner(s).
            </Text>
            <Text mb="sm">
              Each winner must show picture identification and other information
              suitable for Taoshi and as it may request in its sole discretion
              to comply with its legal requirements, including, without
              limitation, compliance with applicable anti-money laundering laws
              to claim his or her Prize.
            </Text>
            <Text mb="sm">
              Any potential winner will forfeit his or her Prize if he or she:
              (1) fails to respond in a timely fashion to any of Taoshi&apos;s
              requests for information or signatures with respect the
              Competition or the Prize; (2) cannot be reached at the information
              provided by such person; (3) rejects the Prize (or it is returned
              undeliverable through no fault of Taoshi); or (4) is disqualified
              from the Competition for any reason. In the event of any
              forfeiture hereunder, an alternate winner will be selected. Prize
              winners are solely responsible for all applicable: (1) federal,
              state, and local taxes; and (2) out-of-pocket expenses, associated
              with Prize acceptance and use. Prizes will not be substituted by
              Taoshi for cash or other merchandise pursuant to any Prize
              winner&apos;s request. Taoshi, however, reserves the right to
              substitute alternate Prizes of comparable or equal value in its
              sole discretion. Subject to applicable law,{" "}
              <Text component="span" fw={700}>
                Prizes are offered “as is” without any express or implied
                warranty of any kind or nature
              </Text>
              , including without limitation, any warranty respecting condition,
              merchantability, quality, title, or fitness for a particular
              purpose. Taoshi is not responsible for replacing any lost or
              stolen Prizes unless such damage is caused by Taoshi.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Publicity
            </Text>
            <Text mb="sm">
              Subject to applicable law, entrance in any Competition constitutes
              the Participant&apos;s consent to Taoshi and Taoshi&apos;s
              affiliates to use his or her name, voice, likeness, opinions, and
              biographical information for marketing, advertising, and publicity
              purposes in any media throughout the world at any time without the
              obligation to seek consent or to provide Participant with any
              payment or other form of consideration. Participant agrees to
              execute any document reasonably required by Taoshi to effectuate
              the terms hereof and failure to do so shall give rise to
              Taoshi&apos;s right to execute any and all such documents as
              Participant&apos;s attorney-in-fact, which right shall be coupled
              with an interest and therefore, irrevocable.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Release
            </Text>
            <Text mb="sm">
              Subject to applicable law, by entering into a Competition and
              potentially receiving a Prize, each Participant and winner agrees
              to release, discharge, and hold harmless Taoshi, along with
              Taoshi&apos;s employees, officers, directors, affiliates,
              partners, agents and assigns, from and against any claim, cause of
              action, demand, or proceeding (each, a “
              <Text component="span" fw={700}>
                Claim
              </Text>
              ”), and any resultant loss, injury (including death), cost,
              expense, fee, fine, penalty, or other loss or expense of any kind,
              including attorneys&apos; fees (each, a “
              <Text component="span" fw={700}>
                Loss
              </Text>
              ”), relating to or arising directly or indirectly out of his or
              her participation in a Competition (or related activity such as a
              press release), and/or Taoshi&apos;s right to exploit
              Participant&apos;s name and/or likeness or fully exploit any other
              right granted to it hereunder, and/or from Participant&apos;s
              receipt, use, or misuse of any Prize, no matter how such Claim or
              Loss arises (including without limitation, if arising out of any
              damage to a Participant&apos;s computer system from downloading or
              using material from Taoshi&apos;s (or an affiliate of
              Taoshi&apos;s) website).
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Limitation of liability
            </Text>
            <Text mb="sm" tt="uppercase">
              In no event will taoshi, and/or taoshi&apos;s parent, subsidiary,
              Licensees, employees, agents, officers, directors, assigns,
              Affiliates, or related companies (collectively with taoshi, the “
              <Text component="span" fw={700}>
                taoshi parties
              </Text>
              ”), be responsible or liable for any indirect, Incidental,
              consequential, or punitive damages (including without Limitation
              lost profits) arising out of any participant&apos;s Participation
              in the competition, these terms, and/or any Participant&apos;s
              receipt of a prize, no matter under what theory Arising, even if
              any taoshi party has been advised of the possibly Of such damages.
              Taoshi parties&apos; entire liability with respect to: Any
              participant&apos;s participation in the competition, these terms,
              And/or any participant&apos;s receipt of a prize shall be limited
              to $500. Some jurisdictions may not allow the aforementioned
              Limitations or exclusions of liability and as such, the above
              Limitations or exclusions may not apply to you. Check your local
              Laws for any restrictions or limitations regarding these
              Limitations or exclusions.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Disclaimers; risk
            </Text>
            <Text mb="sm" tt="uppercase">
              <Text component="span" fw={700}>
                Disclaimer
              </Text>
              . The competition is provided “as is.” except to the extent
              prohibited by law, or to the extent any statutory rights apply
              that cannot be excluded, limited or waived, we and our affiliates
              and licensors (a) make no representations or warranties of any
              kind, whether express, implied, statutory or otherwise regarding
              the competition, the third party content, or the third party
              services, and (b) disclaim all warranties, including any implied
              or express warranties (I) of merchantability, satisfactory
              quality, fitness for a particular purpose, non-infringement, or
              quiet enjoyment, (ii) arising out of any course of dealing or
              usage of trade, (iii) that the competition, any third party
              content, or any third party service will be uninterrupted, error
              free or free of harmful components, and (iv) that any content will
              be secure or not otherwise lost or altered. You acknowledge and
              agree that you have not relied and are not relying upon any
              representation or warranty from taoshi that is not otherwise in
              these terms or in a separate written agreement between us, and you
              agree you will not take a position in any proceeding that is
              inconsistent with this provision.
            </Text>
            <Text mb="sm" tt="uppercase">
              <Text component="span" fw={700}>
                Risks
              </Text>
              . Our competition relies on emerging technologies, such as the
              opentensor foundation and bittensor. Some elements of the
              competition are subject to increased risk through your potential
              misuse of things such as public/private key cryptography or
              failing to properly update or run software to accommodate protocol
              upgrades. By participating in the competition, you explicitly
              acknowledge and accept these heightened risks. You represent that
              you are financially and technically sophisticated enough to
              understand the inherent risks associated with using cryptographic
              and blockchain-based systems and upgrading your software and
              processes to accommodate the competition and protocol upgrades,
              and that you have a working knowledge of the usage and intricacies
              of digital assets such as tao and other digital tokens. In
              particular, you understand that we do not operate the bittensor
              protocol or any other blockchain protocol, communicate or execute
              protocol upgrades, or approve or process blockchain transactions
              on behalf of you. You further understand that blockchain protocols
              present their own risks of use, which supporting or participating
              in the protocol may result in losses if your participation
              violates certain protocol rules, that blockchain-based
              transactions are irreversible, that your private key and secret
              recovery phrase must be kept secret at all times. With respect to
              third parties, you are aware that social engineering scams like
              pig butchering perpetrated by malicious third parties is a risk
              and you agree that you and you alone are responsible for
              transactions or agreements with such third parties that may lead
              to injury. You agree that we are not responsible for verifying the
              legitimacy or safety or suitability of any third-party
              applications or. You are aware that there are technical measures
              in certain offerings that improve user safety, and you are solely
              responsible for understanding how they function and using them as
              appropriate.
            </Text>
            <Text mb="sm" tt="uppercase">
              You further understand and accept that digital assets, such as
              tao, present market volatility risk, technical software risks,
              regulatory risks, and cybersecurity risks. You understand that the
              cost and speed of a blockchain-based system is variable, that cost
              may increase dramatically at any time, and that cost and speed is
              not within the capability of taoshi to control. You understand
              that protocol upgrades may inadvertently contain bugs or security
              vulnerabilities that may result in loss of functionality and
              ultimately your entry in the competition or taoshi needing to
              adapt its competition metrics to determine a winner after the
              fact.
            </Text>
            <Text mb="sm" tt="uppercase">
              You agree that taoshi is not responsible for the regulatory status
              or treatment in any jurisdiction of any digital assets or
              agreements related to the competition. You expressly assume full
              responsibility for all of the risks of accessing and participating
              in the competition.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Use of collected materials and information
            </Text>
            <Text mb="sm">
              Any information collected by Taoshi to confirm winners will be
              used only for the purposes of administering the Competition and as
              described herein. Such information will not be shared with
              third-parties except by those with a duty of confidentiality and
              need to know and for Taoshi&apos;s compliance purposes. Taoshi
              will use commercially reasonable efforts to only store such
              information until it is no longer needed.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Binding arbitration and class action waiver
            </Text>
            <Text td="underline" tt="uppercase" mb="sm">
              Please read these terms carefully - it may significantly affect
              Your legal rights, including your right to file a lawsuit in
              Court.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Binding Arbitration
              </Text>
              . Any dispute, claim or controversy relating in any way to these
              Terms, the Competition, or your use or receipt of any Prize will
              be resolved by binding arbitration as provided in this Section,
              rather than in court, except that you may assert claims in small
              claims court if your claims qualify.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                If you are located in the United States
              </Text>
              : These Terms and any dispute or claim (including non-contractual
              disputes or claims) arising out of or in connection with it or its
              subject matter or formation shall be governed by and construed in
              accordance with the laws of the State of Delaware. The Federal
              Arbitration Act and federal arbitration law apply to these Terms
              or the Competition. There is no judge or jury in arbitration, and
              court review of an arbitration award is limited. However, an
              arbitrator can award on an individual basis the same damages and
              relief as a court (including injunctive and declaratory relief or
              statutory damages) and must follow the terms of these Terms as a
              court would. The arbitration will be conducted in accordance with
              the expedited procedures set forth in the JAMS Comprehensive
              Arbitration Rules and Procedures (the “
              <Text component="span" fw={700}>
                Rules
              </Text>
              ”) as those Rules exist on the effective date of the Claim,
              including Rules 16.1 and 16.2 of those Rules. The
              arbitrator&apos;s decision shall be final, binding, and
              non-appealable. Judgment upon the award may be entered and
              enforced in any court having jurisdiction. Neither party shall sue
              the other party other than as provided herein or for enforcement
              of this clause or of the arbitrator&apos;s award; any such suit
              may be brought only in a Federal District Court or a California
              state court located in San Mateo county, California or as near as
              possible to the same. The arbitrator, and not any federal, state,
              or local court, shall have exclusive authority to resolve any
              dispute relating to the interpretation, applicability,
              unconscionability, arbitrability, enforceability, or formation of
              these Terms, including any claim that all or any part of these
              Terms is void or voidable. If for any reason a claim proceeds in
              court rather than in arbitration we and you waive any right to a
              jury trial. Notwithstanding the foregoing we and you both agree
              that you or we may bring suit in court to enjoin infringement or
              other misuse of intellectual property rights.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                If you are located outside the United States
              </Text>
              : These Terms and any dispute or claim (including non-contractual
              disputes or claims) arising out of or in connection with it or its
              subject matter or formation shall be governed by and construed in
              accordance with the law of the state of Delaware. Any dispute,
              claim or controversy relating in any way to these Terms, the
              Competition, or your use or receipt of any of the Prizes, will be
              resolved by binding arbitration as provided in above in this
              section or, in Taoshi&apos;s sole discretion, using London Court
              of International Arbitration (“
              <Text component="span" fw={700}>
                LCIA
              </Text>
              ”) for arbitration rather than JAMS. Prior to commencing any
              formal arbitration proceedings, parties shall first seek
              settlement of any claim by mediation in accordance with the LCIA
              Mediation Rules. If the dispute is not settled by mediation within
              14 days of the commencement of the mediation, or such further
              period as the parties shall agree in writing, the dispute shall be
              referred to and finally resolved by arbitration under the LCIA
              rules, which are deemed to be incorporated by reference into this
              clause. The language to be used in the mediation and in the
              arbitration shall be English. The seat or legal place of
              arbitration shall be remote if possible and if not possible, then
              London, England.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Class Action Waiver.
              </Text>{" "}
              <Text tt="uppercase" component="span">
                You and we agree that each may bring claims against the other
                only on an individual basis, and not as a plaintiff or class
                member in any purported class or representative proceeding. You
                and we expressly waive any right to file a class action or seek
                relief on a class basis.
              </Text>{" "}
              Unless both you and we agree, no arbitrator or judge may
              consolidate more than one person&apos;s claims or otherwise
              preside over any form of a representative or class proceeding. The
              arbitrator may award injunctive relief only in favor of the
              individual party seeking relief and only to the extent necessary
              to provide relief warranted by that party&apos;s individual claim.
              If a court decides that applicable law precludes enforcement of
              any of this paragraph&apos;s limitations as to a particular claim
              for relief, then that claim (and only that claim) must be severed
              from the arbitration and may be brought in court. If any court or
              arbitrator determines that the class action waiver set forth in
              this paragraph is void or unenforceable for any reason or that an
              arbitration can proceed on a class basis, then the arbitration
              provision set forth above shall be deemed null and void in its
              entirety and the parties shall be deemed to have not agreed to
              arbitrate disputes.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                30-Day Right to Opt Out
              </Text>
              . You have the right to opt-out and not be bound by the
              arbitration and class action waiver provisions set forth above by
              sending written notice of your decision to opt-out to the email
              address{" "}
              <Anchor href="mailto:support@taoshi.io">support@taoshi.io</Anchor>{" "}
              with subject line LEGAL OPT OUT as well as the wallet address(es)
              you use to enter the Competition. The notice must be sent within
              30 days of your first entry into the Competition, otherwise you
              shall be bound to arbitrate disputes and will be deemed to have
              agreed to waive any right to pursue a class action in accordance
              with the terms of those paragraphs. If you opt-out of these
              provisions, we will also not be bound by them.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="xs" tt="uppercase">
              Miscellaneous
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Assignment
              </Text>
              . You will not assign or otherwise transfer your rights with
              respect to an entry in the Competition or any of your rights and
              obligations pursuant to these Terms, without our prior written
              consent. Any assignment or transfer in violation of this Section
              will be void. We may assign the Competition or our rights under
              these Terms without your consent (a) in connection with a merger,
              acquisition or sale of all or substantially all of our assets, or
              (b) to any of our affiliates or as part of a corporate
              reorganization; and effective upon such assignment, the assignee
              is deemed substituted for us as a party to these Terms and we are
              fully released from all of our obligations and duties to perform
              under these Terms. Subject to the foregoing, these Terms will be
              binding upon, and inure to the benefit of the parties and their
              respective permitted successors and assigns.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Entire Agreement and Modifications
              </Text>
              . These Terms incorporate any official statements or terms
              regarding the Competition made by Taoshi by reference and is the
              entire agreement between you and us regarding the subject matter
              of the Competition. If these Terms are inconsistent with the terms
              contained in any policy or official communication, the one last
              made shall control. Any modification to these Terms may only be
              made in writing.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Force Majeure
              </Text>
              . Neither party nor their respective affiliates will be liable for
              any delay or failure to perform any obligation under these Terms
              where the delay or failure results from any cause beyond such
              party&apos;s reasonable control, including but not limited to acts
              of God, utilities or other telecommunications failures,
              cyber-attacks, earthquake, storms or other elements of nature,
              pandemics, blockages, embargoes, riots, acts or orders of
              government, acts of terrorism, or war.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Export and Sanctions Compliance
              </Text>
              . In connection with the Competition, you will comply with all
              applicable import, re-import, sanctions, anti-boycott, export, and
              re-export control laws and regulations, including all such laws
              and regulations that prohibit certain transactions. You may
              participate in the Competition if you are the subject of U.S.
              sanctions or of sanctions consistent with U.S. law imposed by the
              governments of the country where you are using any part of or
              participating in the Competition.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Independent Contractors; Non-Exclusive Rights
              </Text>
              . We and you are independent contractors, and these Terms will not
              be construed to create a partnership, joint venture, agency, or
              employment relationship. Neither party, nor any of their
              respective affiliates, is an agent of the other for any purpose or
              has the authority to bind the other. Both parties reserve the
              right (a) to develop or have developed for it products, services,
              concepts, systems, or techniques that are similar to or compete
              with the products, services, concepts, systems, or techniques
              developed or contemplated by the other party, and (b) to assist
              third party developers or systems integrators who may offer
              products or services which compete with the other party&apos;s
              products or services.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Language
              </Text>
              . All communications and notices made or given pursuant to these
              Terms must be in the English language. If we provide a translation
              of the English language version of these Terms, the English
              language version of these Terms will control if there is any
              conflict.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Notice
              </Text>
              <Text mb="sm">
                <Text component="span" td="underline">
                  To You
                </Text>
                . We may provide any notice to you using commercially reasonable
                means, including: (i) posting a notice on the Taoshi website;
                (ii) sending a message to the email address then associated with
                your account (if provided); (iii) posting the notice in the
                interface of the Competition or GitHub repositories; or (iv)
                using public communication channels. Notices we provide by
                posting on the Taoshi website, GitHub repositories, or using
                public communication channels will be effective upon posting.
                You will be deemed to have received any email sent to the email
                address then associated with you when we send the email, whether
                or not you actually receive the email.
              </Text>
            </Text>
            <Text mb="sm">
              <Text component="span" td="underline">
                To Us
              </Text>
              . To give us notice under these Terms, you must contact us at{" "}
              <Anchor href="mailto:support@taoshi.io">support@taoshi.io</Anchor>
              .
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                No Third-Party Beneficiaries
              </Text>
              . These Terms do not create any third-party beneficiary rights in
              any individual or entity that is not a party to these Terms.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                No Waivers
              </Text>
              . The failure by us to enforce any provision of these Terms or any
              other part of the Competition will not constitute a present or
              future waiver of such provision nor limit our right to enforce
              such provision at a later time. All waivers by us must be in
              writing to be effective.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                No Waivers
              </Text>
              . The failure by us to enforce any provision of these Terms or any
              other part of the Competition will not constitute a present or
              future waiver of such provision nor limit our right to enforce
              such provision at a later time. All waivers by us must be in
              writing to be effective.
            </Text>
            <Text mb="sm">
              <Text component="span" fw={700}>
                Severability
              </Text>
              . If any portion of these Terms is held to be invalid or
              unenforceable, the remaining portions of these Terms will remain
              in full force and effect. Any invalid or unenforceable portions
              will be interpreted to effect and intent of the original portion.
              If such construction is not possible, the invalid or unenforceable
              portion will be severed from these Terms but the rest of these
              Terms will remain in full force and effect.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
