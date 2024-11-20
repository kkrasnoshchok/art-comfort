import { TranslationType } from './types';

// #region about us
const aboutUsContentMarkdown = `
## Про нас

Компанія ART-COMFORT з 21 червня 2007 року з пристрастю та відданістю створює комфортні кліматичні умови для своїх клієнтів, як приватних, так і бізнесових. Ми реалізували вже понад 500 проєктів у сфері вентиляції та кондиціонування для державних установ та великих приватних компаній на території України та Європи. Нашою метою є надання сучасних, ефективних і надійних рішень, які забезпечують оптимальний мікроклімат, необхідний для комфортного перебування людей та ефективного протікання технологічних процесів у різних приміщеннях.
`;

const missionContentMarkdown = `
## Наша місія

Наша місія полягає у створенні та підтримці комфортних, здорових та ефективних середовищ шляхом надання високоякісних послуг та продуктів HVAC. Ми прагнемо до того, щоб кожна наша реалізація була синонімом надійності, інноваційності та повного задоволення наших клієнтів.`;

const visionContentMarkdown = `
## Наше бачення

Ми хочемо бути провідною компанією у сфері HVAC в Європі, відомою своїм професіоналізмом, інноваційними рішеннями та індивідуальним підходом до кожного клієнта. Ми прагнемо, щоб ART-COMFORT була першим вибором для всіх, хто шукає комплексні рішення у сфері вентиляції та кондиціонування.`;

const whyWeContentMarkdown = `
## Чому ми?

1. **Пристрасть і відданість**: Ми з великою пристрастю підходимо до створення комфортних кліматичних умов. Кожен проєкт для нас є викликом, який приносить задоволення від добре виконаної роботи.
2. **Досвід і професіоналізм**: Ми маємо понад 17 років досвіду у сфері HVAC, а наш колектив складається з кваліфікованих та досвідчених спеціалістів.
3. **Інноваційність**: Ми постійно шукаємо нові технології та рішення, що дозволяють нам надавати клієнтам найвищу якість послуг.
4. **Комплексність послуг**: Ми пропонуємо повний спектр послуг – від консультацій та проєктування до монтажу, обслуговування та ремонту.
5. **Довіра клієнтів**: Нам довірилися багато відомих компаній та установ, що є для нас найбільшим визнанням.

`;

const servicesContentMarkdown = `
## Наші послуги

- **Обстеження систем вентиляції та кондиціонування**: Точні інспекції з метою оцінки ефективності та технічного стану систем.
- **Проєктування систем**: Створення передових проєктів вентиляції, кондиціонування, зволоження та осушення повітря, адаптованих до індивідуальних потреб клієнтів.
- **Постачання обладнання**: Постачання високоякісного обладнання для систем вентиляції, кондиціонування, зволоження та осушення повітря.
- **Реконструкція та монтаж**: Комплексні послуги з модернізації, установки та монтажу систем HVAC.
- **Технічне обслуговування**: Регулярні огляди та технічне обслуговування систем вентиляції, кондиціонування, зволоження та осушення повітря, що забезпечують їх довготривалу та безаварійну роботу.
- **Ремонт**: Швидке та ефективне усунення несправностей у системах вентиляції, кондиціонування, зволоження та осушення повітря.
`;

const teamContentMarkdown = `
## Наш колектив

Колектив ART-COMFORT нараховує наразі 24 особи, включаючи досвідчених та кваліфікованих працівників: інженерів-проєктувальників, керівників проєктів та монтажників систем вентиляції та кондиціонування. Наші спеціалісти постійно підвищують свою кваліфікацію, щоб забезпечити найвищий рівень послуг.

`;

const ourValuesContentMarkdown = `
## Наші цінності

Якість, відповідальність та професіоналізм є фундаментом нашого успіху та розвитку. Ми постійно вдосконалюємо наші навички та підвищуємо стандарти надання послуг, щоб відповідати очікуванням наших клієнтів. В ART-COMFORT ми віримо, що комфортне середовище для роботи та життя є ключем до успіху та задоволення наших клієнтів. Запрошуємо до співпраці та користування нашими послугами, щоб разом створювати ідеальні кліматичні умови.

`;

// #endregion

// #region services markdown descriptions

const designServiceLongDescriptionMarkdown = `Проектування кліматичних систем, це комплексний, цікавий та творчий процес, який має врахувати та узгодити велику кількість факторів, вимог та побажань кінцевого споживача. Сам процес проектування має чітку послідовність певних етапів:
- Розробка технічного завдання на проектування;
- Отримання, аналіз та збір вихідних даних;
- Розробка та погодження з замовником концептуальних рішень;
- Проведення розрахунків та підбір обладнання, яке найкраще відповідає вимогам замовника;
- Розробка графічної частини проекту в 3D або 2D моделях;
- Складання детальної специфікації обладнання, матеріалів, компонентів систем та елементів кріплення;
- Складання кошторисної документації в комерційному вигляді або в програмних комплексах АВК-5, Кошторис 8;
- Узгодження та затвердження проекту замовником; Проходження комплексної державної експертизи та отримання позитивного експертного звіту (за необхідності).

Наш досвід охоплює як менші, більш прості проекти, так і великі, нестандартні об'єкти, такі як ядерні станції та виробництво ліків з різними рівнями чистих приміщень. Ми розуміємо специфічні вимоги кожного типу об'єкту і гарантуємо, що наші рішення будуть повністю відповідати вашим потребам.
`;

const supplyServiceLongDescriptionMarkdown = `Послуги з постачання включають забезпечення наших клієнтів високоякісним обладнанням та матеріалами для систем опалення, вентиляції та кондиціонування. Ми співпрацюємо з провідними виробниками, що дозволяє нам гарантувати надійність та ефективність постачаного обладнання. Наші послуги охоплюють:
- Підбір обладнання відповідно до вимог проекту: На основі технічного завдання підбираємо обладнання, яке найкраще відповідає потребам клієнта.
- Закупівля та логістика: Організуємо процес закупівлі та доставку обладнання до об'єкта.
- Контроль якості: Перевіряємо кожну партію обладнання перед відправкою, щоб гарантувати його відповідність вимогам проекту.
- Підтримка та консультації: Надаємо технічну підтримку та консультації щодо вибору та використання обладнання.

Ми маємо досвід постачання обладнання для різних типів об'єктів, від невеликих офісів до великих промислових підприємств, включаючи ядерні станції та фармацевтичні виробництва. Наша команда забезпечує надійну та своєчасну доставку, щоб ваші проекти могли розпочинатися і завершуватися без затримок.
`;

const installationServiceLongDescriptionMarkdown = `Монтаж систем HVAC є ключовим етапом у створенні комфортних умов у будь-якому приміщенні. Наші досвідчені фахівці забезпечують високоякісний монтаж, дотримуючись усіх стандартів та вимог безпеки. Основні етапи монтажних робіт включають:
- Підготовка до монтажу: Аналізуємо проектну документацію та готуємо необхідні матеріали та інструменти.
- Встановлення обладнання: Виконуємо точний монтаж всіх компонентів системи, включаючи вентилятори, кондиціонери, труби та фітинги.
- Підключення та налаштування: Забезпечуємо правильне підключення системи до електричних та водопровідних мереж, а також її налаштування для оптимальної роботи.
- Тестування та введення в експлуатацію: Перевіряємо роботу системи на всіх режимах, усуваємо можливі неполадки та вводимо її в експлуатацію.
- Навчання персоналу: Навчаємо клієнтів та їх персонал правильному використанню та обслуговуванню системи.

Ми маємо досвід монтажу систем HVAC як у невеликих офісах, так і у великих промислових об'єктах, таких як ядерні станції та фармацевтичні виробництва. Наші спеціалісти враховують всі специфічні вимоги кожного типу об'єкту, забезпечуючи безпеку та ефективність встановлених систем.
`;

const maintenanceServiceLongDescriptionMarkdown = `Регулярне технічне обслуговування є запорукою довговічності та ефективної роботи систем HVAC. Наші послуги з технічного обслуговування включають:
- Планове технічне обслуговування: Проводимо регулярні огляди та профілактичні роботи для запобігання можливим поломкам.
- Діагностика та усунення неполадок: Виконуємо детальну діагностику системи для виявлення та усунення будь-яких несправностей.
- Чистка та заміна фільтрів: Забезпечуємо регулярну чистку та заміну фільтрів для підтримки високої якості повітря.
- Оновлення програмного забезпечення: Оновлюємо програмне забезпечення систем автоматизації для підвищення їх ефективності.
- Екстрене обслуговування: Надаємо оперативну допомогу у випадку аварійних ситуацій.

Ми обслуговуємо системи HVAC у різних типах об'єктів, від невеликих офісів до великих промислових підприємств, включаючи ядерні станції та фармацевтичні виробництва. Наша команда спеціалістів завжди готова швидко та якісно вирішити будь-які технічні питання.`;

// #endregion

// #region vacancies markdown
const vacanciesSingleBaseIntroduction = `Компанія «АРТ-КОМФОРТ» є провідним постачальником послуг у сфері інжинірингу. Ми спеціалізуємось на проектуванні, монтажі та обслуговуванні систем вентиляції та кондиціонування повітря для різних типів будівель, включаючи офісні приміщення, торгові центри, готелі, ресторани та промислові комплекси.`;

// #region projects lead vacancy
const vacanciesProjectsLeadIntroduction = `Ми шукаємо в команду енергійного, мотивованого Керівника проектів, який готовий самостійно впроваджувати нові проекти та успішно супроводжувати існуючі проекти. Якщо ви маєте досвід ефективного планування та, навички ефективної координації замовників, підрядників і команди внутрішніх фахівців — ви наш найкращий кандидат!`;
const vacanciesProjectsLeadImportantForUs = `
- Досвід роботи на аналогічній посаді від 2-х років.
- Вища освіта у сфері інженерії, будівництва або суміжних галузей.
- Вміння керувати проектами, включаючи планування, організацію ресурсів та контроль якості.
- Відмінні комунікаційні та лідерські навички.
- Висока відповідальність та орієнтація на результат.
`;
const vacanciesProjectsLeadRequirements = `
- Керування виконанням проектів від початку до кінця, включаючи планування, організацію ресурсів та контроль якості.
- Взаємодія з замовниками, підрядниками та командою внутрішніх фахівців для забезпечення успішної реалізації проектів.
- Забезпечення дотримання термінів виконання, бюджету та вимог замовників.
- Вирішення конфліктних ситуацій та ризиків, що виникають під час виконання проектів.
- Забезпечення звітності та документації проектів.
`;
const vacanciesProjectsLeadWeOffer = `
- Участь у цікавих проектах різного рівня складності.
- Офіційне працевлаштування та гідний рівень фінансової мотивації.
- Навчання та розвиток у команді однодумців.
- Можливість професійного зростання в команді.
- Комфортний офіс (чай, кава, солоденьке).
`;
const vacanciesProjectsLeadJobBoards = `
- [Work UA](https://www.work.ua/employer/my/jobs/view/5267666/)
`;
// #endregion projects lead vacancy

// #region marketer vacancy
const vacanciesMarketerIntroduction = `Запрошуємо у нашу команду Маркетолога.`;
const vacanciesMarketerImportantForUs = `
- вища освіта в маркетингу, комунікаціях, або суміжних спеціальностях;
- досвід роботи у маркетингу від 2-х років;
- сильні аналітичні здібності та досвід у використанні аналітичних інструментів;
- вміння працювати з багатоканальними маркетинговими стратегіями;
- відмінні комунікативні навички та вміння презентувати ідеї, уважність до деталей;
- успішне володіння програмними продуктами: MS Office (Word, Excel, Paint), графічні редактори (Adobe Photoshop, Adobe Illustrator, інші);
- відкритість до навчання та інновацій.
`;
const vacanciesMarketerRequirements = `
- розробляти та впроваджувати маркетингові стратегії;
- аналізувати ринок та конкурентів, визначати ключові сегменти та цільову аудиторію;
- створювати та імплементувати бренд-комунікаційну стратегію через різноманітні канали;
- копірайтинг (написання та розміщення рекламних текстів), SMM, PR
- наповнення та адміністрування корпоративного сайту;
- управління бюджетом та відстеження ефективності маркетингових кампаній;
- робота з підрядниками.
`;
const vacanciesMarketerWeOffer = `
- офіційне працевлаштування та гідний рівень фінансової мотивації;
- навчання та розвиток у команді однодумців;
- можливість професійного зростання в команді;
- командоутворюючі заходи;
- комфортний офіс (чай, кава, солоденьке).
`;
const vacanciesMarketerJobBoards = ``;
// #endregion

// #region customer service manager vacancy
const vacanciesCsmIntroduction = `У зв’язку із розширенням запрошуємо в нашу команду Менеджера по роботі з клієнтами`;
const vacanciesCsmImportantForUs = `
- Успішний досвід роботи в продажах у сфері вентиляції та кондиціонування.
- Досвід живого ділового спілкування, ведення перемовин.
- Навички роботи у програмах MS Office.
- Наполегливість, уважність, відповідальність, комунікабельність.
- Володіння навичками переконання та здатність будувати довгострокові стосунки з клієнтами.
- Дружелюбність та порядність.
-  Наша команда — сім'я, ми працюємо з людьми, тому шукаємо менеджера, який любить людей, вміє знайти підхід до кожного клієнта, чесний та відповідальний.
`;
const vacanciesCsmRequirements = `
- Пошук та залучення нових клієнтів.
- Консультування клієнтів, вивчення специфіки їх запиту, проведення перемовин.
- Укладання угод і передача клієнтів профільному спеціалісту (керівнику проектів).
- Розширення бази контактів, потенційних клієнтів компанії.
`;
const vacanciesCsmWeOffer = `
- Офіційне працевлаштування та гідний рівень фінансової мотивації.
- Навчання та розвиток у команді однодумців.
- Можливість професійного зростання в команді.
- Командоутворюючі заходи.
- Комфортний офіс (чай, кава, солоденьке).
`;
const vacanciesCsmJobBoards = `
- [Work UA](https://www.work.ua/employer/my/jobs/view/5605179/)`;
// #endregion

// #region installer vacancy
const vacanciesInstallerIntroduction = `У зв’язку із розширенням запрошуємо в нашу команду Монтажників систем вентиляції та кондиціонування повітря.`;
const vacanciesInstallerImportantForUs = `
 - Досвід роботи з монтажу та сервісного обслуговування.
 - Напрацьовані навички роботи з системами кондиціонування та вентиляції різного рівня складності.
 - Клієнтоорієнтованість, гнучкість, професіоналізм.
 - Відсутність шкідливих звичок.
 - Орієнтованість на результат.
`;
const vacanciesInstallerRequirements = `
 - Виконання робіт з монтажу систем вентиляції та кондиціонування повітря.
 - Проведення сервісного та технічного обслуговування систем вентиляції та кондиціонування різного рівня складності.
`;
const vacanciesInstallerWeOffer = `
 - Гідну заробітну плату, виплата регулярно 2 рази на місяць.
 - Офіційне працевлаштування.
 - Робота в дружньому колективі професіоналів, корпоративні заходи.
 - Можливість навчання та підвищення кваліфікації в команді однодумців.
`;
const vacanciesInstallerJobBoards = `
- [Work UA](https://www.work.ua/employer/my/jobs/view/1612211/)
- [Robota UA](https://robota.ua/my/vacancies/9712329/preview)
`;
// #endregion

// #region hvac design-engineer vacancy
const vacanciesHdeIntroduction = `У зв’язку із розширенням запрошуємо в нашу команду  Інженера-проектувальника систем ОВіК.`;
const vacanciesHdeImportantForUs = `
 - Вища освіта в галузі інженерії (електротехніка, теплотехніка, вентиляція та кондиціонування повітря або схожа).
 - Досвід роботи на аналогічній позиції у сфері кондиціонування, вентиляції, опалення від двох років.
 - Впевнене володіння програмними продуктами для проектування систем ОВіК (AutoCAD, MagiCAD, Revit і т.д.).
 - Глибокі знання технічних стандартів та правил в галузі систем ОВіК.
 - Знання нормативної документації (ДБН, ДСТУ).
 - Наявність сертифікату інженера проектувальника (СС2, СС3) – буде перевагою.
 - Активна життєва позиція, відповідальність та порядність, готовність працювати в команді.
 - Бажання навчатись та підвищувати свій професійний рівень в команді однодумців.
`;
const vacanciesHdeRequirements = `
 - Проектування систем вентиляції, кондиціонування, зволоження, осушення повітря, опалення.
 - Комплексний підхід до підготовки інженерно-технічних рішень та проектів систем опалення, вентиляції та кондиціонування повітря для об’єктів різного рівня складності.
 - Підготовка виконавчої документації.
 - Проведення всіх необхідних розрахунків (повітрообмін, теплотехнічний розрахунок, розрахунок систем кондиціонування).
 - Погодження проектних рішень з замовником. 
 - Авторський нагляд.
`;
const vacanciesHdeWeOffer = `
 - Участь у цікавих проектах різного рівня складності.
 - Офіційне працевлаштування та гідний рівень фінансової мотивації.
 - Навчання та розвиток у команді однодумців.
 - Можливість професійного зростання в команді.
 - Комфортний офіс (чай, кава, солоденьке).
`;
const vacanciesHdeJobBoards = `
- [Work UA](https://www.work.ua/employer/my/jobs/view/3674339/)
- [Robota UA](https://robota.ua/my/vacancies/9639344/preview)
`;
// #endregion

// #endregion

// #region news
const newsHvacInnovationsTitle = `Огляд новітніх технологій HVAC у 2024 році`;
const newsHvacInnovationsContent = `
У 2024 році індустрія опалення, вентиляції та кондиціонування стане свідком значної трансформації завдяки революційним технологіям, розробленим для підвищення комфорту, ефективності та стійкості. Як лідер у цій галузі, компанія ART-COMFORT рада поділитися останніми досягненнями, які формують майбутнє опалення, вентиляції та кондиціонування.

1. **Екологічно чисті холодоагенти** Перехід до екологічно чистих холодоагентів є значним кроком вперед для індустрії опалення, вентиляції та кондиціонування. Ці холодоагенти мають нижчий потенціал глобального потепління (ПГП), що робить їх менш шкідливими для навколишнього середовища, одночасно підвищуючи ефективність системи. Ця зміна має вирішальне значення у боротьбі зі зміною клімату і є позитивним кроком як для галузі, так і для планети [The AC Therapist] (https://theactherapist.com/blog/hvac-innovations/).
2. **Розумні термостати.** Розумні термостати революціонізують домашній комфорт, легко інтегруючись із системами розумного дому, такими як Amazon Echo та Google Home. Ці пристрої дозволяють користувачам керувати своїми системами опалення, вентиляції та кондиціонування за допомогою мобільних додатків або голосових команд, оптимізуючи використання енергії та підвищуючи зручність. Розумні термостати також можуть вивчати вподобання користувачів і автоматично регулювати налаштування для підтримки ідеальних умов у приміщенні [Field Camp] (https://www.fieldcamp.com/blog/new-hvac-technology/), [StartUs Insights] (https://www.startus-insights.com/innovators-guide/hvac-industry-trends/).
3. **Покращення якості повітря в приміщеннях (IAQ).** Зі зростанням усвідомлення важливості якості повітря в приміщеннях у 2024 році з'являться вдосконалені системи очищення та фільтрації повітря. Ці системи використовують фільтри HEPA, активоване вугілля та технологію ультрафіолетового випромінювання для видалення забруднювачів, алергенів і патогенів, забезпечуючи більш здорове середовище для життя. Розумні системи вентиляції також забезпечують постійний приплив свіжого повітря, мінімізуючи втрати енергії [The AC Therapist] (https://theactherapist.com/blog/hvac-trends-2024/), [Facilitiesnet] (https://www.facilitiesnet.com/iaq/article/2024-HVAC-Trends-Sustainability-Filtration-and-Future-Innovations--20090).
4. **Інтеграція IoT та передбачувальне обслуговування.** Інтеграція IoT в системи ОВіК дозволяє здійснювати моніторинг в режимі реального часу та прогнозоване технічне обслуговування. Датчики та аналіз даних допомагають виявити ранні ознаки потенційних проблем, що дає змогу вчасно провести ремонт і скоротити час простою. Це не лише подовжує термін служби систем ОВіК, але й підвищує ефективність та знижує експлуатаційні витрати [StartUs Insights] (https://www.startus-insights.com/innovators-guide/hvac-industry-trends/).
5. **Інноваційні рішення для охолодження.** Кондиціонери, що працюють на льоду, є захоплюючою розробкою в пошуках енергоефективного охолодження. Ці системи заморожують воду на ніч, щоб забезпечити охолодження вдень, значно зменшуючи споживання енергії порівняно з традиційними кондиціонерами. Ця інновація є частиною більш широкої тенденції до стійких рішень в галузі опалення, вентиляції та кондиціонування.

В ART-COMFORT ми прагнемо залишатися в авангарді цих технологічних досягнень. Наша мета - надати нашим клієнтам найбільш ефективні, екологічні та інноваційні рішення в галузі опалення, вентиляції та кондиціонування. Залишайтеся з нами на зв'язку, щоб отримувати новини про те, як ми втілюємо ці інновації в життя у ваших будинках і на підприємствах.
Для отримання більш детальної інформації та оновлень про технології HVAC відвідайте наш блог або зв'яжіться з нашою командою експертів.

Йдучи в ногу з цими передовими тенденціями та технологіями, АРТ-КОМФОРТ гарантує, що ми надаємо найвищу якість послуг та найсучасніші системи опалення, вентиляції та кондиціонування повітря для наших шановних клієнтів. Разом ми можемо створити більш стійке та комфортне майбутнє.
`;

const newsSeasonalRecommendationsTitle = `Сезонні рекомендації: Підготовка систем HVAC до різних сезонів`;
const newsSeasonalRecommendationsContent = `
Зміна сезонів вимагає відповідної підготовки систем опалення, вентиляції та кондиціонування повітря (HVAC), щоб забезпечити їхню ефективну та безперебійну роботу. Своєчасне обслуговування допомагає уникнути несправностей, знижує витрати на енергію та подовжує термін служби вашого обладнання. ART-COMFORT ділиться кількома корисними порадами щодо підготовки вашої системи HVAC до літнього та зимового сезонів.

*Підготовка до літнього сезону*

1. **Перевірка та очищення повітряних фільтрів**: Регулярно перевіряйте та очищуйте фільтри або замінюйте їх кожні 1-2 місяці. Забруднені фільтри можуть знижувати ефективність системи та призводити до перегрівання.
2. **Очищення конденсаторних котушок**: Очистіть котушки від пилу та бруду, щоб забезпечити ефективну роботу кондиціонера.
3. **Перевірка термостату**: Переконайтеся, що термостат працює правильно. Розгляньте можливість встановлення програмованого або розумного термостату для додаткової економії енергії.
4. **Огляд вентиляційних отворів**: Переконайтеся, що вентиляційні отвори не заблоковані меблями або іншими предметами, щоб забезпечити належний потік повітря.


*Підготовка до зимового сезону*

1. **Очищення або заміна фільтрів**: Очищуйте або замінюйте фільтри кожні 1-2 місяці для забезпечення ефективної роботи системи.
2. **Перевірка герметичності повітроводів**: Переконайтеся, що повітроводи не мають витоків, щоб уникнути втрат тепла та зниження ефективності опалення.
3. **Огляд та очищення котлів**: Регулярне обслуговування котлів допоможе уникнути несправностей та забезпечити безперебійну роботу в холодну пору року.
4. **Калібрування термостату**: Перевірте налаштування термостату для оптимального нагрівання та зниження витрат на енергію.


*Переваги регулярного обслуговування системи HVAC*
1. **Підвищення комфорту**: Забезпечення рівномірного розподілу температури у вашому домі.
2. **Зниження енергоспоживання**: Ефективне використання енергії зменшує витрати на комунальні послуги.
3. **Подовження терміну служби системи**: Регулярне обслуговування запобігає серйозним поломкам та передчасному виходу з ладу обладнання.
4. **Покращення якості повітря в приміщеннях**: Чисті фільтри та належне обслуговування сприяють кращій якості повітря в домі.



Для отримання професійної допомоги та детальніших рекомендацій щодо підготовки вашої системи HVAC до сезонних змін, звертайтеся до наших фахівців ART-COMFORT. Ми гарантуємо якісне обслуговування та надійність вашого обладнання протягом усього року.
`;

// #endregion news

export const ua: TranslationType = {
  general: {
    contactUs: 'Звʼязатись з нами',
    exploreDetails: 'Детальніше',
    backToMain: 'Повернутись на головну',
    backToList: 'Повернутись до списку',
  },
  header: {
    about: 'Про нас',
    aboutTooltip: '',
    services: 'Послуги',
    servicesTooltip: '',
    projects: 'Проєкти',
    projectsTooltip: '',
    contacts: 'Контакти',
    contactsTooltip: '',
    careers: 'Вакансії',
    carrersTooltip: '',
    news: 'Новини',
    newsTooltip: '',
  },
  welcome: {
    title: 'Досліджуй справжнє мистецтво ідеального клімату з',
    titleNaming: 'Арт-Комфорт',
    subtitle:
      'Абсолютний лідер в сфері кондиціонування та вентиляції вже більше 18-ти років',
    servicesLabel: 'Детальніше про послуги',
  },
  services: {
    title: 'Послуги HVAC',
    design: {
      title: 'Проектування',
      description:
        'Відкрийте для себе індивідуальні рішення HVAC за допомогою наших послуг з проектування. Наша команда експертів забезпечить оптимальну продуктивність та комфорт вашого простору, використовуючи передові технології та найкращі галузеві практики. Зв’яжіться з нами, щоб обговорити ваш проєкт сьогодні!',
      longDescription: designServiceLongDescriptionMarkdown,
    },
    supply: {
      title: 'Постачання',
      description:
        "Насолоджуйтесь безперебійним постачанням систем опалення, вентиляції та кондиціонування з нашими послугами з постачання. Ми надаємо високоякісне обладнання та матеріали для забезпечення ефективності та довговічності вашої системи. Зв'яжіться з нами сьогодні, щоб розпочати роботу!",
      longDescription: supplyServiceLongDescriptionMarkdown,
    },
    installation: {
      title: 'Встановлення',
      description:
        'Отримайте професійне встановлення HVAC за допомогою наших послуг з встановлення. Наші досвідчені техніки забезпечать точне та ефективне встановлення, щоб ви могли насолоджуватися надійним комфортом у вашому просторі. Зв’яжіться з нами, щоб запланувати встановлення сьогодні!',
      longDescription: installationServiceLongDescriptionMarkdown,
    },
    maintenance: {
      title: 'Технічне обслуговування',
      description:
        'Забезпечте безперебійну роботу вашої системи HVAC за допомогою наших послуг з технічного обслуговування та підтримки. Наша команда пропонує регулярне технічне обслуговування та надійну підтримку, щоб ваша система працювала ефективно протягом усього року. Зв’яжіться з нами, щоб дізнатися більше про наші плани технічного обслуговування!',
      longDescription: maintenanceServiceLongDescriptionMarkdown,
    },
    exploreServices: 'Дізнайтеся більше про послуги',
  },
  projects: {
    title: 'Проєкти',
    ventilation: {
      title: 'Вентиляція',
      description: 'Свіже повітря цілий рік завдяки нашим експертним рішенням',
      longDescription:
        'Наші проєкти з вентиляції спрямовані на забезпечення свіжого та чистого повітря у вашому просторі протягом усього року. Ми розробляємо та впроваджуємо високоефективні вентиляційні системи, які відповідають найвищим стандартам якості та ефективності. Наші рішення допомагають знизити рівень забруднення повітря, видаляючи пил, алергени та інші шкідливі частинки. Завдяки нашим сучасним технологіям та професійному підходу, ми створюємо здорове та комфортне середовище для вас і вашої родини чи колективу. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт вентиляції.',
    },
    airConditioning: {
      title: 'Кондиціонування',
      description: 'Прохолода цілий рік завдяки нашим експертним рішенням',
      longDescription:
        'Наші проєкти з кондиціонування спрямовані на забезпечення оптимальної прохолоди у вашому просторі протягом усього року. Ми пропонуємо індивідуальні рішення для різних типів будівель, враховуючи всі аспекти, від площі до кліматичних умов. Наші системи кондиціонування забезпечують ефективне охолодження, мінімізуючи енергоспоживання та витрати. Завдяки нашим професійним установникам та високоякісному обладнанню, ви отримаєте надійну та довговічну систему кондиціонування, яка підтримуватиме комфортну температуру навіть у найспекотніші дні. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт кондиціонування.',
    },
    heating: {
      title: 'Опалення',
      description: 'Тепло та комфорт завдяки нашим експертним рішенням',
      longDescription:
        'Наші проєкти з опалення спрямовані на забезпечення затишку та тепла у вашому просторі протягом усього року. Ми пропонуємо інноваційні рішення для опалення, які забезпечують рівномірне та ефективне розподілення тепла у всіх приміщеннях. Наші системи опалення допомагають знизити енергетичні витрати та підвищити ефективність використання енергії, що робить ваш будинок або офіс більш екологічно чистим. З нашими досвідченими техніками та якісним обладнанням ви зможете насолоджуватися теплом та комфортом навіть у найхолодніші дні. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт опалення.',
    },
    airPurifying: {
      title: 'Фільтрація повітря',
      description: 'Дихайте легше завдяки нашим сучасним системам',
      longDescription:
        'Наші проєкти з очищення повітря спрямовані на створення здорового та чистого середовища у вашому просторі. Ми використовуємо передові технології для видалення забруднюючих речовин, алергенів та мікроорганізмів з повітря, що допомагає покращити якість повітря та зменшити ризик респіраторних захворювань. Наші системи очищення повітря ефективні та енергоощадні, забезпечуючи вам максимальний комфорт та безпеку. Завдяки нашому професійному підходу та високоякісному обладнанню, ви зможете насолоджуватися свіжим та чистим повітрям у вашому домі чи офісі. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт очищення повітря.',
    },
    waterTreatment: {
      title: 'Сушіння повітря',
      description: 'Чиста та безпечна вода завдяки нашим ефективним рішенням',
      longDescription:
        'Наші проєкти з очищення води спрямовані на забезпечення вас чистою та безпечною водою для всіх ваших потреб. Ми пропонуємо індивідуальні рішення для очищення води, які включають видалення забруднюючих речовин, хімічних домішок та мікроорганізмів. Наші системи очищення води забезпечують високу якість та безпеку води, що підходить для пиття, приготування їжі та інших побутових потреб. Завдяки нашому досвіду та передовим технологіям, ми можемо забезпечити надійне та ефективне очищення води, яке відповідає вашим потребам. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт очищення води.',
    },
    airHumidifying: {
      title: 'Зволоження повітря',
      description: 'Ідеальний рівень вологості для максимального комфорту',
      longDescription:
        'Наші проєкти з зволоження повітря спрямовані на забезпечення оптимального рівня вологості у вашому просторі, що допомагає покращити якість повітря та створити комфортні умови для життя та роботи. Ми використовуємо передові системи зволоження, які рівномірно розподіляють вологу по всіх приміщеннях, запобігаючи пересушуванню повітря та поліпшуючи загальний мікроклімат. Наші рішення підходять для різних типів будівель та забезпечують енергоефективне використання ресурсів. Завдяки нашому професійному підходу та високоякісному обладнанню, ви зможете насолоджуватися комфортом та здоровим середовищем у вашому домі чи офісі. Зв’яжіться з нами сьогодні, щоб обговорити ваш проєкт зволоження повітря.',
    },
    showAllProjects: 'Переглянути всі проєкти',
  },
  statistics: {
    experience: 'Років досвіду',
    projects: 'Успішно завершених проєктів',
    clients: 'Постійних клієнтів',
  },
  team: {
    title: 'Наша команда',
  },
  news: {
    title: 'Новини',
    showAll: 'Переглянути всі новини',
    pageTitle: 'Список новин',
    // innovations
    newsHvacInnovationsTitle,
    newsHvacInnovationsContent,
    // seasonal
    newsSeasonalRecommendationsTitle,
    newsSeasonalRecommendationsContent,
  },
  contacts: {
    title: 'Контакти',
    contactUsDirectly: 'Зв’яжіться з нами напряму',
    leaveRequest: 'Залишити запит',
    locationLabel: 'вул. Берковецька 6а, м. Київ',
  },
  form: {
    name: {
      label: 'Ім’я',
      error: "Будь ласка, введіть ваше ім'я",
    },
    email: {
      label: 'Ел. пошта',
      error: 'Будь ласка, введіть ваш email',
      invalidError: 'Йой, здається десь є помилка',
    },
    phone: {
      label: 'Номер телефону (+380)',
      error: 'Будь ласка, введіть ваш телефон',
    },
    message: {
      label: 'Повідомлення',
    },
    motivationMessage: {
      label: 'Чому ви хочете працювати в Art-Comfort?',
      error: 'Будь ласка, розкажіть, чому ви хочете працювати з нами',
    },
    files: {
      label: 'Прикріпити файли',
    },
    send: 'Відправити',
  },
  vacancies: {
    openPositions: 'Відкриті позиції',
    searchVacanciesPlaceholder: 'Пошук вакансії',
    vacancyNamePlaceholder: 'Назва вакансії',
    vacancyLocationPlaceholder: 'Локація',
    importantForUsLabel: 'Що для нас важливо?',
    requirementsLabel: 'Обовʼязки',
    hrData: 'Ялтухова Тетяна, менеджер з підбору персоналу:',
    weOfferLabel: 'Що ми пропонуємо найкращому кандидату?',
    jobBoardsLabel: 'Ми на сайтах пошуку роботи',
    baseIntroduction: vacanciesSingleBaseIntroduction,
    // projectsLead
    projectsLeadLabel: 'Керівник проетків',
    projectsLeadIntroduction: vacanciesProjectsLeadIntroduction,
    projectsLeadImportantForUs: vacanciesProjectsLeadImportantForUs,
    projectsLeadRequirements: vacanciesProjectsLeadRequirements,
    projectsLeadWeOffer: vacanciesProjectsLeadWeOffer,
    projectsLeadJobBoards: vacanciesProjectsLeadJobBoards,
    // marketer
    marketerLabel: 'Маркетолог на сайт',
    marketerIntroduction: vacanciesMarketerIntroduction,
    marketerImportantForUs: vacanciesMarketerImportantForUs,
    marketerRequirements: vacanciesMarketerRequirements,
    marketerWeOffer: vacanciesMarketerWeOffer,
    marketerJobBoards: vacanciesMarketerJobBoards,
    // customer service manager
    csmLabel: 'Менеджер по роботі з клієнтами',
    csmIntroduction: vacanciesCsmIntroduction,
    csmImportantForUs: vacanciesCsmImportantForUs,
    csmRequirements: vacanciesCsmRequirements,
    csmWeOffer: vacanciesCsmWeOffer,
    csmJobBoards: vacanciesCsmJobBoards,
    // installer
    installerLabel: 'Монтажник систем вентиляції та кондиціонування повітря',
    installerIntroduction: vacanciesInstallerIntroduction,
    installerImportantForUs: vacanciesInstallerImportantForUs,
    installerRequirements: vacanciesInstallerRequirements,
    installerWeOffer: vacanciesInstallerWeOffer,
    installerJobBoards: vacanciesInstallerJobBoards,
    // hvac design engineer
    hdeLabel: 'Інженер-проєктувальник систем ОВіК',
    hdeIntroduction: vacanciesHdeIntroduction,
    hdeImportantForUs: vacanciesHdeImportantForUs,
    hdeRequirements: vacanciesHdeRequirements,
    hdeWeOffer: vacanciesHdeWeOffer,
    hdeJobBoards: vacanciesHdeJobBoards,
  },
  about: {
    licensesTitle: 'Ліцензії та сертифікати',
    aboutUsContent: aboutUsContentMarkdown,
    missionContent: missionContentMarkdown,
    visionContent: visionContentMarkdown,
    whyWeContent: whyWeContentMarkdown,
    servicesContent: servicesContentMarkdown,
    teamContent: teamContentMarkdown,
    ourValuesContent: ourValuesContentMarkdown,
  },
};
