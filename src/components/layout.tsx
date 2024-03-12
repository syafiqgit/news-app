import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="w-full h-screen flex flex-col font-poppins">
      <Navbar />
      <div className="w-full h-full flex flex-col grow container">
        {children}
      </div>
      <Footer/>
    </div>
  );
}
