type Props = {
  size?: number;
};

export const UsaIcon = (props: Props) => {
  const { size = 24 } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size / 1.9}
      viewBox='0 0 7410 3900'
    >
      <rect width='7410' height='3900' fill='#b22234' />
      <path
        d='M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0'
        stroke='#fff'
        strokeWidth='300'
      />
      <rect width='2964' height='2100' fill='#3c3b6e' />
      <g fill='#fff' />
      <path
        id='s'
        d='M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z'
      />
    </svg>
  );
};
