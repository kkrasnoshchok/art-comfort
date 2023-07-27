export const ContributionSection = () => {
  return (
    <article id='contribution' className='flex w-screen flex-col px-6 py-24'>
      <h1>Вклад в перемогу України</h1>
      <div className='h-10/12 mt-12 flex'>
        <div className='p mr-4 flex flex-1 flex-col'>
          <p className='rounded-lg border-2 p-4'>
            В першу чергу хочу подякувати всім нашим Захисникам та Захисницям,
            які ціною власного життя і здоров`я наближають перемогу України, та
            завдячуючи їх неймовірним зусиллям ми маємо можливість жити та
            працювати...
          </p>
          <p className='my-6 rounded-lg border-2 p-4'>
            Окремо дякую - Дмитру Глобі, який зі зброєю в руках відстоює нашу
            незалежність. Повертайся живим і здоровим, ми тебе чекаємо. Дякую
            кожному з вас за особистий внесок в розвиток компанії та наближення
            нашої перемоги.
          </p>
          <div className='rounded-lg border-2 p-4'>
            <p>
              З самого початку війни, наша компанія робила і робить свій вклад в
              наближення перемоги а саме:
            </p>
            <ul className='list-disc pl-8'>
              <li>пряма фінансова допомога нашій державі;</li>
              <li>
                формування та відправка гуманітарної допомоги в район Бучі,
                Ірпеня, Бородянки під час окупації та в перші дні та тижні після
                їх звільнення;
              </li>
              <li>
                виготовлення тушонки та відправка з іншими продуктами харчування
                в регіони які найбільше того потребували: с. Горенка, с.
                Пісківка, м. Звягель (поселення тимчасово переміщених жителів
                Київщини), м. Бородянка, м. Харків;
              </li>
              <li>ремонт автомобілів для ЗСУ та інших служб;</li>
              <li>
                придбання та передача матеріальних цінностей на запити від
                різних підрозділів наших захисників;
              </li>
              <li>своєчасна сплата податків до бюджету України.</li>
            </ul>
          </div>
          <p className='my-6 rounded-lg border-2 p-4'>
            Все це було і є можливим завдячуючи вкладу кожного з вас, як
            співробітників компанії. Радий тому, що в цей надскладний для нашої
            України час, ми змогли зберегти колектив та підтримати вас фінансово
            і морально в самі важкі дні та місяці війни.
          </p>
          <div className='rounded-lg border-2 p-4'>
            <p>
              Бажаю всім нам міцного здоров'я, натхнення, витримки, благополуччя
              та мирного неба!
            </p>
            <p>Вірю в перемогу України!</p>
            <p>Вірю в кожного з вас!</p>
            <p>
              Вірю в розвиток та процвітання нашої компанії - ТОВ "АРТ-КОМФОРТ"!
            </p>
            <strong>СЛАВА УКРАЇНІ!!!</strong>
          </div>
        </div>
        <div className='flex-1 rounded-lg bg-slate-200' />
      </div>
    </article>
  );
};
