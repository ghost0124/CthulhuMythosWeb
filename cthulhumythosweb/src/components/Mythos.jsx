import React from 'react';
import PortraitImage from '../images/mythoscalls.jpg';
import { Link } from 'react-scroll';

export const Mythos = () => {
  return (
    <div name="Mythos" className='h-screen w-full bg-gradient-to-b from-black via-green to-green-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h4 className='text-white py-4 max-w-md'>
                    <p>
                        “The Thing cannot be described—there is no language for such abysms of shrieking and immemorial lunacy, such eldritch contradictions of all matter, force, and cosmic order. . . . After vigintillions of years great Cthulhu was loose again, and ravening for delight.”
                            —H.P. Lovecraft
                        “The Call of Cthulhu”  
                    </p>
                    <p>
                        The Cthulhu Mythos was H.P. Lovecraft’s greatest contribution to supernatural literature: a series of stories that evoked cosmic awe and terror through their accounts of incomprehensibly alien monsters and their horrifying incursions into our world.
                    </p>
                </h4>
                <table className="table table-success table-striped table-borderless">
                    <tr className='text-white'>
                        <th>Stories from the Mythos</th>
                    </tr>
                    <tr className='text-white'><td>  - Dagon</td></tr>
                    <tr className='text-white'><td>  - Nyarlathotep</td></tr>
                    <tr className='text-white'><td>  - The Nameless City</td></tr>
                    <tr className='text-white'><td>  - Azathoth</td></tr>
                    <tr className='text-white'><td>  - The Hound</td></tr>
                    <tr className='text-white'><td>  - The Festival</td></tr>
                    <tr className='text-white'><td>  - The Call of Cthulhu</td></tr>
                    <tr className='text-white'><td>  - The Colour out of Space</td></tr>
                    <tr className='text-white'><td>  - History of the Necronomicon</td></tr>
                    <tr className='text-white'><td>  - The Curse of Yig</td></tr>
                    <tr className='text-white'><td>  - The Dunwich Horror</td></tr>
                    <tr className='text-white'><td>  - The Whisperer in Darkness</td></tr>
                    <tr className='text-white'><td>  - At the Mountains of Madness</td></tr>
                    <tr className='text-white'><td>  - The Shadow over Innsmouth</td></tr>
                    <tr className='text-white'><td>  - The Dreams in the Witch House</td></tr>
                    <tr className='text-white'><td>  - The Man of Stone</td></tr>
                    <tr className='text-white'><td>  - The Horror in the Museum</td></tr>
                    <tr className='text-white'><td>  - The Thing on the Doorstep</td></tr>
                    <tr className='text-white'><td>  - Out of the Aeons</td></tr>
                    <tr className='text-white'><td>  - The Tree on the Hill</td></tr>
                    <tr className='text-white'><td>  - The Shadow out of Time</td></tr>
                    <tr className='text-white'><td>  - The Haunter of the Dark</td></tr>
                </table>
            </div>
            <div>
                <img src={PortraitImage} alt='lovecraft' className='rounded-l mx-auto md:w-full'></img>
            </div>
        </div>
    </div>
  );
};