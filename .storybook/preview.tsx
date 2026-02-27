import type { Decorator, Preview } from '@storybook/react-vite';
import '../src/styles/reset.css';
import '../src/styles/tokens.css';
import '../src/styles/theme.css';
import '../src/styles/global.css';


const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.parameters.theme ?? context.globals.theme ?? 'light';
  const dark = theme === 'dark';

  return (
    <div 
      className={dark ? 'dark' : ''}
      style={{
        background: 'var(--bg-page)',
        padding: '1rem',
        transition: 'background 0.2s ease'
      }}
    >
      <Story />
    </div>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
  decorators: [ThemeDecorator],
  tags: ['autodocs'],
};

export default preview;