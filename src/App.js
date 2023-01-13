import logo from './logo.svg';
import './App.css';
import {Menu} from '@headlessui/react'
import {useEffect, useState} from "react";
import Cosmos from "./Components/Cosmos";
import InfoBoard from "./Components/InfoBoard";
function VerminButton(props) {
    const icon = props.icon;
    const iconStyle = 'url(' + icon + ')';
    return (

        <button
            className="flex
             flex-row
              justify-center
               items-center
                bg-gray-800
                 sticky
                  hover:bg-gray-700
                   font-medium
                   space-x-2

         text-white
          font-bold
           opacity-100
           w-40
            mx-5 my-3 px-5 py-3
              rounded
              hover:text-fuchsia-700
              whitespace-normal
              font-abaddon
              text-2xl
              "
            onClick={props.onClick}
        >
            {icon &&
                <div
                    style={{
                        backgroundImage: iconStyle,
                    }}
                    className={"bg-cover bg-center w-10 h-10 cursor-pointer"}
                ></div>
            }
            {props.text}
        </button>
    );
}

function VerminPanel(props) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const toggleDialog = (data) => {
        const isDialogPopup = props.isDialogPopup;
        props.openDialogFunc(!isDialogPopup);
        props.dialogDataFunc(data);

    }
    const ukraine_peace_essays = () => {
        return (<div>
            Stand for the righteousness
        </div>)
    }
    const not_implemented = () => {
        return (<div className={"text-red-600"}>
            Not implemented yet
        </div>)
    }

    return (
        <div className={"flex flex-row h-full  justify-center z-50 content-center"}>
            <div className={"flex flex-col justify-center "
                }>
                <div className="flex flex-col
     bg-purple-500
      opacity-80
        p-5
        z-50
        rounded

        hover:opacity-100 ">

                    <a href={"https://github.com/nhannht"}>
                        <VerminButton
                            icon={"/assets/github.png"}
                            text={"Github"}/>
                    </a>
                    <VerminButton text={"Ukraine"}
                                  icon={"/assets/ukraine-flag.png"}

                                  onClick={() => {
                                      const data = ukraine_peace_essays;
                                      toggleDialog(data);
                                  }}
                    />
                    <a
                        href={"https://twitter.com/nhanclassroom"}>
                        <VerminButton
                            icon={"/assets/Twitter.png"}
                            text={"Twitter"}/>
                    </a>
                    <VerminButton text={"World"}
                                  onClick={() => {
                                      const data = not_implemented;
                                      toggleDialog(data);
                                  }
                                  }
                    />
                    <VerminButton text={"Treasures"}
                                  onClick={() => {
                                      const data = not_implemented;
                                      toggleDialog(data);
                                  }
                                  }
                    />
                    <VerminButton text={"Projects"}
                                  onClick={() => {
                                      const data = not_implemented;
                                      toggleDialog(data);
                                  }
                                  }
                    />
                </div>
            </div>
        </div>

    );

}

function App() {
    const [dialogData, setDialogData] = useState("Hello World");
    const [isDialogPopup, setIsDialogPopup] = useState(false);
    return (<div
        className=" bg-cover bg-center h-screen
             w-screen"
        style={{
            backgroundImage: "url(assets/space-background.png)"
        }}
    >
        <VerminPanel openDialogFunc={setIsDialogPopup}
                     dialogDataFunc={setDialogData}
                     isDialogPopup={isDialogPopup}
                     dialogData={dialogData}

        />
        <Cosmos
            planetNum={10}
            openDialogFunc={setIsDialogPopup}
            dialogDataFunc={setDialogData}
            isDialogPopup={isDialogPopup}
            dialogData={dialogData}
        />

        <InfoBoard
            data={dialogData}
            isPopup={isDialogPopup}
            openDialogFunc={setIsDialogPopup}
        />
    </div>);
}

export default App;
