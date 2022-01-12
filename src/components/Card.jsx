import {
	Box,
	Center,
	Image,
	Text,
	Stack,
	Button,
	HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
	const [like, setLike] = useState(0);

	const toggleLike = () => {
		like === 0 ? setLike(1) : setLike(0);
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(data.url);
	};

	return (
		<Center py={6}>
			<Box
				maxW="300px"
				w={"full"}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
				h="100%"
			>
				<Image w={"full"} h="250px" src={data.url} objectFit={"cover"} />

				<Box p={6}>
					<Stack spacing={2} align={"start"} mb={1}>
						<Text fontWeight={500} fontFamily={"body"}>
							{data.title}
						</Text>
						<Text>{data.date}</Text>
					</Stack>

					<HStack mt="10px" spacing="40px">
						<HStack spacing="30px">
							<Button
								bg="#151f21"
								color={"white"}
								rounded={"md"}
								_hover={{
									transform: "translateY(2px)",
									boxShadow: "lg",
								}}
								onClick={toggleLike}
							>
								{like ? (
									<FontAwesomeIcon icon={faHeartBroken} />
								) : (
									<FontAwesomeIcon icon={faHeart} />
								)}
							</Button>
							<Text>{like}</Text>
						</HStack>
						<Button onClick={copyToClipboard}>Copy Image</Button>
					</HStack>
				</Box>
			</Box>
		</Center>
	);
};

export default Card;
