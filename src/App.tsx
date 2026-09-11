import { Routes, Route } from "react-router-dom";
import { Route as R1 } from "./routes/contact";
import { Route as R3 } from "./routes/index";
import { Route as R7 } from "./routes/careers";
import { Route as R8 } from "./routes/research";
import { Route as R9 } from "./routes/route";

export default function App() {
  const Layout = R9.component;
  const Careers = R7.component;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contact" element={<R1.component />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/:roleId" element={<Careers />} />
        <Route index element={<R3.component />} />
        <Route path="research" element={<R8.component />} />
      </Route>
    </Routes>
  );
}
