import { useLocale } from '@/utils/locales';

export const DesignService = () => {
  const { locale } = useLocale();
  if (locale.value === 'en') {
    return (
      <div className=''>
        <p className='mt-4'>
          Design is the foundation on which the success of any engineering
          project is built. At <strong>ART-COMFORT</strong>, we transform
          complex technical tasks into perfect engineering solutions, adapted to
          customer needs and modern standards.
        </p>
        <div className='mt-4'>
          <p className=''>We design systems:</p>
          <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
            <li className='mt-2'>
              <strong>HVAC</strong> (Heating, Ventilation, Air Conditioning):
              for complex premises, including clean rooms of pharmaceutical
              production.
            </li>
            <li className=''>
              <strong>Building Management Systems (BMS)</strong>: integration of
              climate control, energy consumption and security into a single
              management system.
            </li>
            <li>
              <strong>Security Systems</strong>: video surveillance projects,
              access control, alarm systems.
            </li>
            <li>
              <strong>Water supply and wastewater</strong>: efficient solutions
              for water supply and purification.
            </li>
            <li>
              <strong>Electrical systems</strong>: lighting, power supply and
              process automation design.
            </li>
          </ul>
        </div>
        <div className='mt-4'>
          <p>Our key advantages:</p>
          <ol className='ml-8 flex list-decimal flex-col gap-2 text-sm'>
            {/* Experience and reliability */}
            <li className='mt-2'>
              <strong>Experience and reliability</strong>
              <p className='mt-2'>
                We have many years of experience in implementing projects for
                such customers as:
              </p>
              <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
                <li className='mt-2'>
                  <i className='font-semibold'>PJSC "PHARMAK"</i> – projects for
                  cleanrooms of pharmaceutical production.
                </li>
                <li>
                  <i className='font-semibold'>State Service of Medicines</i> –
                  design of laboratory systems.
                </li>
                <li>
                  <i className='font-semibold'> PAO "Ukrtelecom"</i> –
                  large-scale HVAC systems for administrative buildings.
                </li>
                <li>
                  <i className='font-semibold'>
                    Foreign enterprise "1+1 PRODUCTION"
                  </i>{' '}
                  – innovative solutions for studio complexes.
                </li>
                <li>
                  <i className='font-semibold'>
                    Kyiv City State Administration
                  </i>{' '}
                  – automation of administrative facilities.
                </li>
              </ul>
            </li>
            {/* Innovational instruments */}
            <li className=''>
              <strong>Innovative instruments</strong>
              <p className='mt-2'>Our designers work using modern programs:</p>
              <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
                <li className='mt-2'>
                  <i className='font-semibold'>Revit</i> – for creating 3D
                  models and precise engineering solutions.
                </li>
                <li>
                  <i className='font-semibold'>AutoCAD</i> – for detailed
                  drawings and documentation.
                </li>
                <li>
                  <i className='font-semibold'>Magicad</i> – for modeling
                  engineering networks in the BIM environment.
                </li>
              </ul>
              <p className='mt-2'>
                This allows us to achieve maximum accuracy and take into account
                all the nuances of the project.
              </p>
            </li>
            {/* Energy efficiency and comfort */}
            <li className=''>
              <strong> Energy efficiency and comfort</strong>
              <p className='mt-2'>
                Our solutions provide an optimal indoor climate and minimize
                operating costs. We integrate heat recovery systems that
                significantly reduce energy consumption even in the most
                difficult conditions.
              </p>
            </li>
            {/* Individual approach */}
            <li className=''>
              <strong>Individual approach</strong>
              <p className='mt-2'>
                We adapt each project to the specifics of the facility, taking
                into account its purpose, functionality and budget.
              </p>
              <hr className='my-2 w-10/12' />
              <p>How do we work?</p>
              <ol className='ml-8 flex list-decimal flex-col gap-2 text-sm'>
                <li className='mt-2'>
                  <i className='font-semibold'>Object analysis: </i> we evaluate
                  the technical features and needs of the customer.
                </li>
                <li>
                  <i className='font-semibold'>Concept: </i> we develop optimal
                  engineering solutions.
                </li>
                <li>
                  <i className='font-semibold'>Design: </i> we create drawings
                  and models that meet standards.
                </li>
                <li>
                  <i className='font-semibold'>Support: </i> we provide
                  consultations and support at all stages of project
                  implementation.
                </li>
                <li>
                  <i className='font-semibold'>
                    Kyiv City State Administration
                  </i>{' '}
                  – automation of administrative facilities.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  return (
    <div className=''>
      <p className='mt-4'>
        Проектування – це фундамент, на якому будується успіх будь-якого
        інженерного проекту. У компанії <strong>АРТ-КОМФОРТ</strong> ми
        перетворюємо складні технічні завдання на досконалі інженерні рішення,
        адаптовані до потреб клієнтів і сучасних стандартів.
      </p>
      <div className='mt-4'>
        <p className=''>Ми проектуємо системи:</p>
        <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
          <li className='mt-2'>
            <strong>ОВІК</strong> (опалення, вентиляція, кондиціонування
            повітря) для складних приміщень, включаючи чисті приміщення
            фармацевтичних виробництв.
          </li>
          <li className=''>
            <strong>Автоматизації будівель (BMS)</strong>: інтеграція
            клімат-контролю, енергоспоживання та безпеки в єдину систему
            управління.
          </li>
          <li>
            <strong>Систем безпеки </strong>: проекти відеоспостереження,
            контролю доступу, систем сигналізації.
          </li>
          <li>
            <strong>Водопостачання та водовідведення</strong>: ефективні рішення
            для постачання та очищення води.
          </li>
          <li>
            <strong>Електротехнічних систем</strong>: проектування освітлення,
            енергопостачання та автоматизації процесів.
          </li>
        </ul>
      </div>
      <div className='mt-4'>
        <p>Наші ключові переваги:</p>
        <ol className='ml-8 flex list-decimal flex-col gap-2 text-sm'>
          {/* Experience and reliability */}
          <li className='mt-2'>
            <strong>Досвід і надійність</strong>
            <p className='mt-2'>
              Ми маємо багаторічний досвід у реалізації проектів для таких
              замовників, як:
            </p>
            <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
              <li className='mt-2'>
                <i className='font-semibold'>ПАО «ФАРМАК»</i> – проекти для
                чистих приміщень фармацевтичного виробництва.
              </li>
              <li>
                <i className='font-semibold'>
                  Державна служба лікарських засобів
                </i>{' '}
                – проектування лабораторних систем.
              </li>
              <li>
                <i className='font-semibold'> ПАО «Укртелеком»</i> – масштабні
                системи ОВІК для адміністративних будівель.
              </li>
              <li>
                <i className='font-semibold'>
                  Іноземне підприємство «1+1 ПРОДАКШН»
                </i>{' '}
                – інноваційні рішення для студійних комплексів.
              </li>
              <li>
                <i className='font-semibold'>
                  Київська міська Державна адміністрація
                </i>{' '}
                – автоматизація адміністративних об’єктів.
              </li>
            </ul>
          </li>
          {/* Innovational instruments */}
          <li className=''>
            <strong>Інноваційні інструменти</strong>
            <p className='mt-2'>
              Наші проектанти працюють із використанням сучасних програм:
            </p>
            <ul className='ml-8 flex list-disc flex-col gap-2 text-sm'>
              <li className='mt-2'>
                <i className='font-semibold'>Revit</i> – для створення
                3D-моделей і точних інженерних рішень.
              </li>
              <li className='font-semibold'>
                <i>AutoCAD</i> – для деталізованих креслень та документації.
              </li>
              <li className='font-semibold'>
                <i>Magicad</i> – для моделювання інженерних мереж у
                BIM-середовищі.
              </li>
            </ul>
            <p className='mt-2'>
              Це дозволяє нам досягати максимальної точності та враховувати всі
              нюанси проекту.
            </p>
          </li>
          {/* Енергоефективність та комфорт */}
          <li className=''>
            <strong> Енергоефективність та комфорт</strong>
            <p className='mt-2'>
              Наші рішення забезпечують оптимальний мікроклімат у приміщеннях та
              мінімізують витрати на експлуатацію. Ми інтегруємо системи
              рекуперації тепла, які значно знижують енерговитрати навіть у
              найскладніших умовах.
            </p>
          </li>
          {/* Індивідуальний підхід */}
          <li className=''>
            <strong>Індивідуальний підхід</strong>
            <p className='mt-2'>
              Ми адаптуємо кожен проект до особливостей об’єкта, враховуючи його
              призначення, функціональність і бюджет.
            </p>
            <hr className='my-2 w-10/12' />
            <p>Як ми працюємо?</p>
            <ol className='ml-8 flex list-decimal flex-col gap-2 text-sm'>
              <li className='mt-2'>
                <i className='font-semibold'>Аналіз об’єкта: </i> оцінюємо
                технічні особливості та потреби замовника.
              </li>
              <li>
                <i className='font-semibold'>Концепція: </i> розробляємо
                оптимальні інженерні рішення.
              </li>
              <li>
                <i className='font-semibold'>Проектування: </i> створюємо
                креслення та моделі, які відповідають стандартам.
              </li>
              <li>
                <i className='font-semibold'>Підтримка: </i>забезпечуємо
                консультації та супровід на всіх етапах реалізації проекту.
              </li>
              <li>
                <i className='font-semibold'>
                  Київська міська Державна адміністрація
                </i>{' '}
                – автоматизація адміністративних об’єктів.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export const SupplyService = () => {
  const { locale } = useLocale();
  if (locale.value === 'en') {
    return (
      <div className=''>
        <p className='mt-4'>
          On every major construction project, there comes a point when
          everything depends on the equipment: its quality, reliability and
          suitability for the tasks. It's like choosing an engine for a racing
          car - any mistake can stop the movement. At{' '}
          <strong>ART-COMFORT</strong>, we know the price of each part.
          Therefore, our supply of equipment is not just buying and selling, it
          is high-precision engineering work, supported by experience and
          technology.
        </p>
        <p className='mt-2'>
          We work only with leading brands such as{' '}
          <strong>
            Mitsubishi Electric, Daikin, Systemair, Carel, Zanotti,
          </strong>{' '}
          and visit their factories to understand all the possibilities and
          innovations. Did you know that, for example, <strong>Daikin</strong>{' '}
          chillers use the latest environmental technologies to reduce energy
          consumption? We know this because we have seen these systems in
          action.
        </p>
        <p className='mt-2'>
          Now imagine the international exhibition <strong>ISH</strong>:
          engineers from all over the world, modern stands with innovative
          equipment, new models that have not yet hit the market. We are always
          there, because only in this way can we guarantee that your project
          will get the best.
        </p>
        <hr className='my-4' />
        <p>What do we supply?</p>
        <ol className='ml-4 mt-2 flex list-decimal flex-col gap-2 text-sm'>
          <li className=''>
            <p>Air conditioners for any task:</p>
            <p className='mt-2'>
              From standard systems for offices to precision solutions for
              server rooms. Our range includes brands trusted by the whole
              world:
            </p>
            <ul className='ml-4 mt-2 list-disc'>
              <li>
                <strong>Mitsubishi Electric, Daikin, Lessar, Sakata</strong> –
                perfect comfort in any room.
              </li>
              <li>
                Precision air conditioners{' '}
                <strong>Emerson Network Power, Emicon</strong> – for where the
                climate must be under full control.
              </li>
            </ul>
            <p className='mt-2'>
              Ventilation – a breath of fresh air for your facility:
            </p>
            <p className='mt-2'>
              We supply ventilation systems{' '}
              <strong>Daikin, Systemair, REMAK,</strong>, which not only renew
              the air, but also make it healthy and energy-efficient.
            </p>
          </li>
          <li>
            <p>Industrial refrigeration:</p>
            <p className='mt-2'>
              Systems for food storage, production or specialized premises:
            </p>
            <ul className='ml-4 list-disc'>
              <li className='mt-2'>
                Monoblocks and split systems <strong>Zanotti</strong> – for wine
                cellars and sausage production.
              </li>
              <li>
                Chillers and fan coils{' '}
                <strong>Daikin, Systemair, Liebert, Emicon</strong> – for
                large-scale projects.
              </li>
            </ul>
          </li>
          <li>
            <p>Air humidification and dehumidification:</p>
            <ul className='ml-4 list-disc'>
              <li className='mt-2'>
                <strong>Carel</strong> humidifiers – the best solutions for
                precise climate control.
              </li>
              <li>
                <strong>Dantherm, HB COTES</strong> dehumidifiers – maintain
                humidity balance even in difficult conditions.
              </li>
            </ul>
          </li>
        </ol>
        <hr className='my-4' />
        <p>How do we do it?</p>
        <ol className='ml-4 mt-2 list-decimal text-sm'>
          <li>
            <p>Deep understanding of equipment</p>
            <p className='ml-4'>
              We know every air conditioner, chiller or humidifier not from
              advertising brochures, but from real factories. Visiting
              manufacturers, testing equipment, meeting engineers is part of our
              work.
            </p>
          </li>
          <li>
            <p>Cooperation with the best brands</p>
            <p className='ml-4'>
              We work only with proven suppliers, such as Mitsubishi Electric,
              Daikin, Systemair, so that you get equipment that will last for
              years.
            </p>
          </li>
          <li>
            <p>Individual approach to your project</p>
            <p className='ml-4'>
              We don't just sell equipment - we help you choose exactly what is
              ideal for your conditions. Do you need ventilation for a
              restaurant or an air conditioning system for a pharmaceutical
              laboratory? We will find a solution.
            </p>
          </li>
        </ol>
        <hr className='my-4' />
        <p>Our references:</p>
        <p className='mt-2'>
          We have already supplied equipment for such facilities as:
        </p>
        <ul className='ml-4 flex list-disc flex-col text-sm'>
          <li>
            <strong>PAO "FARMAK"</strong> – pharmaceutical complexes with unique
            conditions.
          </li>
          <li>
            <strong>SE "Ukrspetsexport"</strong> – systems for strategic
            state-owned enterprises.
          </li>
          <li>
            <strong>Kyiv City State Administration</strong> – large-scale
            ventilation and automation projects.
          </li>
          <li>
            <strong>Restaurant "Polissya"</strong> – innovative solutions for
            comfortable rest.
          </li>
        </ul>
        <hr className='my-4' />
        <p>Why choose us?</p>
        <p className='mt-2'>
          Because we don't just deliver equipment. We deliver quality,
          innovation and the confidence that your system will work like a Swiss
          watch. With us, your project will receive the best - from a humidifier
          to a complex automation system.
        </p>

        <p className='mt-2'>
          <strong>ART-COMFORT</strong> is your partner in the world of the most
          modern equipment. Ready to get started?
        </p>
      </div>
    );
  }
  return (
    <div className=''>
      <p className='mt-4'>
        На кожному великому будівельному проекті є той момент, коли все залежить
        від обладнання: його якості, надійності та відповідності задачам. Це як
        вибрати двигун для гоночного авто – будь-яка помилка може зупинити рух.
        У компанії <strong>АРТ-КОМФОРТ</strong> ми знаємо ціну кожної деталі.
        Тому наше постачання обладнання – це не просто купівля-продаж, це
        високоточна інженерна робота, підтримана досвідом і технологіями.
      </p>
      <p className='mt-2'>
        Ми працюємо тільки з провідними брендами, такими як{' '}
        <strong>Mitsubishi Electric, Daikin, Systemair, Carel, Zanotti,</strong>{' '}
        і відвідуємо їхні заводи, щоб розуміти всі можливості та інновації. Ви
        знали, що, наприклад, чилери <strong>Daikin</strong> використовують
        новітні екологічні технології для зниження енерговитрат? Ми це знаємо,
        бо бачили ці системи в дії.
      </p>
      <p className='mt-2'>
        А тепер уявіть міжнародну виставку <strong>ISH</strong>: інженери з
        усього світу, сучасні стенди з інноваційним обладнанням, нові моделі,
        які ще не потрапили на ринок. Ми там завжди, бо тільки так можна
        гарантувати, що ваш проект отримає найкраще.
      </p>
      <hr className='my-4' />
      <p>Що ми постачаємо?</p>
      <ol className='ml-4 mt-2 flex list-decimal flex-col gap-2 text-sm'>
        <li className=''>
          <p>Кондиціонери для будь-яких задач:</p>
          <p className='mt-2'>
            Від стандартних систем для офісів до прецизійних рішень для
            серверних приміщень. У нашому асортименті – бренди, яким довіряє
            весь світ:
          </p>
          <ul className='ml-4 mt-2 list-disc'>
            <li>
              <strong>Mitsubishi Electric, Daikin, Lessar, Sakata</strong> –
              ідеальний комфорт у будь-якому приміщенні.
            </li>
            <li>
              Прецизійні кондиціонери{' '}
              <strong>Emerson Network Power, Emicon</strong> – для там, де
              клімат має бути під повним контролем.
            </li>
          </ul>
          <p className='mt-2'>Вентиляція – свіже дихання для вашого об’єкта:</p>
          <p className='mt-2'>
            Ми постачаємо вентиляційні системи{' '}
            <strong>Daikin, Systemair, РЕМАК,</strong> які не просто оновлюють
            повітря, а роблять його здоровим та енергоефективним.
          </p>
        </li>
        <li>
          <p>Промисловий холод:</p>
          <p className='mt-2'>
            Системи для зберігання продуктів харчування, виробництва чи
            спеціалізованих приміщень:
          </p>
          <ul className='ml-4 list-disc'>
            <li className='mt-2'>
              Моноблоки та спліт-системи <strong>Zanotti</strong> – для винних
              погребів та ковбасних виробництв.
            </li>
            <li>
              Чилери та фанкойли{' '}
              <strong>Daikin, Systemair, Liebert, Emicon</strong> – для
              масштабних проектів.
            </li>
          </ul>
        </li>
        <li>
          <p>Зволоження та осушення повітря:</p>
          <ul className='ml-4 list-disc'>
            <li className='mt-2'>
              Зволожувачі <strong>Carel</strong> – найкращі рішення для точного
              клімат-контролю.
            </li>
            <li>
              Осушувачі <strong>Dantherm, HB COTES</strong> – підтримують баланс
              вологості навіть у складних умовах.
            </li>
          </ul>
        </li>
      </ol>
      <hr className='my-4' />
      <p>Як ми це робимо?</p>
      <ol className='ml-4 mt-2 list-decimal text-sm'>
        <li>
          <p>Глибоке розуміння обладнання</p>
          <p className='ml-4'>
            Кожен кондиціонер, чилер чи зволожувач ми знаємо не з рекламних
            буклетів, а з реальних заводів. Відвідування виробників, тестування
            обладнання, знайомство з інженерами – це частина нашої роботи.
          </p>
        </li>
        <li>
          <p>Співпраця з найкращими брендами</p>
          <p className='ml-4'>
            Ми працюємо тільки з перевіреними постачальниками, такими як
            Mitsubishi Electric, Daikin, Systemair, щоб ви отримували
            обладнання, яке прослужить роки.
          </p>
        </li>
        <li>
          <p>Індивідуальний підхід до вашого проект</p>
          <p className='ml-4'>
            Ми не просто продаємо обладнання – ми допомагаємо обрати саме те, що
            ідеально підійде для ваших умов. Потрібна вентиляція для ресторану
            чи система кондиціонування для фармацевтичної лабораторії? Ми
            знайдемо рішення.
          </p>
        </li>
      </ol>
      <hr className='my-4' />
      <p>Наші референції:</p>
      <p className='mt-2'>
        Ми вже постачали обладнання для таких об’єктів, як:
      </p>
      <ul className='ml-4 flex list-disc flex-col text-sm'>
        <li>
          <strong>ПАО «ФАРМАК»</strong> – фармацевтичні комплекси з унікальними
          умовами.
        </li>
        <li>
          <strong>ГП «Укрспецекспорт»</strong> – системи для стратегічних
          державних підприємств.
        </li>
        <li>
          <strong>Київська міська державна адміністрація</strong> – масштабні
          проекти вентиляції та автоматизації.
        </li>
        <li>
          <strong>Ресторан «Полісся»</strong> – інноваційні рішення для
          комфортного відпочинку.
        </li>
      </ul>
      <hr className='my-4' />
      <p>Чому обирають нас?</p>
      <p className='mt-2'>
        Бо ми не просто доставляємо обладнання. Ми доставляємо якість, інновації
        та впевненість у тому, що ваша система буде працювати як швейцарський
        годинник. З нами ваш проект отримає все найкраще – від зволожувача до
        складної системи автоматизації.
      </p>

      <p className='mt-2'>
        <strong>АРТ-КОМФОРТ</strong> – ваш партнер у світі найсучаснішого
        обладнання. Готові почати?
      </p>
    </div>
  );
};

export const InstallationService = () => {
  const { locale } = useLocale();
  if (locale.value === 'en') {
    return (
      <div className=''>
        <p className='mt-2'>
          System installation is the moment when a project from drawings and
          models begins to turn into reality. But to do the installation
          correctly is like to perform jewelry work: each element must be in its
          place, otherwise the whole mechanism will not work. At{' '}
          <strong>ART-COMFORT</strong> we know that even the smallest detail
          matters
        </p>
        <p className='mt-2'>
          Our installers are true masters of their craft. They don't just
          install equipment, but do it with precision that ensures the
          durability and efficiency of the system. We work with systems of any
          complexity:
        </p>
        <ul className='ml-4 list-disc'>
          <li>
            From standard ventilation systems for offices to full-fledged HVAC
            systems for industrial facilities.
          </li>
          <li>
            From basic air conditioner installation to installation of complex
            building automation systems (BMS).
          </li>
          <li>
            From installation of heat pumps to complex projects with heat
            recovery.
          </li>
        </ul>
        <hr className='my-4' />
        <p>Our expertise:</p>
        <ol className='ml-4 list-decimal'>
          <li>
            <p>Certificates and licenses</p>
            <p className='mt-2'>
              We not only promise quality, but also guarantee it with the
              appropriate documents. We have all the necessary certificates,
              including:
            </p>
            <ul className='ml-4 list-disc text-sm'>
              <li className='font-bold'>Licenses for installation work.</li>
              <li>
                <strong>
                  Permit to perform hazardous work from the State Service for
                  the Supervision of Agricultural and Rural Development.
                </strong>{' '}
                This means that even the most complex and risky tasks are in
                safe hands.
              </li>
            </ul>
          </li>
          <li>
            <p>Installation of any complexity</p>
            <p>We can handle any task:</p>
            <ul className='ml-4 list-disc text-sm'>
              <li>
                Simple installation of air conditioners or ventilation systems
                for small offices or restaurants.
              </li>
              <li>
                Installation of complex automation systems for large
                administrative buildings, such as the Kyiv City State
                Administration.
              </li>{' '}
              <li>
                Complex solutions for pharmaceutical facilities, such as PAO
                "FARMAK".
              </li>
            </ul>
          </li>
          <li>
            Commissioning
            <p className='mt-2'>
              We not only install the equipment, but also launch it, configure
              all systems and check their efficiency. This guarantees flawless
              operation from day one.
            </p>
          </li>
        </ol>
        <hr className='my-4' />
        <p>How do we work?</p>
        <ul className='ml-4 list-disc text-sm'>
          <li>Object analysis</li>
          <li>
            Before starting work, we study all the features of the object in
            order to avoid unforeseen situations.
          </li>
          <li>Installation</li>
          <li>
            We use modern technologies and equipment to perform work at the
            highest level.
          </li>
          <li>Testing and tuning</li>
          <li>We check that each element</li>
          of the system works as it should.
          <li>Commissioning</li>
          <li>
            Our specialists provide full consultation on the operation of the
            system and provide support after installation.
          </li>
        </ul>
        <hr className='my-4' />
        <p>Our references:</p>
        <p className='mt-2'>
          We have already performed installation work for such objects as:
        </p>
        <ul className='ml-4 list-disc text-sm'>
          <li>
            <strong>PAO «FARMAK»</strong> – installation and adjustment of
            complex ventilation systems for clean rooms.
          </li>
          <li>
            <strong>Kyiv City State Administration</strong> – installation of
            automation and climate control systems.
          </li>
          <li>
            <strong>SE «Ukrspetsexport»</strong> – installation of ventilation
            and cooling systems for strategic facilities.
          </li>
          <li>
            <strong>Restaurant «Polissya»</strong> – innovative solutions to
            ensure the comfort of visitors.
          </li>
        </ul>
        <hr className='my-4' />
        <p>
          <strong>ART-COMFORT</strong> is not just installation. It is a
          guarantee that your systems will work like a Swiss watch from day one.
          Are you ready to see the result?
        </p>
      </div>
    );
  }
  return (
    <div className=''>
      <p className='mt-2'>
        Монтаж систем – це той момент, коли проект із креслень і моделей починає
        перетворюватися на реальність. Але зробити монтаж правильно – це як
        виконати ювелірну роботу: кожен елемент має бути на своєму місці, інакше
        весь механізм не запрацює. У компанії <strong>АРТ-КОМФОРТ</strong> ми
        знаємо, що навіть найменша деталь має значення
      </p>
      <p className='mt-2'>
        Наші монтажники – це справжні майстри своєї справи. Вони не просто
        встановлюють обладнання, а роблять це з точністю, яка забезпечує
        довговічність і ефективність системи. Ми працюємо із системами будь-якої
        складності:
      </p>
      <ul className='ml-4 list-disc'>
        <li>
          Від стандартних систем вентиляції для офісів до повноцінних систем
          ОВІК для промислових об’єктів.
        </li>
        <li>
          Від базового встановлення кондиціонерів до монтажу складних систем
          автоматизації будівель (BMS).
        </li>
        <li>
          Від монтажу теплових насосів до складних проектів із рекуперацією
          тепла.
        </li>
      </ul>
      <hr className='my-4' />
      <p>Наша експертиза:</p>
      <ol className='ml-4 list-decimal'>
        <li>
          <p>Сертифікати та ліцензії</p>
          <p className='mt-2'>
            Ми не лише обіцяємо якість, а й гарантуємо її відповідними
            документами. У нас є всі необхідні сертифікати, включаючи:
          </p>
          <ul className='ml-4 list-disc text-sm'>
            <li className='font-bold'>
              Ліцензії на проведення монтажних робіт.
            </li>
            <li>
              <strong>
                Дозвіл на виконання небезпечних робіт від ДержГірПромНагляд.
              </strong>{' '}
              Це означає, що навіть найскладніші й найризикованіші завдання – в
              надійних руках.
            </li>
          </ul>
        </li>
        <li>
          <p>Монтаж будь-якої складності</p>
          <p>Ми впораємося з будь-яким завданням:</p>
          <ul className='ml-4 list-disc text-sm'>
            <li>
              Простий монтаж кондиціонерів або систем вентиляції для невеликих
              офісів чи ресторанів.
            </li>
            <li>
              Встановлення складних систем автоматизації для великих
              адміністративних будівель, таких як Київська міська державна
              адміністрація.
            </li>{' '}
            <li>
              Складні рішення для фармацевтичних об’єктів, наприклад, ПАО
              «ФАРМАК».
            </li>
          </ul>
        </li>
        <li>
          Пуско-налагоджувальні роботи
          <p className='mt-2'>
            Ми не просто монтуємо обладнання, а й проводимо його запуск,
            налаштовуємо всі системи та перевіряємо їхню ефективність. Це
            гарантує бездоганну роботу з першого дня.
          </p>
        </li>
      </ol>
      <hr className='my-4' />
      <p>Як ми працюємо?</p>
      <ul className='ml-4 list-disc text-sm'>
        <li>Аналіз об’єкта</li>
        <li>
          Перед початком роботи ми вивчаємо всі особливості об’єкта, щоб
          уникнути непередбачуваних ситуацій.
        </li>
        <li>Монтаж</li>
        <li>
          Використовуємо сучасні технології та обладнання для виконання робіт на
          найвищому рівні.
        </li>
        <li>Тестування та налаштування</li>
        <li>Перевіряємо, щоб кожен елемент</li>
        системи працював так, як потрібно.
        <li>Передача в експлуатацію</li>
        <li>
          Наші фахівці надають повну консультацію з експлуатації системи та
          забезпечують підтримку після монтажу.
        </li>
      </ul>
      <hr className='my-4' />
      <p>Наші референції:</p>
      <p className='mt-2'>
        Ми вже виконували монтажні роботи для таких об’єктів, як:
      </p>
      <ul className='ml-4 list-disc text-sm'>
        <li>
          <strong>ПАО «ФАРМАК»</strong> – монтаж і налаштування складних систем
          вентиляції для чистих приміщень.
        </li>
        <li>
          <strong>Київська міська державна адміністрація</strong> – встановлення
          систем автоматизації та клімат-контролю.
        </li>
        <li>
          <strong>ГП «Укрспецекспорт»</strong> – монтаж систем вентиляції та
          охолодження для стратегічних об’єктів.
        </li>
        <li>
          <strong>Ресторан «Полісся»</strong> – інноваційні рішення для
          забезпечення комфорту відвідувачів.
        </li>
      </ul>
      <hr className='my-4' />
      <p>
        <strong>АРТ-КОМФОРТ</strong> – це не просто монтаж. Це гарантія того, що
        ваші системи працюватимуть як швейцарський годинник із першого дня.
        Готові побачити результат?
      </p>
    </div>
  );
};

export const MaintenanceService = () => {
  const { locale } = useLocale();
  if (locale.value === 'en') {
    return (
      <div className=''>
        <p className='mt-2'>
          Maintenance is the key to the smooth operation of your engineering
          systems. At Art-Comfort, we provide professional service that meets
          the highest standards, thanks to our team and official certificates
          from the world's leading brands.
        </p>
        <hr className='my-4' />
        <h4>Why us?</h4>
        <ol className='ml-4 mt-2 flex list-decimal flex-col gap-2'>
          <li>
            <p>Certificates from manufacturers</p>
            <p>
              We have certificates from all the leading brands we work with:
            </p>
            <ul className='ml-4 list-disc text-sm'>
              <li>
                <strong>
                  Daikin, Mitsubishi Electric, Systemair, Carel, Zanotti
                </strong>{' '}
                and others.
              </li>
            </ul>
            <p>
              These certificates confirm that we have the right to provide
              service for their equipment, knowing it to the smallest detail.
            </p>
          </li>
          <li>
            <p>Own service teams</p>
            <p>
              Our team consists of several teams of experienced engineers who
              work on facilities of various scales. We perform:
            </p>
            <ul className='ml-4 list-disc text-sm'>
              <li>Scheduled maintenance.</li>
              <li>Quick repairs.</li>
              <li> Commissioning.</li>
            </ul>
            <p>
              We are ready to provide supervision of all systems of your
              facility, regardless of their complexity.
            </p>
          </li>
          <li>
            <p>A comprehensive approach</p>
            <p>We service:</p>
            <ul className='ml-4 list-disc text-sm'>
              <li>
                <strong>HVAC systems</strong>: ventilation, air conditioners,
                heat pumps.
              </li>
              <li>
                <strong>Automation systems (BMS)</strong>: monitoring, software
                updates, settings.
              </li>
              <li>
                <strong>Security systems</strong>: video surveillance, access
                control, alarm.
              </li>
              <li>
                <strong>Water supply</strong>: pump inspection, pipeline
                cleaning, diagnostics.
              </li>
            </ul>
          </li>
          <li>
            <p>Quality assurance</p>
            <p>
              We use only original spare parts recommended by the manufacturer,
              and strictly follow the maintenance instructions.
            </p>
          </li>
        </ol>
        <hr className='my-4' />
        <h4>How do we work?</h4>
        <ol className='ml-4 flex list-decimal flex-col text-sm'>
          <li>
            <strong>Systems Check:</strong> We conduct a full diagnostics to
            identify potential problems and prevent them from occurring.
          </li>
          <li>
            <strong>Scheduled Maintenance:</strong> Regular inspections and
            cleaning of equipment to maintain its efficiency.
          </li>
          <li>
            <strong>Repairs:</strong> We respond promptly to any malfunctions
            and quickly fix them.{' '}
          </li>
          <li>
            <strong>Monitoring and Support:</strong> You can be sure that we
            monitor all systems, ensuring the stable operation of your facility.
          </li>
        </ol>
        <hr className='my-4' />
        <h4>Our references</h4>
        <p>We have already successfully served:</p>
        <ul className='ml-4 mt-2 list-disc text-sm'>
          <li>
            <strong>PAO «PHARMAK»</strong> – regular service of complex
            pharmaceutical systems.
          </li>
          <li>
            <strong>Kyiv City State Administration</strong> – control and
            support of climate systems.
          </li>
          <li>
            <strong>PAO «Ukrtelecom»</strong> – technical maintenance of
            large-scale engineering networks.
          </li>
          <li>
            <strong>Restaurant «Polissya»</strong> – full support of climate and
            ventilation systems.
          </li>
        </ul>
        <hr className='my-4' />
        <h4>Certificates</h4>
        <p>
          We are proud to have official certificates from leading equipment
          manufacturers. These certificates confirm our professionalism and the
          right to perform service work.
        </p>
        <p>Certificates:</p>
        <ul className='ml-4 list-disc text-sm'>
          <li>
            <strong>Daikin</strong>: right to service and technical support of
            equipment.
          </li>
          <li>
            <strong>Mitsubishi</strong> Electric: authorization for service.
          </li>
          <li>
            <strong>Systemair</strong>: certification for ventilation systems.
          </li>
          <li>
            <strong>Carel</strong>: technical service of humidifiers and
            automation.
          </li>
          <li>
            <strong>Zanotti</strong>: maintenance of industrial cooling systems.
          </li>
        </ul>

        <hr className='my-4' />
        <h4>Why choose us?</h4>
        <ul className='ml-4 list-disc'>
          <li>
            We ensure stable operation of your equipment for years to come.
          </li>
          <li>
            Our certificates are a guarantee of compliance with international
            standards.
          </li>
          <li>
            You get not just service, but a comprehensive approach to the
            engineering stability of your facility.
          </li>
        </ul>

        <h4 className='mt-4 font-bold'>
          Entrust your systems to those who know how to ensure their flawless
          operation!
        </h4>
      </div>
    );
  }
  return (
    <div className=''>
      <p className='mt-2'>
        Технічне обслуговування – це ключ до безперебійної роботи ваших
        інженерних систем. У компанії Арт-Комфорт ми забезпечуємо професійний
        сервіс, що відповідає найвищим стандартам, завдяки нашій команді та
        офіційним сертифікатам від провідних світових брендів.
      </p>
      <hr className='my-4' />
      <h4>Чому ми?</h4>
      <ol className='ml-4 mt-2 flex list-decimal flex-col gap-2'>
        <li>
          <p>Сертифікати від виробників</p>
          <p>
            Ми маємо сертифікати від усіх провідних брендів, з якими працюємо:
          </p>
          <ul className='ml-4 list-disc text-sm'>
            <li>
              <strong>
                Daikin, Mitsubishi Electric, Systemair, Carel, Zanotti
              </strong>{' '}
              та інших.
            </li>
          </ul>
          <p>
            Ці сертифікати підтверджують, що ми маємо право здійснювати сервісне
            обслуговування їхнього обладнання, знаючи його до найменших деталей.
          </p>
        </li>
        <li>
          <p>Власні сервісні бригади</p>
          <p>
            Наша команда – це кілька бригад досвідчених інженерів, які працюють
            на об’єктах різного масштабу. Ми виконуємо:
          </p>
          <ul className='ml-4 list-disc text-sm'>
            <li>Планове технічне обслуговування.</li>
            <li>Швидкий ремонт.</li>
            <li> Пусконалагоджувальні роботи.</li>
          </ul>
          <p>
            Ми готові забезпечити нагляд за всіма системами вашого об’єкта,
            незалежно від їхньої складності.
          </p>
        </li>
        <li>
          <p>Комплексний підхід</p>
          <p>Ми обслуговуємо:</p>
          <ul className='ml-4 list-disc text-sm'>
            <li>
              <strong>ОВІК-системи</strong>: вентиляція, кондиціонери, теплові
              насоси.
            </li>
            <li>
              <strong>Системи автоматизації (BMS)</strong>: моніторинг,
              оновлення ПЗ, налаштування.
            </li>
            <li>
              <strong>Системи безпеки</strong>: відеоспостереження, контроль
              доступу, сигналізація.
            </li>
            <li>
              <strong>Водопостачання</strong>: перевірка насосів, очищення
              трубопроводів, діагностика.
            </li>
          </ul>
        </li>
        <li>
          <p>Гарантія якості</p>
          <p>
            Ми використовуємо тільки оригінальні запчастини, рекомендовані
            виробником, і суворо дотримуємося інструкцій щодо обслуговування.
          </p>
        </li>
      </ol>
      <hr className='my-4' />
      <h4>Як ми працюємо?</h4>
      <ol className='ml-4 flex list-decimal flex-col text-sm'>
        <li>
          <strong>Перевірка систем:</strong> Проводимо повну діагностику, щоб
          виявити потенційні проблеми та запобігти їхньому виникненню.
        </li>
        <li>
          <strong>Планове обслуговування</strong>: Регулярні перевірки та чистка
          обладнання для підтримки його ефективності.
        </li>
        <li>
          <strong>Ремонт</strong>: Оперативно реагуємо на будь-які несправності
          та швидко їх усуваємо.{' '}
        </li>
        <li>
          <strong>Контроль і підтримка</strong>: Ви можете бути впевнені, що ми
          наглядаємо за всіма системами, забезпечуючи стабільну роботу вашого
          об’єкта.
        </li>
      </ol>
      <hr className='my-4' />
      <h4>Наші референції</h4>
      <p>Ми вже успішно обслуговуємо:</p>
      <ul className='ml-4 mt-2 list-disc text-sm'>
        <li>
          <strong>ПАО «ФАРМАК»</strong> – регулярний сервіс складних
          фармацевтичних систем.
        </li>
        <li>
          <strong>Київська міська державна адміністрація</strong> – контроль і
          підтримка кліматичних систем.
        </li>
        <li>
          <strong>ПАО «Укртелеком»</strong> – технічне обслуговування масштабних
          інженерних мереж.
        </li>
        <li>
          <strong>Ресторан «Полісся»</strong> – повний супровід кліматичних і
          вентиляційних систем.
        </li>
      </ul>
      <hr className='my-4' />
      <h4>Сертифікати</h4>
      <p>
        Ми пишаємося тим, що маємо офіційні сертифікати від провідних виробників
        обладнання. Ці сертифікати підтверджують наш професіоналізм і право на
        виконання сервісних робіт.
      </p>
      <p>Сертифікати:</p>
      <ul className='ml-4 list-disc text-sm'>
        <li>
          <strong>Daikin</strong>: право на сервіс і технічну підтримку
          обладнання.
        </li>
        <li>
          <strong>Mitsubishi</strong> Electric: авторизація на обслуговування.
        </li>
        <li>
          <strong>Systemair</strong>: сертифікація для вентиляційних систем.
        </li>
        <li>
          <strong>Carel</strong>: технічний сервіс зволожувачів та
          автоматизації.
        </li>
        <li>
          <strong>Zanotti</strong>: обслуговування промислових систем
          охолодження.
        </li>
      </ul>

      <hr className='my-4' />
      <h4>Чому обирають нас?</h4>
      <ul className='ml-4 list-disc'>
        <li>
          Ми забезпечуємо стабільну роботу вашого обладнання на роки вперед.
        </li>
        <li>
          Наші сертифікати – це гарантія відповідності міжнародним стандартам.
        </li>
        <li>
          Ви отримуєте не просто обслуговування, а комплексний підхід до
          інженерної стабільності вашого об’єкта.
        </li>
      </ul>

      <h4 className='mt-4 font-bold'>
        Довірте свої системи тим, хто знає, як забезпечити їхню бездоганну
        роботу!
      </h4>
    </div>
  );
};
