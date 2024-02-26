import React from "react";
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import CardsData from "../../data/CardsData.json";
import iconChat from "../../assets/icon-chat.webp";
import iconMoney from "../../assets/icon-money.webp";
import iconSecurity from "../../assets/icon-security.webp";
import "../Home/home.scss";

function Home() {
  const cardImage = {
    "icon-chat.webp": iconChat,
    "icon-money.webp": iconMoney,
    "icon-security.webp": iconSecurity,
  };

  return (
    <main>
      <Banner />
      <section className="cards">
        {/* <h2 className="sr-only">Features</h2> */}
        {CardsData.map((data) => (
          <Card
            key={data.id}
            image={cardImage[data.image]}
            descriptionImage={data.descriptionImage}
            title={data.title}
            description={data.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
