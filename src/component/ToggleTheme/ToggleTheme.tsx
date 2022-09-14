import { useTheme } from 'hooks/use-theme';
import React from 'react';
import './ToggleTheme.scss';

export const ToggleTheme = ({}) => {
    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
      setTheme('light')
    }
    const handleDarkThemeClick = () => {
      setTheme('dark')
    }
  
    return (
    <div className={'theme-switcher'}>
      <button
        type={'button'}
        className="theme-switcher__btn"
        onClick={handleLightThemeClick}
        disabled={theme === 'light'}
      >
        Light
      </button>

      <button
        type={'button'}
        className="theme-switcher__btn"
        onClick={handleDarkThemeClick}
        disabled={theme === 'dark'}
      >
        Dark
      </button>
    </div>
  );
};
