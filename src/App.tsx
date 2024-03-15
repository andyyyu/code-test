import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import {Home} from "./page/Home";
import {Detail} from "./page/Detail";

const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<MantineProvider>
					<Routes>
						<Route path="/:pageParam?/:title?" element={<Home />} />
						<Route path="/detail/:id?" element={<Detail />} />
						<Route path="*" element={<Home />}  />
					</Routes>
				</MantineProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
