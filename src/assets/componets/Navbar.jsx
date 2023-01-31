import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { GiDogHouse, GiCat } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";

import "./Navbar.css";

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						HappyDog
					</Typography>

					<Button color="inherit">
						<NavLink to="/" className="navClass">
							<GiDogHouse />
							Home
						</NavLink>
					</Button>
					<Button color="inherit">
						<NavLink to="/contacto" className="navClass">
							<SiDatadog /> Contacto
						</NavLink>
					</Button>
					<Button color="inherit">
						<NavLink to="/*" className="navClass">
							<GiCat />
							404
						</NavLink>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
