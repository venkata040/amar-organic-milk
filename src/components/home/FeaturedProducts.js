import { useNavigate } from "react-router-dom";
import "./FeaturedProducts.css";

function FeaturedProducts({ cart, setCart }) {
  const navigate = useNavigate();

  // ======================================
  // Buy Product
  // ======================================
  const handleBuyNow = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    // Update cart
    setCart(updatedCart);

    // Go directly to checkout
    navigate("/checkout");
  };

  // ======================================
  // Products
  // ======================================
  const products = [
    {
      id: 1,
      name: "Cow Milk",
      description: "Fresh organic cow milk.",
      price: "$4.99 / Litre",
      image: "🥛",
    },
    {
      id: 2,
      name: "Buffalo Milk",
      description: "Rich and creamy buffalo milk.",
      price: "$5.99 / Litre",
      image: "🥛",
    },
    {
      id: 3,
      name: "Curd",
      description: "Healthy homemade curd.",
      price: "$6.99 / Pack",
      image: "🥣",
    },
    {
      id: 4,
      name: "Ghee",
      description: "Pure organic cow ghee.",
      price: "$18.99 / Jar",
      image: "🧈",
    },
  ];

  return (
    <section className="featured-products">

      <h2>Our Fresh Products</h2>

      <div className="product-container">

        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-image">
              {product.image}
            </div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <h4>{product.price}</h4>

            <button
              onClick={() => handleBuyNow(product)}
            >
              🛒 Buy Now
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;