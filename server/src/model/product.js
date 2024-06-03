const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  img: String,
  time: String,
  stock: Number,
  category: String,
  description: String,
  isFeatured: Boolean,
  isActive: Boolean,
  ingeredients: Array,
});

const Product = mongoose.model("Product", productSchema);
