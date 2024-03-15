import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./Home";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<Home />
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
