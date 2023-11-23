export const GoogleMap = () => (
  <div className='mt-8 flex aspect-video flex-1 border border-slate-300 bg-slate-200'>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.8692753430482!2d30.358270321621863!3d50.499390702292644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd2d5e855555%3A0x40150a97676ff1c7!2sTov%20%22Art-Komfort%22!5e0!3m2!1sru!2sat!4v1689071912467!5m2!1sru!2sat'
      width='100%'
      height='100%'
      style={{ border: 0 }}
      allowFullScreen={false}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  </div>
);
