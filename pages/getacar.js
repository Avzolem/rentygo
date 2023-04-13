import MainLayout from "@/components/layouts/MainLayout";
import QRModal from "@/components/forms/QRModal";
import { useState } from "react";

const GetACar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [justScanned, setJustScanned] = useState(false);
  return (
    <MainLayout>
      <QRModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        setJustScanned={setJustScanned}
      />
      <main className="relative mb-auto flex flex-col to-black ">
        <div className="mx-auto w-full max-w-md pb-20 pt-16 text-center lg:py-32 ">
          <div className="px-4 sm:px-8 lg:w-full ">
            <div className="mt-10 flex flex-col ">
              <div className="rounded-md  py-2 font-bold text-black">
                Find a car near you 🚗
              </div>
              <div className="flex w-full justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlgScUjQKB0Eabquelc1DgUc3np6Bf3pTVg&usqp=CAU" />
              </div>

              <div className="buttoncontainer my-8">
                <button
                  className="w-full  bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-3 py-2 font-bold text-white"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Scan the QR code of your car
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default GetACar;
