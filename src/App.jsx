import "./App.css";
import Navbar from "./Componets/Navbar";
import Cart from "./Componets/Carts";
import Main from "./Componets/Main";
import Footer from "./Componets/Footer";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loding from "./Componets/Loding";
// fatch data
const fetchTickets = async () => {
  const res = await fetch("/ticekets.json");
  return res.json();
};

function App() {
  const fetchTicketsPromise = fetchTickets();
  const [status, setStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/*  Carts*/}
      <Cart status={status} resolved={resolved}></Cart>

      {/* Main */}
      <Suspense fallback={<Loding></Loding>}>
        <Main
          status={status}
          setStatus={setStatus}
          resolved={resolved}
          setResolved={setResolved}
          fetchTicketsPromise={fetchTicketsPromise}
        />
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
