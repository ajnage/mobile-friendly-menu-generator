import { Container } from "@mui/system";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container sx={{ bgcolor: "grey", width: "100vw", height: "100vh" }}>
      {" "}
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>{" "}
    </Container>
  );
}
