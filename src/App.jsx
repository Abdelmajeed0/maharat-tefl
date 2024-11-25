import Footer from "./components/Footer";
import Header from "./components/Header";
import PaymentForm from "./components/PaymentForm";
import Reviews from "./components/Reviews";
import TeacherInfo from "./components/TeacherInfo";

export default function App() {
  return (
    <>
      <Header />

      <div className="bg-[url('./assets/svg/bg.svg')] bg-no-repeat bg-cover">
        <TeacherInfo />
        <PaymentForm />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}
