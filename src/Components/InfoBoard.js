import {useState} from "react";

import {Transition} from "@headlessui/react";

export default function InfoBoard(props) {

    return (<Transition
            show={props.isPopup}
            enter="transition transform duration-[1000ms]"
            enterFrom="opacity-0 scale-50 "
            enterTo="opacity-100 scale-100"

            leave="transition transform duration-[1000ms]"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"

        >
            <div
                className={"absolute z-50 w-full bottom-0"}
                // style={{display: props.isPopup ? "inline-block" : "none"}}
            >
                <div className={"bg-gray-800" +
                    "  bg-opacity-50" +
                    " rounded-lg " +
                    "p-4 flex flex-col "
                }>
                    <div className={"flex justify-end "}>
                        <div
                            style={{
                                backgroundImage: "url('/assets/close-btn.png')",
                            }}
                            className={"bg-cover bg-center w-10 h-10 cursor-pointer"}
                            onClick={() => {

                                props.openDialogFunc(false);
                            }}
                        ></div>
                    </div>
                    <div className={"text-white break-words  text-2xl font-abaddon"}> {props.data} </div>
                </div>


                }
            </div>
        </Transition>

    )

}