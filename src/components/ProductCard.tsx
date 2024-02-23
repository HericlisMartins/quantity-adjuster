import React, { ChangeEvent, useState } from "react";

import {
  AddCircleOutlineTwoTone,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Container,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ProductCardProps from "./product";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.options[0].values[0],
  );

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;

    // Ensure the quantity is within the specified range (1 to 13)
    if (newQuantity >= 1 && newQuantity <= 13) {
      setQuantity(newQuantity);
    }
  };

  const handleSizeChange = (event: any) => {
    setSelectedSize(event.target.value as string);
  };

  const handleIncrement = () => {
    if (quantity < 13) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const isMobile = useMediaQuery("(max-width:920px)");

  return (
    <Container maxWidth={"lg"}>
      <Grid container mt={2} spacing={2}>
        {/* Product images on the left */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: isMobile ? "ruby" : "-webkit-inline-box",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "auto",
            flexDirection: "row",
            writingMode: "vertical-lr",
            position: "relative",
            flexWrap: "nowrap",
            p: 0,
            m: 0,
          }}
        >
          {product.images.map((image, index) => (
            <Box
              pt={0}
              key={index}
              sx={{
                flex: isMobile ? "0 0 auto" : "1 1 auto",
                maxHeight: "600px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  objectFit: "contain",
                  mr: isMobile ? 1 : 0,
                  mb: isMobile ? 0 : 1,
                  borderRadius: 5,
                  p: 0,
                  height: "100%",
                }}
                alt={`Product ${index + 1}`}
                image={image.src}
              />
            </Box>
          ))}
        </Grid>

        {/* Product details on the right */}

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            position: isMobile ? "initial" : "fixed",
            right: isMobile ? "0" : "10%",
          }}
        >
          <Grid xs={12} item>
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: product.body_html }}
            />
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h6" color="text.primary">
              ${product.variants[0].price}
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <ButtonGroup disabled={false} sx={{ textAlign: "center" }}>
              <Select
                sx={{ display: "flex", minWidth: "10rem" }}
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {product.options[0].values.map((size) => (
                  <MenuItem
                    sx={{ textAlign: "center", display: "flex" }}
                    key={size}
                    value={size}
                  >
                    {size}
                  </MenuItem>
                ))}
              </Select>

              <Divider orientation="vertical" flexItem sx={{ mx: 4 }} />

              <Button
                onClick={handleDecrement}
                aria-label="-1"
                variant="text"
                color="inherit"
                size="small"
                disabled={quantity <= 1}
                sx={{ verticalAlign: "middle" }}
                startIcon={<RemoveCircleOutline />}
              ></Button>
              <TextField
                value={quantity}
                size="small"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  width: "20px",
                }}
                onChange={handleQuantityChange}
              />

              <Button
                onClick={handleIncrement}
                aria-label="+1"
                variant="text"
                color="inherit"
                size="small"
                disabled={quantity >= 13}
                sx={{ verticalAlign: "middle" }}
                endIcon={<AddCircleOutlineTwoTone />}
              ></Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCard;
