import '../../mocks/matchMedia.mock';
import { fireEvent, render, screen } from '@testing-library/react';
import { ToggleTheme } from './ToggleTheme.tsx'

describe('ToggleTheme test', () => {
    it('should display theme switcher buttons', () => {
        /*
            screen method for debugging:
            in order not to update the call structure render
            in what cases is it better to use it? (in addition to checking the document)
        */
        const { getByTestId } = render(<ToggleTheme/>);

        expect(getByTestId('button-light')).toBeInTheDocument();
        expect(getByTestId('button-light')).toBeInTheDocument();
    });

    it('check theme switcher buttons', () => {
        const { getByTestId } = render(<ToggleTheme/>);
        const theme = document.documentElement;

        const buttonLight = getByTestId('button-light');
        expect(buttonLight).toBeDisabled();
        expect(theme).toHaveAttribute('data-theme', 'light');

        const buttonDark = getByTestId('button-dark');
        expect(buttonDark).not.toBeDisabled();
        fireEvent.click(buttonDark);
        expect(buttonDark).toBeDisabled();
        expect(theme).toHaveAttribute('data-theme', 'dark');
    });
});
