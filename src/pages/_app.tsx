import Filter from "@/components/Filter";
import CharacterProvider from "@/provider/CharacterProvider/CharacterProvider";
import { AppContainer } from "@/styles/Pages.styles";
import "@/styles/globals.css";
import { Typography } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 10,
        refetchOnMount: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <AppContainer>
          <Typography fontSize={70} fontFamily="Creepster">
            The Rick and Morty
          </Typography>
        </AppContainer>

        <Filter />
        <Component {...pageProps} />
      </CharacterProvider>
    </QueryClientProvider>
  );
}
