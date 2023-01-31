import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Img from "../componets/Img";

export default function Home() {
	return (
		<Container
			maxWidth="md"
			sx={{
				"& > :not(style)": { p: 5 },
			}}
		>
			<Box display={"flex"} flexDirection={"column"} color="white">
				<Typography
					variant="h2"
					gutterBottom
					textAlign={"center"}
					fontWeight={"500"}
				>
					Bienvenido a HappyDog
				</Typography>
				<Typography
					variant="h5"
					gutterBottom
					textAlign={"center"}
					fontWeight={"400"}
				>
					El lugar de los perros
				</Typography>
				<Box display={"flex"} alignItems="center">
					<Img img="./img/dancing-dance.gif" imgAlt={"dancing-dog"} />
				</Box>
			</Box>
		</Container>
	);
}
