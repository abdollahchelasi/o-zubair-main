import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news2 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(Al Marzouqi sets high goals in Rio) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news2.jpg" />
                <title>عمر الزبير المرزوقي - أخبار الرياضة</title>
            </Head>
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col className={styles.n01}>
                        <Link href={"/news2.jpg"}>
                            <img className={styles.n1} src="/news2.jpg" width={100} />
                        </Link>
                        <h4 className={styles.pnews1}>Al Marzouqi sets high goals in Rio</h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                            UAE’s and Asia’s lone handball official wants to be in the final at the Olympic Games
                            Al Marzouqi presents Denmark goalkeeper Althea Rebecca Reinhardt with the ‘Best Goalkeeper’ award at the 2016 Women’s Junior Under-20 World Handball Championship. Image Credit: Omar Zubair Al Marzouqi

                            Dubai: “All of my colleagues are far ahead of me in their professional careers. But I have what they don’t, and they don’t have what I do,” shrugs Omar Zubair Al Marzouqi.

                            The reality is such. While Al Marzouqi was busy pursuing his career graph as a handball official, his peers had, in the meantime, advanced to promotions as Majors, and one of them even as a Brigadier in the Dubai Police force.

                            However, 20 years down the line in handball, these promotions really do not affect the 47-year-old First Lieutenant in the police force as he pushes sporting boundaries.

                            At the 2012 London Games, Al Marzouqi was called on to referee at the handball competition. And now, four years later, he will be the only representative from Asia and Africa who will be at the 2016 Rio de Janeiro Games as an official technical handball delegate. Something he is proud of.

                            “So what if I’ve lost two ranks with the police force. I am very pleased with what I have achieved as a handball official,” Al Marzouqi told Gulf News, as he prepared to depart for Rio next Wednesday for his second Olympic Games.

                            “It’s been a long and hard road for me. Before or after London, I have always worked hard in pursuit of my dreams. Last time it was as a referee. Now I will be a technical delegate. I will continue working hard and my dream will be to officiate at the handball final in Rio,” Al Marzouqi related.

                            No doubt, Al Marzouqi’s rise as a handball official has been fuelled by his desire to succeed, and at the same time, give something back to the sport. “My next goal will be to be the chief referee in the UAE so that I am in a better position to help referees from my country raise their level and continue what I did in handball. This is life. The good work has to continue,” he said.

                            “I have worked hard to reach this point. And now after this I will work even harder to help our referees reach greater heights. I want to be their teacher, and that to me, would be an ideal way to make my pay back to handball,” he added.

                            Al Marzouqi’s initiation in handball was more deigned by chance than by choice. As an aspiring young footballer in the Al Nasr academy, Al Marzouqi chose to follow his group of friends into handball training after they “were promised a bag full of sports goodies”.

                            “At the end of our first handball training we were each given a full bag, and that made me stay back in handball even though I was not enjoying any of the sessions. However, after a month I began liking it, and since then it has been all the way forward,” he recounted.

                            It was in 1996 that Al Marzouqi made the switch from playing into refereeing. Since then, he has officiated at two IHF World Men’s Handball Championship — in Sweden (2011) and Spain (2013) — and in the process become the only referee outside of Europe to official at a World Championship final.

                            “It has been pretty simple for me. Handball has given me what perhaps no one else in UAE sports or in Asia has received. I feel proud of what I have achieved through my association with handball, and now I feel is the right time for me to give something back to my country and to the sport that has made all this possible,” Al Marzouqi said.

                            “My country will be the first thing on my mind when I land in Rio. There, I need to work hard and ensure I am the technical delegate for the final. That would be the best gift for the UAE,” he added.

                            FACT BOX

                            Name: Omar Zubair Al Marzouqi

                            Date of birth: March 28, 1971

                            Born: Kuwaiti Hospital, Al Baraha area, Dubai

                            Residence: Al Rashidiya

                            Schooling: Al Rashidiya six years; Al Ghusais three years; Madinat Badr, Al Mizher three years

                            Professional career: Dubai Police Academy; first job at Dubai Airport (Immigration); CID; Central Jail; Al Barsha traffic police; Al Raffa Police Station
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news2;