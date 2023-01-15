import { useState } from "react";
import { Menu } from "antd";


import { Fragment } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { Buttons } from "./components/Buttons";
import { GridPage } from "./components/GridPage";
import { HomePage } from "./components/HomePage";
import { TypographyPage } from "./components/TypographyPage";

export function App() {
  const items = [
    {
      label: <Link to="/buttons">Buttons Page</Link>,
      key: "buttons",
    },
    {
      label: <Link to="/typography">Typography Page</Link>,
      key: "typography",
    },
    {
      label: <Link to="/grid">Grid Page</Link>,
      key: "grid",
    },
  ];

  const [current, setCurrent] = useState("mail");
  function handleOnNavClick(e) {
    setCurrent(e.key);
  }
  return (
    <Fragment>
          <Menu
            onClick={handleOnNavClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </Fragment>
  );
}
