import React from 'react'
import PortraitImage from '../images/lovecraft.jpg';
import { Link } from 'react-scroll';

export const Biography = () => {
  return (
    <div name="Biography" className='h-screen w-full bg-gradient-to-b from-black via-green to-green-800'>
         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold text-white'>Howard Philips Lovecraft</h2>
                <h6 className='text-gray-200 py-4 max-w-md'>Howard Phillips Lovecraft (August 20, 1890 – March 15, 1937), of Providence, Rhode Island, was an American author of fantasy, horror, and science fiction.
                        Lovecraft's major inspiration and invention was cosmic horror, the basic premise of which is that the true workings of the universe are beyond human comprehension and that humanity's place in the cosmos is terrifyingly insignificant. A key feature of many of his stories is the existence of powerful, extraterrestrial or supernatural entities that influence or threaten the human world in subtle ways, and whose mere perception by human observers often drives the latter to madness.
                        has become a cult figure for his Cthulhu Mythos, a series of loosely interconnected fictions featuring a pantheon of human-invalidating entities, as well as the famed Necronomicon, a grimoire of magical rites and forbidden lore. His works were deeply pessimistic, fabricating a mythos that challenged the values of the Enlightenment, Romanticism, and Christianity.
                        Lovecraft's readership was limited during his life, his reputation has grown over the decades, and he is now commonly regarded as one of the most influential horror writers of the 20th Century, exerting widespread and indirect influence, and frequently compared to Edgar Allan Poe in the tone of his writing style.
                        He is sometime suspected of having used the pseudonym Paul H. Lovering, "author of When The Earth Grew Cold and The Colour Out of Space [sic], etc.",[1] when publishing the story "The Inevitable Conflict?". However a word analysis of this story showed that it significantly deviates from Lovecraft's known corpus of text.[2]  
                </h6>
            </div>
            <div>
                <img src={PortraitImage} alt='lovecraft' className='rounded-2xl mx-auto md:w-full'></img>
            </div>
        </div>
    </div>
  );
};
