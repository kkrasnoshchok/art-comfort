import { Layout } from '@/components/layout';

const CertificationsPage = () => {
  return (
    <Layout>
      <div className='mt-16 w-full px-8'>
        <h1>Ліцензії та сертифікати</h1>
        <div className='mt-4 grid grid-cols-3 gap-4 pb-24'>
          {Array(28)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className='flex aspect-square w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-3xl border shadow-md'
              >
                <div className='h-full w-full rounded-bl-xl rounded-br-xl bg-slate-100 shadow-sm'></div>
                <h3 className='my-2'>Сертифікат {index}</h3>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default CertificationsPage;
