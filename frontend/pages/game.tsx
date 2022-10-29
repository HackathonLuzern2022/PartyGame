import { GameStart } from '../components/Game/GameStart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function GameStartPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameStart/>
    </QueryClientProvider>
  );
}
