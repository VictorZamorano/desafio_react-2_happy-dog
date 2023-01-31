import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Form() {
	return (
		<>
			<Typography
				variant="subtitle1"
				component="div"
				align="center"
				fontSize={"1.2rem"}
			>
				<b>Email</b>:
			</Typography>
			<TextField
				id="outlined-email"
				placeholder="name@example.com"
				variant="outlined"
				color="warning"
				sx={{
					"& > :not(style)": { color: "white" },
				}}
			/>
			<Typography
				variant="subtitle1"
				component="div"
				align="center"
				fontSize={"1.2rem"}
			>
				<b>Your description:</b>
			</Typography>
			<TextField
				id="outlined-descript"
				placeholder="Description"
				variant="outlined"
				color="warning"
				sx={{
					"& > :not(style)": { color: "white" },
				}}
			/>
			<Box
				display="flex"
				flexDirection="column"
				sx={{
					"& > :not(style)": { m: 1, width: "30vw" },
				}}
				alignItems="center"
			>
				<Button variant="contained">Send</Button>
			</Box>
		</>
	);
}
