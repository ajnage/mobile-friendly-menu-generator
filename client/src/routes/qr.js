import React, { useEffect } from "react";
import { Paper, Container, Box, Button } from "@mui/material";

const QRCodePage = () => {
	useEffect(() => {
		const printIT = () => {
			window.print();
		};
	}, []);

	let url = "https://mobilemenugenerator.netlify.app/";
	let qrcodeRequest = `https://chart.apis.google.com/chart?cht=qr&chl=${url}&chs=220`;
	const qrArr = [];
	for (let i = 0; i < 20; i++) {
		let qrImage = new Image();
		qrImage.src = qrcodeRequest;
		qrArr.push(
			<Box className="qrimage" key={i}>
				<img src={qrImage.src} alt={`QR Code ${i}`} />
			</Box>
		);
	}

	return (
		<Container sx={{ height: "100vh" }}>
			<Button
				onClick={() => window.print()}
				className="qrImagePagePrintButton"
				sx={{ my: "3vh", height: "10vh", fontSize: "25px" }}
				variant="contained"
			>
				PRINT QR CODES!
			</Button>

			<Paper
				className="qrImagePage"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						alignItems: "space-around",
					}}
				>
					{qrArr}
				</Box>
			</Paper>
		</Container>
	);
};

export default QRCodePage;
