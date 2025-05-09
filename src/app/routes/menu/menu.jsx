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
  const [activeSubCategory, setActiveSubCategory] = useState(null);

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
        onSelect={(k) => {
          setActiveCategory(k);
          setActiveSubCategory(null);
        }}
        className="my-5 justify-content-center text-center"
      >
        {menuData.map((category) => (
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

                {category.subcategories ? (
                  <>
                    <Tabs
                      id={`${category.category}-subtabs`}
                      activeKey={
                        activeSubCategory || category.subcategories[0].category
                      }
                      onSelect={(k) => setActiveSubCategory(k)}
                      className="mb-4 justify-content-center"
                    >
                      {category.subcategories.map((subCategory) => (
                        <Tab
                          key={subCategory.category}
                          eventKey={subCategory.category}
                          title={t(
                            `${category.category}.${subCategory.category}.name`
                          )}
                        >
                          <motion.div
                            key={subCategory.category}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Row>
                              {subCategory.items.map((item) => (
                                <Col
                                  key={item.id}
                                  md={12}
                                  lg={6}
                                  className="mb-4"
                                >
                                  <Card className="h-100 d-flex flex-row justify-content-between align-items-center border-0 shadow p-3">
                                    <CardBody className="p-0 w-75">
                                      <CardTitle className="fw-bold">
                                        {t(
                                          `${category.category}.${subCategory.category}.items.${item.name}`
                                        )}
                                      </CardTitle>
                                      {item.description && (
                                        <CardText className="text-muted">
                                          {t(
                                            `${category.category}.${subCategory.category}.descriptions.${item.name}`
                                          )}
                                        </CardText>
                                      )}
                                      <CardText className="fw-bold text-success">
                                        {item.price}
                                      </CardText>
                                    </CardBody>
                                    <div
                                      className="card-img-container"
                                      style={{
                                        width: "130px",
                                        height: "130px",
                                        overflow: "hidden",
                                        borderRadius: "10px",
                                      }}
                                    >
                                      <img
                                        src={item.img}
                                        alt={t(
                                          `${category.category}.${subCategory.category}.items.${item.name}`
                                        )}
                                        className="img-fluid"
                                        style={{
                                          objectFit: "contain",
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
                  </>
                ) : (
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
                                {t(
                                  `${category.category}.descriptions.${item.name}`
                                )}
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
                )}
              </div>
            </motion.div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default Menu;
