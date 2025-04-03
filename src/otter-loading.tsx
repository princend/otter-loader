import { JSX } from "react";
import './otter-loading.scss';

export function OtterLoading(): JSX.Element {
    return (
        <>
            <h1 className="intro">otter loader</h1>
            <div className="box">
                <div className="otter">
                    <div className="otter__body"></div>
                    <div className="otter__body"></div>
                    <div className="otter__tail"></div>
                    <div className="otter__head"></div>
                </div>
            </div>
        </>
    )
}