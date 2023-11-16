export const ButtonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type ButtonSize = (typeof ButtonSizes)[keyof typeof ButtonSizes];

export const ButtonThemes = {
  primary: 'primary',
  secondary: 'secondary',
  subtle: 'subtle',
  ghost: 'ghost',
} as const;

export type ButtonTheme = (typeof ButtonThemes)[keyof typeof ButtonThemes];
