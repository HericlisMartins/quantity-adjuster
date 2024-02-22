type ProductCardProps = {
  product: {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    handle: string;
    updated_at: string;
    published_at: string;
    tags: string;
    variants: {
      id: number;
      title: string;
      price: string;
      option1: string;
    }[];
    options: {
      name: string;
      values: string[];
    }[];
    images: {
      src: string;
    }[];
    image: {
      src: string;
    };
  };
};

export default ProductCardProps;
