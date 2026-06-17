import Header from "./Header"
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";



function Location() {

    return(
        <>
         <Header head="Day Details" title="Everything you need to know"/>

         <div>
            <h2>Nile Crystal Ballroom, Cairo</h2>
            <h3><span><IoTimeOutline /></span>From 7:30 PM to 2:30 AM</h3>
         </div>

         <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.1495864519147!2d31.062936525043266!3d27.18303494842231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445073a818d9799%3A0x14a9b05d16ca50b4!2z2YLYp9i52Ycg2KfZgdix2KfYrSDZg9mF2KjZhtiz2YPZiiAmINmD2KfYs9mE!5e0!3m2!1sar!2seg!4v1778488125620!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button><span><SlLocationPin /></span>Open Location</button>
         </div>

        </>
    )
}

export default Location 