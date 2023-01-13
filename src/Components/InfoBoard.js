import {useState} from "react";

export default function InfoBoard(props) {

    return (<div
            className={"absolute z-50 w-full bottom-0"}
            style={{display: props.isPopup ? "inline-block" : "none"}}
        >
            <div className={"bg-gray-800" +
                "  bg-opacity-50" +
                " rounded-lg " +
                "p-4 flex flex-col "
            }>
                <div className={"flex justify-end "} >
                    <div
                        style={{
                            backgroundImage: "url('/assets/close-btn.png')",
                        }}
                        className={"bg-cover bg-center w-10 h-10 cursor-pointer"}
                    onClick={() => {

                    props.openDialogFunc(false);
                    } }
                    ></div>
                </div>
                <div className={"text-white break-words  text-2xl font-abaddon"}> {props.data} </div>
            </div>


            }
        </div>

    )

}