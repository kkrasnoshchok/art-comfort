import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

const breakpoints = defaultTheme.screens;

type BreakpointKey = keyof typeof breakpoints;

export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
}

// import { theme } from '../../tailwind.config';

// export function getCurrentBreakpoints() {
//     return Object.keys(theme.screens).find((key) => window.innerWidth > theme.screens[key]);
// }
