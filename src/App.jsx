import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SettingsContextProvider } from "./contexts";
import { Example } from "@/components/features";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <SettingsContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="bg-slate-100 dark:bg-slate-950 w-full h-[100vh]">
          <Example />
        </div>
      </QueryClientProvider>
    </SettingsContextProvider>
  );
};
