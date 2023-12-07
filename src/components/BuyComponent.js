import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Switch,
  FormGroup,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function BuyComponent({ stockname, userid, price, setRender }) {
  // alert(price)
  // const [price,setPrice]=useState([]);
  const [quantity, setQuantity] = useState([]);
  const [close, setClose] = useState(0);
  console.log(quantity);
  const notify = (data) =>
    toast.error(`${data}`, { autoClose: 3000, toastId: "error" });

  const buyStock = () => {
    axios
      .post(`http://localhost:8080/holdings/${userid}`, {
        stock_name: stockname,
        buy_price: price,
        quantity: quantity,
      })
      .then((response) => {
        console.log(response, "hiii");
        if (response) setRender((o) => !o);
      })
      .catch((error) => {
        console.error("Axios Error", error.message);
      });
  };

  // useEffect(buyStock, [])

  return (
    <Container sx={{ bgcolor: "black", padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: "1em",
              display: "flex",
              flexDirection: "column",
              gap: "2em",
              minWidth: 390,
              marginBottom: 2,
              padding: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Typography>
                  <strong>Buy</strong>&nbsp;&nbsp;
                </Typography>
                <Typography>
                  <strong>{stockname}</strong>&nbsp;&nbsp;
                </Typography>
                <Typography>
                  <strong>x</strong>&nbsp;&nbsp;
                </Typography>
                <Typography>
                  <strong>1</strong>&nbsp;&nbsp;
                </Typography>
                <Typography>
                  <strong>Qty</strong>&nbsp;&nbsp;
                </Typography>
              </Box>
              <Box>
                {/* <FormGroup>
                  <FormControlLabel
                    sx={{ color: 'white' }}
                    control={<Switch defaultChecked />}
                    label='Label'
                  />
                </FormGroup> */}
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box>
                <Typography variant="h6">Qty</Typography>
                <TextField
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                >
                  1
                </TextField>
              </Box>
              <Box>
                <Typography variant="h6">Price</Typography>
                <Typography></Typography>
                <TextField id="price" name="price" value={price}>
                  1
                </TextField>
                <FormControl>
                  {/* <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='market'
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      value='market'
                      control={<Radio />}
                      label='Market'
                    />
                  </RadioGroup> */}
                </FormControl>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box></Box>
                <Box></Box>
              </Box>

              <Box>
                <Button
                  sx={{ color: "white", bgcolor: "blue" }}
                  onClick={buyStock}
                >
                  Add
                </Button>
                &nbsp;&nbsp;
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <ToastContainer limit={1} />
    </Container>
    /* </div> */
  );
}

export default BuyComponent;
