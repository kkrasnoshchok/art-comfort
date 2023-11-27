import {
  DetailedHTMLProps,
  ElementType,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div>
      <div
        className={clsxm(
          'base-input bg-grayscale-bg rounded-2xl border-2 border-transparent px-4 py-3 transition-[border]',
          isInputFocused && 'border-grayscale-header',
          disabled && 'cursor-not-allowed opacity-50',
          error && 'border-danger-defaultStrong bg-danger-bg',
          success && 'border-success-defaultStrong bg-success-bg',
          className
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Label */}
        {label && (
          <p
            className={clsxm(
              'absolute z-0 transition-all',
              !isInputFocused && inputProps.value && 'opacity-0',
              isInputFocused && 'text-grayscale-label -translate-y-2 text-xs',
              error && 'text-danger-default',
              success && 'text-success-default'
            )}
            onClick={() => inputRef.current?.focus()}
          >
            {label}
          </p>
        )}
        <div className='flex flex-row items-center'>
          {LeftIcon && <LeftIcon />}
          {type === 'input' && (
            <input
              ref={inputRef}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className={clsxm(
                'flex-1 bg-transparent pr-2 outline-none transition-transform',
                isInputFocused && 'translate-y-1.5',
                disabled && 'pointer-events-none cursor-not-allowed',
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
      {/* Hint / Error */}
      {hint && <p className='p text-sm'>{hint}</p>}
      {error && (
        <p className='p text-danger-defaultStrong mt-1 text-sm font-medium'>
          {error}
        </p>
      )}
    </div>
  );
};
