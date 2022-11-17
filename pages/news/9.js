import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news9 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(عمر الزبير: ثقتنا بلا حدود في المدرب المواطن) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news9.jpg" />
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
                        <Link href={"/news9.jpg"}>
                            <img className={styles.n1} src="/news9.jpg" width={100} />
                        </Link>
                        <h4 className={styles.pnews1}>
                        عمر الزبير: ثقتنا بلا حدود في المدرب المواطن

                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        يعد حكمنا المونديالي والمراقب الدولي عمر محمد المرزوقي «الزبير»، من أبرز الشخصيات في لعبة كرة اليد، وسطر إنجازات مشرفة في مسيرته التحكيمية عبر إدارته مباريات في كأس العالم والأولمبياد، وبطولة القارات، وغيرها من البطولات الإقليمية بجانب تألقه على المستوى المحلي، وتمتد مسيرته الرياضية بساحات اللعبة لأكثر من 32 عاماً.

وكشف عمر الزبير المرشح من قبل إدارة نادي النصر لانتخابات مجلس إدارة اتحاد اليد المقبلة، عن الكثير من أفكاره ، التي يستشرف منها الارتقاء بقضاة ملاعب لعبة الأقوياء والوصول بهم إلى بطولات العالم، إلى جانب تسخير مسابقات الموسم لمصلحة منتخباتنا ، واستحداث بطولات على مستوى مناطق الدولة، والتي تشكل بوابة لتكوين منتخبات وطنية للمراحل السنية.

وأكد الزبير أن ما يطرحه من أفكار لم يأت من فراغ، وليست «كلاماً في الهواء» لاستقطاب أصوات أعضاء العمومية ومنحه الثقة، وإنما جاءت ثمرة مسيرته مع معشوقته كرة اليد التي عايشها لاعباً في صفوف النصر، وحكماً ومراقباً فنياً ، وقال: من هذا المنطلق أطلقت برنامجي الانتخابي الشامل للعبة وكوادرها الفنية والتحكيمية من خلال 3 محاور تستهدف تطوير الحكام والمدربين والمنتخبات بطموح الوصول للمونديال للمرة الثانية.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news9;