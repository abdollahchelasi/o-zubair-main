import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css"

const news1 = () => {
    return (
        <>
        <Head>
        <meta name="description" content="(ترقية حكم اليد الدولي عمرالزبير إلى رتبة رائد) عمر الزبير المرزوقي - أخبار الرياضة" />
        <link rel="icon" href="/news1.jpg" />

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
                        <Link href={"/news1.jpg"}>
                            <img className={styles.n1} src="/news1.jpg" width={100} />
                        </Link>
                        <h4 className={styles.pnews1}>ترقية حكم اليد الدولي عمرالزبير إلى رتبة رائد</h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>دبي-الوحدة
                            أبدى الحكم والمراقب الدولي الاولمبي المونديالي لكرة اليد عمر الزبير سعادته بقرار صاحب السمو الشيخ محمد بن راشد آل مكتوم نائب رئيس الدولة رئيس مجلس الوزراء حاكم دبي بترقيته إلى رتبة رائد متوجهاً بالشكر إلى سموه على هذا القرار الذي يعكس مدى العناية التي يوليها سموه بجهاز الشرطة وجميع العاملين فيه.
                            ويعتبر الزبير اول من حقق إنجازات غير مسبوقة لقارة آسيا إذ يعتبر أول حكم إماراتي يدير نهائي كأس العالم للشباب سنة 2011 في اليونان بين منتخبي ألمانيا والدنمارك حيث كانت النهائيات قبل ذلك محصورة لحكام قارة اوربا فقط واستطاع كسر هذه القاعدة وفتح المجال لحكام قارات اخرى لتحكيم نهائيات العالم كما أدار نصف نهائي كأس العالم للشابات في كوريا الجنوبية سنة 2010 وحكم اولمبياد لندن 2012 وراقب اولمبياد ريو جونيور 2016 ووصل عدد المباريات الدولية التي أدارها إلى 190 مباراة دولية و1600 مباراة محلية فضلاً على خمسة نهائيات آسيا وخمسة نهائيات لكأس رئيس الدولة إضافة إلى تحكيم الدوريات المحلية بجميع دول الخليج وحصل على جائزة الشيخ محمد بن راشد ال مكتوم للابداع الرياضي وجائزة المغفور له الشيخ خليفة بن زايد ال نهيان للتميز الرياضي .
                            وتلقى عمر الزبير حكم كرة اليد المونديالي والمراقب الفني الاولمبي المعروف على مستوى المنطقة والقارة الآسيوية التهاني والتبريكات من مختلف أبناء كرة اليد ومن قيادة الاتحاد ومن الإداريين ولاعبين وزملائه الحكام وزملائه في شرطة دبي والاهل والاقارب والاصدقاء بعد أن تمت ترقيته الى رتبة رائد في مركز شرطة البرشاء ، وقال : سعادتي لا توصف بهذه الترقية وبحمد الله وتوفيقه ما زلت أواصل عملي في التحكيم ، وأتدرج في العمل الوظيفي بصورة جيدة، وأسعدتني تهاني زملائي، وهذا أجمل ما في الوسط الرياضي.
                            وأضاف : أتشرف بأنني قضيت 25 سنة في مجال التحكيم بكرة اليد وحققت كل أهدافي وطموحاتي وجاهز لخدمة الدولة واللعبة في أي محفل من المحافل وثقتي بنفسي كبيرة لإهداء بلادي مزيدا من الإنجازات .</p>
                    </Col>


                </Row>
            </Container>
        </>
    );
}

export default news1;