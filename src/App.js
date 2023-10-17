import Layout from "./Layout/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Layout />} />
        <Route path="/explore_city" element={<Layout />} />
        <Route path="/ticket" element={<Layout />} />
        <Route path="/favorites" element={<Layout />} />
        <Route path="/settings" element={<Layout />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Layout />
    // </>
  );
}

export default App;
