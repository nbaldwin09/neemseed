import { Routes, Route } from "react-router-dom";
import { Route as About } from "./routes/about";
import { Route as Contact } from "./routes/contact";
import { Route as Home } from "./routes/index";
import { Route as Careers } from "./routes/careers";
import { Route as Research } from "./routes/research";
import { Route as Layout } from "./routes/route";

export default function App() {
  const Shell = Layout.component;
  const Jobs = Careers.component;
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Home.component />} />
        <Route path="about" element={<About.component />} />
        <Route path="research" element={<Research.component />} />
        <Route path="careers" element={<Jobs />} />
        <Route path="careers/:roleId" element={<Jobs />} />
        <Route path="contact" element={<Contact.component />} />
      </Route>
    </Routes>
  );
}
