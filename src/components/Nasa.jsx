import { Box, Grid, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Nasa = () => {
	const [nasaData, setNasaData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNasaData = async () => {
			const fetchedData = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=8`
			);
			const jsonData = await fetchedData.json();
			setNasaData(jsonData);
			setLoading(false);
		};
		fetchNasaData();
	}, []);

	if (loading) {
		return (
			<Box h="100vh" display="flex" justifyContent="center" alignItems="center">
				<Spinner w="100px" h="100px" color="orange.500" />
			</Box>
		);
	}

	return (
		<Box m="25px">
			<Heading>Spacestagram</Heading>
			<Text>Brought to you by Nasa's APOD API </Text>
			<Grid
				gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
				gap="30px"
			>
				{nasaData.map((data, index) => {
					return <Card data={data} key={index} />;
				})}
			</Grid>
		</Box>
	);
};

export default Nasa;
