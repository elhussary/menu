import { useTranslation } from "react-i18next";

const DrinkMenu = () => {
  const { t, i18n } = useTranslation();

  const renderCategory = (title, iconFile, items) => (
    <section className="menu-category" key={title}>
      <div className="category-title">
        <h2 
          className="category-title"
          style={{ 
            fontSize: i18n.language === 'ar' ? '1.7rem' : 'inherit'
          }}
        >
          {t(`Drinks.${title}.name`)}
        </h2>
        <span className="category-icon">
          <img
            src={`./assets/images/icon/${iconFile}`}
            alt="icon"
            aria-hidden="true"
          />
        </span>
      </div>
      <ul className="menu-items">
        {items.map(([name, price]) => (
          <li className="menu-item" key={name}>
            <span className="item-name">
              {t(`Drinks.${title}.items.${name}`)}
            </span>
            <span className="item-price">{price} AED</span>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <>
      {[1, 2].map((menuIndex) => (
        <div className="menu-container" key={menuIndex}>
          <div className="menu-header">
            <img src="./assets/images/menu-logo.png" alt="Restaurant Logo" />
          </div>

          <div className="menu-categories">
            {menuIndex === 1 && (
              <>
                {renderCategory("Fresh Juices", "fresh-juices.png", [
                  ["Orange", 19],
                  ["Lemon", 19],
                  ["Watermelon", 19],
                  ["Avocado", 25],
                  ["Strawberry", 19],
                  ["Mango", 19],
                  ["Pineapple", 19],
                  ["Sweet Melon", 25],
                  ["Pomegranate", 25],
                  ["Banana Milk", 20],
                ])}

                {renderCategory("Mojitos", "mojittos.png", [
                  ["Strawberry", 20],
                  ["Blueberry", 20],
                  ["Mix Berries", 20],
                  ["Passion Fruits", 20],
                  ["Blue Moon", 20],
                  ["Blue Hawaii", 20],
                  ["Watermelon", 20],
                  ["Classic Mojito", 20],
                ])}

                {renderCategory("Milkshakes", "milk-shake.png", [
                  ["Vanilla", 20],
                  ["Chocolate", 20],
                  ["Oreo", 20],
                  ["Kinder", 20],
                  ["Pistachio", 20],
                  ["KitKat", 20],
                  ["Strawberry", 20],
                  ["Mango", 20],
                ])}

                {renderCategory("Cocktails", "cocktails.png", [
                  ["Mix Fruit", 22],
                  ["Mango Magic", 25],
                  ["Triple Cocktail", 25],
                  ["Pina Colada", 22],
                  ["Tropical", 22],
                  ["Crystal", 22],
                  ["Mango Paradise", 25],
                  ["Relax", 22],
                  ["Jamaica", 22],
                  ["Protein", 25],
                  ["Triple Colada", 25],
                ])}
              </>
            )}

            {menuIndex === 2 && (
              <>
                {renderCategory("Hot Drinks", "hot-drinks.png", [
                  ["Espresso Single", 12],
                  ["Espresso Double", 16],
                  ["Amercano", 18],
                  ["Cappuccino", 22],
                  ["Cortado", 20],
                  ["Hot Chocolate", 20],
                  ["Turkish Coffee", 15],
                  ["Tea", 10],
                ])}

                {renderCategory("Salad Ice Cream", "salad-Ice-creame.png", [
                  ["Classic Salad", 25],
                  ["Special Salad", 35],
                  ["Chocolamou", 25],
                  ["Twtty Fruti", 25],
                  ["Mix Ice Cream", 25],
                  ["Emprator Special", 35],
                ])}

                {renderCategory("Latte cold / Hot", "latte.png", [
                  ["Spanish Latte", 22],
                  ["Caramel Latte", 22],
                  ["Huzelnut Latte", 22],
                  ["Pistachio Latte", 22],
                  ["Mocha Latte", 22],
                  ["Cafe Latte", 22],
                  ["Classic Latte", 22],
                  ["Rose", 22],
                ])}

                {renderCategory("Crepe", "Crepe.png", [
                  ["Nutella", 25],
                  ["Lotus", 25],
                  ["Pistachio", 28],
                  ["Fettuccini", 32],
                  ["Special Crepe", 40],
                ])}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default DrinkMenu;
