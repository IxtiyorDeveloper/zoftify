import React, {FC} from "react";
import {CirclesWithBar, TailSpin} from "react-loader-spinner";

interface Interface {
    width: number,
    height: number,
    color: string,
    type?: string
}

const Loader: FC<Interface> = ({width, height, color, type = "normal"}) => {
    return (
        <>
            {
                type === "normal" ?
                    <TailSpin
                        height={height}
                        width={width}
                        color={color}
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    :
                    <CirclesWithBar
                        height={height}
                        width={width}
                        color={color}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        outerCircleColor=""
                        innerCircleColor=""
                        barColor=""
                        ariaLabel='circles-with-bar-loading'
                    />
            }
        </>
    )
}
export default Loader
