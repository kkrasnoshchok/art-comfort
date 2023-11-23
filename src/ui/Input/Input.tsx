import {
  DetailedHTMLProps,
  ElementType,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Button } from '@/ui/Button';
import { clsxm } from '@/utils';

type BaseProps = {
  label: string;
  error?: string;
  success?: boolean;
  hint?: string;
  disabled?: boolean;
  withClear?: boolean;
  onClear?: () => void;
  RightIcon?: ElementType;
  LeftIcon?: ElementType;
  className?: string;
  inputClassName?: string;
};

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type HTMLTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type Props = BaseProps &
  (
    | ({ type?: 'input' } & HTMLInputProps)
    | ({ type: 'textarea' } & HTMLTextareaProps)
  );

export const Input = (props: Props) => {
  const {
    label,
    LeftIcon,
    RightIcon,
    disabled,
    type = 'input',
    error,
    success,
    hint,
    withClear = true,
    onClear,
    className = '',
    inputClassName = '',
    ...inputProps
  } = props;
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <>
      <div
        className={clsxm(
          'bg-grayscale-bg rounded-2xl border-2 border-transparent px-4 py-3 transition-[border]',
          isInputFocused && 'border-grayscale-header',
          disabled && '',
          error && '',
          success && '',
          className
        )}
      >
        {/* Label */}
        {label && (
          <p
            className={clsxm(
              'absolute transition-all',
              !isInputFocused && inputProps.value && 'opacity-0',
              isInputFocused && 'text-grayscale-label -translate-y-2 text-xs'
            )}
          >
            {label}
          </p>
        )}
        <div className='flex flex-row items-center'>
          {LeftIcon && <LeftIcon />}
          {type === 'input' && (
            <input
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className={clsxm(
                'flex-1 bg-transparent pr-2 outline-none transition-transform',
                isInputFocused && 'translate-y-1.5',
                inputClassName
              )}
              {...(inputProps as HTMLInputProps)}
            />
          )}
          {type === 'textarea' && (
            <textarea
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className={clsxm(
                'flex-1 bg-transparent pr-2 outline-none transition-transform',
                isInputFocused && 'translate-y-1.5',
                inputClassName
              )}
              {...(inputProps as HTMLTextareaProps)}
            />
          )}

          {RightIcon && <RightIcon />}
          {/* Clear Icon here  */}
          {withClear && onClear && (
            <Button
              size='small'
              theme='ghost'
              Icon={<RxCross2 size={24} />}
              onClick={onClear}
              className={clsxm(type === 'textarea' && 'self-start')}
            />
          )}
        </div>
      </div>
      {/* Hint */}
      {hint && <p className='p text-sm'>{hint}</p>}
    </>
  );
};
