import { useTheme } from 'hooks/use-theme';
import React from 'react';
import './ToggleTheme.scss';

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
      setTheme('light')
    }
    const handleDarkThemeClick = () => {
      setTheme('dark')
    }
  
    return (
    <div className={'theme-switcher'}>
      <span className='title'>Themes:</span>
      
      <div className='theme-switcher__action'>
        <button
          type={'button'}
          data-testid="button-light"
          className="theme-switcher__light btn_primary"
          onClick={handleLightThemeClick}
          disabled={theme === 'light'}
        >
          Light
        </button>

        <button
          type={'button'}
          data-testid="button-dark"
          className="theme-switcher__dark btn_primary"
          onClick={handleDarkThemeClick}
          disabled={theme === 'dark'}
        >
          Dark
        </button>
      </div>
    </div>
  );
};
