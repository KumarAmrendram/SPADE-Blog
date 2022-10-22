import React from "react";
import { Box, Button, TextField, styled } from "@mui/material";
import logo from "./img/Spade_logo.png";
function Login() {
  const Component = styled(Box)`
    width: 400px;
    margin: auto;
    margin-top: 10%;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  `;

  const Image = styled("img")({
    width: 200,
    display: "flex",
    margin: "auto",
    padding: "50px 0 0",
  });

  const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div,
    & > Button,
    & > p {
      margin-top: 20px;
    }
  `;

  const LoginButton = styled(Button)`
     {
      text-transform: none;
      background: #112031;
      color: #fff;
      height: 48px;
      border-radius: 2px;
    }
  `;

  // const SignupButton = styled(Button)`
  //    {
  //     background: #000;
  //     box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  //   }
  // `;

  return (
    <Component
      sx={{
        width: {
          xs: 310,
          sm: 350,
          md: 400,
        },
        marginTop:{
          xs:15,
        }
      }}
    >
      <Box>
        <Image src={logo} alt="Spade logo"></Image>{" "}
      </Box>
      <Wrapper>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <LoginButton variant="contained">Login</LoginButton>
        {/* <Typography>OR</Typography> */}
        {/* <SignupButton variant="">Create an account</SignupButton> */}
      </Wrapper>
    </Component>
  );
}

export default Login;
