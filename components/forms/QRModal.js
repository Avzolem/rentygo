/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import { QrReader } from "react-qr-reader";
import { useEffect, useState } from "react";
import { decode } from "js-base64";
import axios from "axios";
import LoadingCircle from "@/components/common/LoadingCircle";

const QRModal = ({ isOpen = false, setIsOpen, setJustScanned, event }) => {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [globalError, setGlobalError] = useState(null);
  const scanDelay = 500;

  if (!isOpen) {
    return null;
  }

  const handleCloseModal = (success = false) => {
    setIsOpen(false);
    setResultData(null);
    setScanned(false);
    setGlobalError(null);
    if (success) {
      setJustScanned(true);
    }
  };

  //SCAN EVENTS
  const handleScan = async (data, error) => {
    console.log("data =>", data);
    if (!!data) {
      setLoading(true);
      const text = data.text;
      console.log("text =>", text);
      setLoading(false);
      setScanned(true);
      setResultData(text);
    }

    if (!!error && JSON.stringify(error) !== JSON.stringify({})) {
      setScanned(true);
      setGlobalError("Ocurrió un error");
      console.error("handleScan error", error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 w-full"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 w-full bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center text-center lg:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="contentcontainer flex w-full items-center justify-center">
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:max-w-2xl">
                  {loading ? (
                    <div className="py-24">
                      <LoadingCircle color="#E4187D" />
                    </div>
                  ) : globalError ? (
                    <div className="flex flex-col items-center justify-center">
                      <div className="iconcontainer h-12 w-12 text-red-500">
                        <XCircleIcon />
                      </div>
                      <p className="font-semibold text-red-500">
                        {globalError}
                      </p>
                      <div className="buttoncontainer mt-4 flex items-center justify-center">
                        <button
                          className="bg-happy-pink rounded-lg px-2 py-1 text-white"
                          onClick={() => handleCloseModal()}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {!scanned && (
                        <>
                          <div className="title ite-center flex justify-center font-semibold">
                            <h3>Scan the QR code to open your car 🚘</h3>
                          </div>
                          <QrReader
                            scanDelay={scanDelay}
                            onResult={handleScan}
                            videoContainerStyle={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "10px",
                              paddingTop: "76.25%",
                            }}
                            videoStyle={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "10px",
                              objectFit: "cover",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                            constraints={{
                              facingMode: "environment",
                            }}
                            className="qrreader  my-0 rounded-md py-0"
                          />
                          <div className="buttoncontainer mt-4 flex items-center justify-center">
                            <button
                              className="bg-happy-pink rounded-lg px-2 py-1 text-white"
                              onClick={() => handleCloseModal()}
                            >
                              Close
                            </button>
                          </div>
                        </>
                      )}
                      {resultData && (
                        <div className="ticketInfo">
                          <div className="title flex w-full flex-col items-center justify-center font-bold">
                            <div className="iconcontainer h-12 w-12 text-green-500">
                              <CheckCircleIcon />
                            </div>

                            <p className="text-sm">
                              Your car is open, enjoy your ride!
                            </p>
                          </div>

                          <div className="buttoncontainer mt-4 flex items-center justify-center">
                            <button
                              className="bg-happy-pink rounded-lg px-2 py-1 text-white"
                              onClick={() => handleCloseModal(true)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QRModal;
