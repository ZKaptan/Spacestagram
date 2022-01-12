import { ChakraProvider } from "@chakra-ui/react";
import Nasa from "./components/Nasa";

function App() {
	return (
		<ChakraProvider>
			<Nasa />
		</ChakraProvider>
	);
}

export default App;
