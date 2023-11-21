import { motion } from 'framer-motion';
import { ReactNode, useCallback } from 'react';
import { O } from 'ts-toolbelt';

import { ButtonSize, ButtonTheme } from '@/ui/Button/types';
import { clsxm } from '@/utils';

type Props = O.Either<
  {
    onClick: () => void;
    className?: string;
    labelClassName?: string;
    disabled?: boolean;
    size?: ButtonSize;
    theme?: ButtonTheme;
    href?: string;
    label: string;
    Icon: ReactNode;
  },
  'Icon' | 'label'
>;

const buttonBaseStyles =
  'inline-flex cursor-pointer rounded-2xl transition-all hover:scale-95 active:scale-90';

export const Button = (props: Props) => {
  const {
    size = 'medium',
    theme = 'primary',
    href,
    Icon,
    label,
    onClick,
    disabled = false,
    className = '',
    labelClassName = '',
  } = props;

  const getButtonSizeStyles = useCallback(() => {
    switch (size) {
      case 'large':
        return 'px-7 py-3';
      case 'medium':
        return 'px-5 py-2';
      case 'small':
        return 'px-4 py-1 rounded-lg';
    }
  }, [size]);

  const getLabelSizeStyles = useCallback(() => {
    switch (size) {
      case 'large':
        return 'h4';
      case 'medium':
        return 'p';
      case 'small':
        return 'text-xs';
    }
  }, [size]);

  const getButtonThemeStyles = useCallback(() => {
    switch (theme) {
      case 'primary':
        return 'bg-primary-default hover:bg-primary-defaultStrong active:bg-grayscale-header active:border-primary-bgStrong border-2 border-transparent';
      case 'secondary':
        return 'border-2 border-primary-default hover:border-primary-defaultStrong active:border-primary-bg active:border-primary-bgStrong';
      case 'subtle':
        return 'border-2 border-grayscale-line';
      case 'ghost':
        return 'p-0';
    }
  }, [theme]);

  const getLabelThemeStyles = useCallback(() => {
    switch (theme) {
      case 'primary':
        return 'text-grayscale-bg';
      case 'secondary':
        return 'text-primary-default';
      case 'subtle':
        return 'text-grayscale-line';
      case 'ghost':
        return 'text-primary-default';
    }
  }, [theme]);

  return (
    <motion.a
      href={href}
      className={clsxm(
        buttonBaseStyles,
        getButtonSizeStyles(),
        getButtonThemeStyles(),
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      {...{ onClick, disabled }}
    >
      {Icon && Icon}
      {label && (
        <p
          className={clsxm(
            'font-semibold',
            getLabelSizeStyles(),
            getLabelThemeStyles(),
            labelClassName
          )}
        >
          {label}
        </p>
      )}
    </motion.a>
  );
};
