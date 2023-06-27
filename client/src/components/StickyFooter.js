import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#7a2c2c",
		},
		secondary: {
			main: "#FFFFFF",
		},
	},
});

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" component={'span'}>
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/ajnage/mobile-friendly-menu-generator">
				QRMenu
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function StickyFooter() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "8vh",
				}}
				className="footer"
				bgcolor="primary.dark"
			>
				<Box
					component="footer"
					sx={{
						py: 3,
						px: 2,
						// mt: "auto",
						backgroundColor: (theme) =>
							theme.palette.mode === "dark"
								? theme.palette.grey[200]
								: theme.palette.grey[800],
					}}
				>
					<Container maxWidth="sm">

						<Copyright />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
