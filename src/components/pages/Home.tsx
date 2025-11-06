import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Modal/Login";
import Footer from "../Footer/Footer";
import Sell from "../Modal/Sell";
import { useItems } from "../Context/Item";
import { fetchItemsFromFireStore } from "../Firebase/Firebase";
import Card from "../Card/Card";

const Home = () => {
  const [openModal, setModal] = useState<boolean>(false);
  const [openModalSell, setModalSell] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!openModal);
  };
  const toggleModalSell = () => {
    // alert('clicked on toggle button')
    setModalSell(!openModalSell);
  };

  const { items, setItems } = useItems();

  useEffect(() => {
    if (!items) {
      const getItems = async () => {
        const data = await fetchItemsFromFireStore();
        setItems(data);
      };
      getItems();
    }
  }, [items, setItems]);

  useEffect(() => {
    console.log("Updated items", items);
  }, [items]);

  return (
    <>
      <Navbar toggleModal={toggleModal} toggleModalSell={toggleModalSell} />
      <Login toggleModal={toggleModal} status={openModal} />
      <Sell
        setItems={setItems}
        status={openModalSell}
        toggleModalSell={toggleModalSell}
      />
      <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
        {items?.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            img={item.imageUrl ? item.imageUrl:"/assets/10001.webp"}
            des={item.description}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
