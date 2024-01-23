'use client'

import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'
import theme from './theme';

export function Providers({ children, className }: { children: React.ReactNode, className: string }) {
    const router = useRouter();

    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}
