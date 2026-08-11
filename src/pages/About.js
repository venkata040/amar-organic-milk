function About() {
  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "70px 8%",
        background: "#f7fbf7",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              fontSize: "70px",
              marginBottom: "15px",
            }}
          >
            🥛
          </div>

          <h1
            style={{
              color: "#24752b",
              fontSize: "48px",
              marginBottom: "15px",
            }}
          >
            About Amar Organic Milk
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
            }}
          >
            Fresh. Organic. Healthy. Delivered to your doorstep.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#24752b",
            }}
          >
            Who We Are
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#444",
            }}
          >
            Amar Organic Milk is focused on providing fresh and high-quality
            organic dairy products directly to customers. Our goal is to make
            fresh dairy products convenient and accessible for families.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#444",
            }}
          >
            We believe that good food starts with quality ingredients. Our
            products are prepared with care and delivered fresh to your
            doorstep.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 250px",
              background: "#eaf7ec",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "45px" }}>🌱</div>

            <h2>100% Organic</h2>

            <p>
              We focus on providing natural and quality dairy products.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 250px",
              background: "#eaf7ec",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "45px" }}>🐄</div>

            <h2>Farm Fresh</h2>

            <p>
              Our products are inspired by fresh farm-to-home delivery.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 250px",
              background: "#eaf7ec",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "45px" }}>🚚</div>

            <h2>Daily Delivery</h2>

            <p>
              We make it convenient to receive fresh products at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;