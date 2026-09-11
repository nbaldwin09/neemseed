import { Routes, Route } from "react-router-dom";
import { Route as About } from "./routes/about";
import { Route as Contact } from "./routes/contact";
import { Route as Home } from "./routes/index";
import { Route as Involved } from "./routes/involved";
import { Route as Developers } from "./routes/developers";
import { Route as Layout } from "./routes/route";

export default function App() {
  const Shell = Layout.component;
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Home.component />} />
        <Route path="about" element={<About.component />} />
        <Route path="involved" element={<Involved.component />} />
        <Route path="contact" element={<Contact.component />} />
        <Route path="developers" element={<Developers.component />} />
      </Route>
    </Routes>
  );
}
