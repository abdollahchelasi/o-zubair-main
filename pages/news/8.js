import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news8 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(عمر المرزوقي .. تميز أمني) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news8.jpg" />
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
                        <Link href={"/news8.jpg"}>
                            <img className={styles.n1} src="/news8.jpg"  />
                        </Link>
                        <h4 className={styles.pnews1}>

                        عمر المرزوقي .. تميز أمني

                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        تعددت تجاربه الأمنية ومحطاته الشرطية، ما أكسبه خبرة عميقة وتجربة واسعة، مؤدياً مهماته المهنية بدقة متناهية وتميّز جلي .. إنه الضابط المناوب في مركز البرشاء الملازم أول عمر الزبير المرزوقي. باشر مسيرته عام 1992 برتبة وكيل مأمور جوازات في مطار دبي، ثم التحق بالإدارة العامة للتحريات قبل انتقاله إلى الإدارة العامة للمؤسسات العقابية. عمل المرزوقي في الإدارة العامة للموانئ والمطارات وقسم تسجيل المركبات في الإدارة العامة للمرور. انتسب أيضاً لإدارة الضبط المروري باذلاً قصارى جهده في رصد متجاوزي القانون وتنظيم حركة السير، منضماً إثر ذلك إلى مركز شرطة الرفاعة وبعدها مركز شرطة البرشاء. يؤمن بقيمة التقنيات الحديثة في تطوير المنظومة الخدمية وتحقيق أهداف القيادة العامة ووزارة الداخلية، مواكباً جميع المستجدات الرقمية والتكنولوجية. نال المرزوقي جائزة الشيخ محمد بن راشد آل مكتوم للإبداع الرياضي، وجائزة الشيخ خليفة بن زايد للتميز الرياضي، فإلى جانب دوره الشرطي يُعد حكماً في رياضة كرة اليد. حكّم في أولمبياد لندن، وكأس العالم لكرة اليد ـ رجال مرتين في السويد وإسبانيا، وكأس القارات للأندية في الدوحة، وكأس العالم للشابات في كوريا الجنوبية. 
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news8;