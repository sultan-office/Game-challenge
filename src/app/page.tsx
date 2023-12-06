import Hero from "./component/Hero";
import Services from "./component/Services";
import Users from "./component/Users";
import Header from './component/Header';

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <Services />
      <Users />
    </>
  );
}
