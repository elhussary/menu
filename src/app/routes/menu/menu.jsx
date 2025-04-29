import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import menuData from "../../../data/menu.json";

import "./menu.css";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Tabs,
  Tab,
  Row,
  Col,
} from "react-bootstrap";

function Menu() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("Grills");
  const [activeDrinkCategory, setActiveDrinkCategory] = useState("Fresh Juices");

  const drinkCategories = [
    "Fresh Juices",
    "Mojitos",
    "Milkshakes",
    "Cocktails",
    "Hot Drinks",
    "Salad Ice Cream",
    "Latte cold / Hot",
    "Crepe"
  ];

  const renderDrinksContent = () => {
    return (
      <div className="container">
        <h2 className="text-center fs-3 mb-4 text-uppercase fw-bold text-success">
          {t("Drinks.name")}
        </h2>
        <Tabs
          id="drinks-tabs"
          activeKey={activeDrinkCategory}
          onSelect={(k) => setActiveDrinkCategory(k)}
          className="mb-4 justify-content-center"
        >
          {drinkCategories.map((category) => (
            <Tab
              key={category}
              eventKey={category}
              title={t(`Drinks.${category}.name`)}
            >
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Row>
                  {Object.entries(t(`Drinks.${category}.items`, { returnObjects: true })).map(([key, value], index) => (
                    <Col key={index} md={12} lg={6} className="mb-4">
                      <Card className="h-100 d-flex flex-row justify-content-between align-items-center border-0 shadow p-3">
                        <CardBody className="p-0 w-75">
                          <CardTitle className="fw-bold">
                            {value}
                          </CardTitle>
                          <CardText className="fw-bold text-success">
                            {/* You might want to add prices in your translation file */}
                            {/* For now using placeholder price */}
                            15 AED
                          </CardText>
                        </CardBody>
                        <div
                          className="card-img-container"
                          style={{
                            width: "180px",
                            height: "120px",
                            overflow: "hidden",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            src={`./assets/images/drinks/${category.toLowerCase().replace(/ /g, "-")}/${index + 1}.png`}
                            alt={value}
                            className="img-fluid"
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  };

  return (
    <div className="menu-page">
      <header>
        <div className="container h-100 d-flex align-items-center justify-content-center flex-column">
          <h2 className="text-success mnue-text">{t("menuTitle")}</h2>
          <Link to="/home">
            <button className="btn btn-outline-success homeMnue btn-md mt-5">
              {t("goHome")}
            </button>
          </Link>
        </div>
      </header>

      <Tabs
        id="menu-tabs"
        activeKey={activeCategory}
        onSelect={(k) => setActiveCategory(k)}
        className="my-5 justify-content-center text-center"
      >
        {menuData.map((category) =>
          category.category !== "Drinks" ? (
            <Tab
              key={category.category}
              eventKey={category.category}
              title={t(`${category.category}.name`)}
            >
              <motion.div
                key={category.category}
                className="menu-section my-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="container">
                  <h2 className="text-center fs-3 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
                    {t(`${category.category}.name`)}
                  </h2>
                  <div className="row">
                    {category.items.map((item) => (
                      <div key={item.id} className="col-md-12 col-lg-6 mb-4">
                        <Card className="h-100 d-flex flex-row justify-content-between align-items-center border-0 shadow p-3">
                          <CardBody className="p-0 w-75">
                            <CardTitle className="fw-bold">
                              {t(`${category.category}.items.${item.name}`)}
                            </CardTitle>
                            {item.description && (
                              <CardText className="text-muted">
                                {t(`${category.category}.descriptions.${item.name}`)}
                              </CardText>
                            )}
                            <CardText className="fw-bold text-success">
                              {item.price}
                            </CardText>
                          </CardBody>
                          <div
                            className="card-img-container"
                            style={{
                              width: "180px",
                              height: "120px",
                              overflow: "hidden",
                              borderRadius: "10px",
                            }}
                          >
                            <img
                              src={item.img}
                              alt={t(`${category.category}.items.${item.name}`)}
                              className="img-fluid"
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tab>
          ) : (
            <Tab
              key="Drinks"
              eventKey="Drinks"
              title={t("Drinks.name")}
            >
              <motion.div
                className="menu-section my-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {renderDrinksContent()}
              </motion.div>
            </Tab>
          )
        )}
      </Tabs>
    </div>
  );
}

export default Menu;
