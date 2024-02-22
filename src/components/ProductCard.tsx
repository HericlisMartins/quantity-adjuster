import React, { ChangeEvent, useState } from "react";

import {
  AddCircleOutlineTwoTone,
  RemoveCircleOutlineTwoTone,
} from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
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

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          {/* Images collage on the left */}
          <Grid container spacing={1}>
            {product.images.map((image, index) => (
              <Grid item key={index} xs={6} md={4} lg={6}>
                <CardMedia
                  component="img"
                  alt={`Product ${index + 1}`}
                  width="200"
                  image={image.src}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container xs={12} md={6}>
          {/* Product details on the right */}
          <CardContent sx={{ position: "fixed" }}>
            <Grid container gap={2}>
              <Grid xs={12} item>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: product.body_html }}
                />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="h6" color="text.primary">
                  ${product.variants[0].price}
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <Select
                  value={selectedSize}
                  onChange={handleSizeChange}
                  fullWidth
                >
                  {product.options[0].values.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid xs={12} item>
                <Box>
                  <IconButton
                    onClick={handleDecrement}
                    aria-label="Decrease Quantity"
                    disabled={quantity === 1}
                  >
                    <RemoveCircleOutlineTwoTone />
                  </IconButton>
                  <TextField
                    type="number"
                    label="Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <IconButton
                    onClick={handleIncrement}
                    aria-label="Increase Quantity"
                    disabled={quantity === 13}
                  >
                    <AddCircleOutlineTwoTone />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCard;
