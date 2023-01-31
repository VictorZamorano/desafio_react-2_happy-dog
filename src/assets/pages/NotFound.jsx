import { Box, Container, Typography } from "@mui/material";

export default function NotFound() {
	return (
		<Container maxWidth="md">
			<Box
				display={"flex"}
				justifyContent="center"
				alignItems={"center"}
				className="class404"
			>
				<Typography
					variant="h2"
					fontWeight={400}
					component="div"
					sx={{ flexGrow: 1, color: "white" }}
				>
					¡Ups te equivocaste de pagina!
				</Typography>
			</Box>
		</Container>
	);
}
