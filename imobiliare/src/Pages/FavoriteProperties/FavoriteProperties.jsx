import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { RealEstateBanner } from "../../Components/RealEstateBanner/RealEstateBanner";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./FavoriteProperties.css";

export const FavoriteProperties = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const favoriteProperties =
    JSON.parse(localStorage.getItem(`${user.id}_favorites`)) || [];
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <div className="favorite-properties-header">
          <h1>Proprietati favorite</h1>
          {!favoriteProperties.length ? (
            <p>Momentan nu ai proprietati salvate ca favorite.</p>
          ) : (
            ""
          )}
        </div>
        <RealEstateList properties={favoriteProperties} />
        <Footer />
      </div>
    </div>
  );
};
