import { Routes, Route } from "react-router-dom";
import { Route as R0 } from "./routes/about";
import { Route as R1 } from "./routes/contact";
import { Route as R2 } from "./routes/culture";
import { Route as R3 } from "./routes/index";
import { Route as R4 } from "./routes/investors";
import { Route as R5 } from "./routes/involved";
import { Route as R6 } from "./routes/lab";
import { Route as R8 } from "./routes/research";
import { Route as R9 } from "./routes/route";

export default function App() {
  const Layout = R9.component;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<R0.component />} />
        <Route path="contact" element={<R1.component />} />
        <Route path="culture" element={<R2.component />} />
        <Route index element={<R3.component />} />
        <Route path="investors" element={<R4.component />} />
        <Route path="involved" element={<R5.component />} />
        <Route path="lab" element={<R6.component />} />
        <Route path="research" element={<R8.component />} />
      </Route>
    </Routes>
  );
}
