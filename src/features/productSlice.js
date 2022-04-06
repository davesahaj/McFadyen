import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "JONATHAN SIMKHAI",
  description: `The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.`,
  price: "225",
  sizes: ["s", "l", "xs", "xxl"],
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ],
  colors: ["thumbnail1.jpg", "thumbnail2.jpg"],
};

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      localStorage.setItem("product", JSON.stringify({ action }));
    },
  },
});

export default productSlice.reducer;
