import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/shared/store';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
