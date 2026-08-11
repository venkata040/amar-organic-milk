import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      name: "Daily Milk",
      price: "$29.99",
      period: "per week",
      description: "Fresh organic milk delivered every morning.",
      features: [
        "Fresh organic milk",
        "Daily delivery",
        "Cancel anytime",
      ],
    },
    {
      id: 2,
      name: "Family Plan",
      price: "$49.99",
      period: "per week",
      description: "Perfect for families who love fresh milk.",
      features: [
        "Larger quantity",
        "Daily delivery",
        "Priority delivery",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$69.99",
      period: "per week",
      description: "Our complete premium organic dairy package.",
      features: [
        "Milk + Curd",
        "Organic Ghee",
        "Priority delivery",
      ],
    },
  ];

  const handleSubscribe = (plan) => {
    alert(
      `${plan.name} selected.\n\nSubscription payment integration will be added in the next phase.`
    );
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "60px 7%",
        background: "#f7fbf7",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#24752b",
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          Milk Subscription
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
          }}
        >
          Get fresh organic dairy products delivered to your doorstep.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.10)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "45px",
                marginBottom: "15px",
              }}
            >
              🥛
            </div>

            <h2
              style={{
                color: "#24752b",
              }}
            >
              {plan.name}
            </h2>

            <p>{plan.description}</p>

            <h2
              style={{
                fontSize: "32px",
                color: "#222",
              }}
            >
              {plan.price}
            </h2>

            <p>{plan.period}</p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                lineHeight: "2",
              }}
            >
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "25px",
                background: "#2d8435",
                color: "#fff",
                fontSize: "17px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() => navigate("/products")}
          style={{
            padding: "13px 30px",
            borderRadius: "25px",
            border: "2px solid #2d8435",
            background: "#fff",
            color: "#2d8435",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Subscription;