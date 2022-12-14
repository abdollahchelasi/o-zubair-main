import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news7 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(بخيت سعد يستعيد «ذاكرة المستطيل الأخضر» في مجلس الزبير) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news7.jpeg" />
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
                        <Link href={"/news7.jpeg"}>
                            <img className={styles.n1} src="/news7.jpeg" />
                        </Link>
                        <h4 className={styles.pnews1}>
                        بخيت سعد يستعيد «ذاكرة المستطيل الأخضر» في «مجلس الزبير» 

                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        كرم مجلس الحكم والمراقب المونديالي الأولمبي لكرة اليد، النقيب عمر محمد زبير المرزوقي، وبقية أعضاء المجلس، النجم الإماراتي الدولي بخيت سعد في مبادرة تحمل عنوان الوفاء والتقدير للمبدعين الرياضيين، في مقر مجلسه في منطقة الورقاء.

وقال المرزوقي: «لا يمكن أن نضع تصنيفاً لأجمل الأهداف في تاريخ الكرة الإماراتية من دون أن نحجز مكاناً في المقدمة لهدف النجم بخيت سعد في مرمى الكويت في تصفيات كأس آسيا 1992، وهو الهدف الذي اجتمعت فيه كل عناصر التشويق والإثارة ليبقى خالداً في أذهان الرياضيين».

وأضاف أن بخيت سعد كان «وجه السعد» على الكرة الإماراتية في كثير من المباريات بمردوه القوي وروحه القتالية العالية وتسديداته الصاروخية، مسطّراً اسمه بأحرف من ذهب في تاريخ منتخب الإمارات ليحصل على شهادة الإجادة بكل الألوان.

وأضاف: «لعب بخيت سعد 12 موسماً في الدوري الاماراتي منها 11 موسماً في شباب الأهلي وموسماً في نادي الجزيرة متذوقاً طعم البطولات 3 مرات، بواقع بطولة واحدة في الدوري عام 95 وبطولتين في منافسة كأس رئيس الدولة عامي 1993 و1997، وشارك في كأس الخليج في عامي 1994 و1996 وكان أحد العناصر التي مثلت المنتخب في منافسة كأس آسيا 1996 التي حل فيها الأبيض وصيفاً».

وأوضح المرزوقي أن التواصل بين الرياضيين يحقق التطلعات المرجوة في عكس وجهات النظر حول الكثير من الأمور الرياضية لتحقيق المصلحة العامة والوصول إلى القواسم المشتركة التي تعزز التطور الرياضي في جميع المجالات الرياضية، موضحاً أن وجوده في مجلسه أسعدهم كثيراً بقفشاته الجميلة.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news7;