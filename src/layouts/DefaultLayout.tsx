import { Outlet } from "react-router-dom";
import { BringingAudio } from "../components/bringingAudio/BringingAudio";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MarkHeadphone } from "../components/markHeadphone/MarkHeadphone";

export function DefaultLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <div className="flex items-center justify-center mb-48 tablet:px-10">
            <BringingAudio/>
            </div>
            <Footer/>
        </div>
    )
}