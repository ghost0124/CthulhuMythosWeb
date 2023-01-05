import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';

import MountainOfMadnessImage from '../../images/at_the_mountain_of_madness.jpg';
import AzatothImage from '../../images/azatoth.jpg';
import BeyondTheWallImage from '../../images/beyond_the_wall_of_sleep_book.jpg';
import CelephaisImage from '../../images/celephais.jpg';
import CoolAirImage from '../../images/cool_air.png';
import DagonImage from '../../images/dagon_book.jpg';
import ExOblivioneImage from '../../images/ex_oblivione.jpg';
import FactsConcerningImage from '../../images/facts_concerning.jpg';
import FromBeyondImage from '../../images/from_beyond.jpg';
import HeImage from '../../images/He.jpg';
import HerberWestImage from '../../images/herber_west_reanimator.jpg';
import NecronomiconImage from '../../images/history_of_necronomicon.jpg';
import HypnosImage from '../../images/hypnos.jpg';
import IbidImage from '../../images/ibid.jpg';
import InTheVaulImage from '../../images/in_the_vault.jpg';
import SweetErmengarde from '../../images/sweet_ermengarde.jpg';
import TheMemoryBookImage from '../../images/memory_book.jpg';
import TheNyarlahotepImage from '../../images/nyarlathotep.jpg';
import TheOldBugsImage from '../../images/old_bugs.jpg';
import ThePickmansImage from '../../images/pickmans_model.jpg';
import ThePolarisImage from '../../images/polaris_book.jpg';
import TheRatsInTheWallImage from '../../images/rats_in_the_walls.jpg';
import TheReminisenceImage from '../../images/reminisence_book.jpg';
import TheShadowOutOfTimeImage from '../../images/shadow_out_of_time.jpg';
import TheSilverKeyImage from '../../images/silver_key.jpg';
import TheAlchemistImage from '../../images/the_alchemist_book.jpg';
import TheCallOfCthulhuImage from '../../images/the_call_of_cthulhu.jpg';
import TheCaseOfImage from '../../images/the_case_of_charles_Dexter_ward.jpg';
import TheCatsImage from '../../images/the_cats_of_ulthar.jpg';
import TheColourOutImage from '../../images/the_colour_out_of_space.jpg';
import TheDescendantImage from '../../images/the_descendant.jpg';
import TheDoomImage from '../../images/the_doom_that_came_to_sarnath.jpg';
import TheDreamQuestOfUnknownImage from '../../images/the_dream_quest_of_unknown_kadath.jpg';
import TheDreamsInTheWitchHouseImage from '../../images/the_dreams_in_the_witch_house.jpg';
import TheDunwitchHorrorImage from '../../images/the_dunwitch_horror.jpg';
import TheEvilClergymanImage from '../../images/the_evil_clergyman.jpg';
import TheFestivalImage from '../../images/the_festival.jpg';
import TheHaunerOfTheDarkImage from '../../images/the_haunter_of_the_dark.jpg';
import TheHorrorAtRedCrookImage from '../../images/the_horror_at_red_crook.jpg';
import TheHoundImage from '../../images/the_hound.jpg';
import TheHunnedHouseImage from '../../images/the_hunned_house.jpg';
import TheImageNotFound from '../../images/the_hunned_house.jpg';
import TheLurkingFearImage from '../../images/the_lurking_fear.jpg';
import TheMoonBogImage from '../../images/the_moon_bog.jpg';
import TheMusicOfErichImage from '../../images/the_music_of_erich_zann.jpg';
import TheNamelessCityImage from '../../images/the_nameless_city.jpg';
import TheOuterGodsImage from '../../images/the_outer_gods.jpg';
import TheOutsiderImage from '../../images/the_outsider.jpg';
import ThePictureInTheHouseImage from '../../images/the_picture_in_the_house.jpg';
import TheQuestImage from '../../images/the_quest_of_iranon.jpg';
import TheShadowOverInnsmouthImage from '../../images/the_shadow_over_innsmouth.jpg';
import TheStatementImage from '../../images/the_statement_of_randolph_carter.jpg';
import TheStrangeHouseImage from '../../images/the_strange_house_in_the_mist.jpg';
import TheStreeImage from '../../images/the_street.jpg';
import TheTempleImage from '../../images/the_temple.jpg';
import TerribleOldManImage from '../../images/the_terrible_old_man.jpg';
import TheThingInTheMoonLightImage from '../../images/the_thing_in_the_moonlight.jpg';
import TheThingOnDoorstepImage from '../../images/the_thing_on_the_doorstep.jpg';
import TheTombImage from '../../images/the_tomb_book.jpg';
import TheTransitionImage from '../../images/the_transition.jpg';
import TheTreeImage from '../../images/the_tree.jpg';
import TheUnnamableImage from '../../images/the_unnamable.jpg';
import VeryOldFolkImage from '../../images/the_very_old_folk.jpg';
import WhiteShipImage from '../../images/the_white_ship.jpg';
import WispererInDarknessImage from '../../images/the_wisperer_in_darkness.jpg';
import WhatTheMoonBringsImage from '../../images/what_the_moon_brings.jpg';

const images = [
    { id: 1, title: 'The alchemist', year: 1908, src: TheAlchemistImage,
      about: 'The story is recounted by the protagonist, Count Antoine de C, in the first person. Hundreds of years ago, Antoines noble ancestor was responsible for the death of a dark wizard, Michel Mauvais. The wizards son, Charles le Sorcier, swore revenge on not only him but all his descendants, cursing them to die on reaching the age of 32. The protagonist recounts how his ancestors all died in some mysterious way around the age of 32. The line has dwindled and the castle has been left to fall into disrepair, tower by tower. Finally, Antoine is the only one left, with one poor servant, Pierre, who raised him, and a tiny section of the castle with a single tower is still usable. Antoine has reached adulthood, and his 32nd year is approaching. His servant eventually dies, leaving him completely alone, and he begins exploring the ruined parts of the castle. He finds a trapdoor in one of the oldest parts. Below, he discovers a passage with a locked door at the end. Just as he turns to leave, he hears a noise behind him and sees that the door is open and someone is standing in it. The man attempts to kill him but Antoine kills him first. His dying words reveal that he is none other than Charles, who actually managed to successfully fabricate the elixir of life, enabling him to personally fulfill the curse generation after generation.' },
    { id: 2, title: 'The tomb', year: 1917, src: TheTombImage,
    about: 'The Tomb" tells of Jervas Dudley, a self-confessed day-dreamer. While still a child, he discovers the entrance to a mausoleum, belonging to the family Hyde, whose nearby family mansion had burnt down many years previously. The entrance to the mausoleum is padlocked and slightly ajar. Jervas attempts to break the padlock, but is unable. Dispirited, he takes to sleeping beside the tomb. Eventually, inspired by reading Plutarchs Lives, Dudley decides to patiently wait until it is his time to gain entrance to the tomb. ' },
    { id: 3, title: 'Dagon', year: 1917, src: DagonImage,
    about: 'The story is the testament of a tortured, morphine-addicted man who plans to commit suicide over an incident that occurred early on in World War I when he was a merchant marine officer. In the unnamed narrators account, his cargo ship is captured by a German sea-raider in "one of the most open and least frequented parts of the broad Pacific." He escapes on a lifeboat and drifts aimlessly across the sea "somewhat south of the equator" until he eventually finds himself inexplicably stranded on "a slimy expanse of hellish black mire ' },
    { id: 4, title: 'A Reminiscence of Dr. Samuel Johnson', year: 1917, src: TheReminisenceImage,
    about: 'Lovecraft has a reputation for being stuffy and for taking himself a little too seriously--I once saw someone on this very sub remark that "Herbert West--Reanimator" was the closest Lovecraft ever got to being funny. That definitely isnt true at all--hes often very funny in his letters and in a few stories like "Sweet Ermengarde". "Reminiscence" might not be particularly funny for a modern audience, but it is a nice reminder that Lovecraft wasnt at all above letting his hair down and indulging in some humor, even at his own expense. The story is a spoof of Lovecrafts antiquarian affectations. Littlewit, the narrator, is born August 20, 1690–200 years to the day before Lovecrafts birthdate—making him nearly 228 years old as he writes a memoir' },
    { id: 5, title: 'Polaris', year: 1918, src: ThePolarisImage,
    about: 'Critic William Fulwiler writes that "Polaris is one of Lovecrafts most autobiographical stories, reflecting his feelings of guilt, frustration, and uselessness during World War I. Like the narrator, HPL was denied a warriors part, for he was feeble and given to strange faintings when subjected to stress and hardships. Like many Lovecraft stories, "Polaris" was in part inspired by a dream, which he described in a letter: "Several nights ago I had a strange dream of a strange city--a city of many palaces and gilded domes, lying in a hollow betwixt ranges of grey, horrible hills.... I was, as I said, aware of this city visually. I was in it and around it. But certainly I had no corporeal existence.' },
    { id: 6, title: 'Beyond the Wall of Sleep', year: 1919, src: BeyondTheWallImage,
    about: 'A former intern and a worker of a mental hospital relates his experience with Joe Slater, an inmate who died at the facility a few weeks after being confined as a criminally insane murderer. He describes Slater as a "typical denizen of the Catskill Mountain region, who corresponds exactly with the white trash of the South", for whom "laws and morals are nonexistent" and whose "general mental status is probably below that of any other native American people". Although Slaters crime was exceedingly brutal and unprovoked, he had an "absurd appearance of harmless stupidity" and the doctors guessed his age at about forty. During the third night of his confinement, Slater had the first of his "attacks". He burst out from an uneasy sleep and into a frenzy which was so violent that it took four orderlies to restrain and strait-jacket him. For nearly fifteen minutes he gave vent to an incredible rant.' },
    { id: 7, title: 'Memory', year: 1919, src: TheMemoryBookImage,
    about: 'This story takes place in the ancient valley of Nis, in vegetation-covered stone ruins described by Lovecraft in great detail. These crumbling blocks of monolithic stone now serve only for grey toads and snakes to nest under. Interspersed in the ruins are large trees that are home to little apes. Through the bottom of this valley runs the great, slimy red river called Than. Memory" involves only two characters: "the Genie that haunts the moonbeams" and "the Daemon of the Valley". The Genie inquires of the Daemon who it was that long ago placed the stones that were now the desolate ruin near the river Than. The Daemon replies that he remembers the name of the creatures "clearly," but only because their name rhymed with that of the river: they were called Man. He also remembers "dimly" that they appeared like the small apes that now leap through the ruins. The Genie flies back to his moonbeams, and the Daemon turns to regard an ape in silent contemplation' },
    { id: 8, title: 'Old Bugs', year: 1919, src: TheOldBugsImage,
    about: 'With the onset of Prohibition, the Sheehan Billiard Room in Chicago became a sordid haunt for hard drinkers. A certain Old Bugs, a mature man corroded by vices but capable of showing, at long intervals, the typical sensitivity of educated people works as a kitchen cleaner. When the young Alfred Trever, initiated by his friend Pete Schultz on the way of drinking, arrives at the Sheehans tavern, Old Bugs will try to convince him not to make the same mistake as he did.' },
    { id: 9, title: 'The Transition of Juan Romero', year: 1919, src: TheTransitionImage,
    about: 'he story involves a mine that uncovers a very deep chasm, too deep for any sounding lines to hit bottom. The night after the discovery of the abyss the narrator and one of the mines workers, a Mexican called Juan Romero, venture inside the mine, drawn against their will by a mysterious rhythmical throbbing in the ground. Romero reaches the abyss first and is swallowed by it. The narrator peers over the edge, sees something - "but God, I dare not tell you what I saw!" and loses consciousness. That morning he and Romero are both found in their bunks, Romero dead. Other miners swear that neither of them left their cabin that night. The chasm has vanished as well.  ----- Huitzilopochtli, a Mesoamerican deity associated with human sacrifice, is mentioned, indicating that Juan Romeros transition may have been related to a sacrifice ritual. ' },
    { id: 10, title: 'The White Ship', year: 1919, src: WhiteShipImage,
    about: 'A lighthouse keeper named Basil Elton engages upon a peculiar fantasy in which a robed, bearded man is piloting a mystical white ship which appears when the moon is full. Elton walks out across the water on a bridge of moonbeams and joins the bearded man on this ship, and together they explore a mystical chain of islands unlike anything that can be found on Earth.' },
    { id: 11, title: 'The Doom that Came to Sarnath', year: 1919, src: TheDoomImage,
    about: 'According to the tale, more than 10,000 years ago, a race of shepherd people colonized the banks of the river Ai in a land called Mnar, forming the cities of Thraa, Ilarnek, and Kadatheron (not to be confused with Kadath), which rose to great intellectual and mercantile prowess. Craving more land, a group of these hardy people migrated to the shores of a lonely and vast lake at the heart of Mnar, founding the metropolis of Sarnath. But the settlers were not alone. At the other side of the lake was the ancient, grey-stone city of Ib, inhabited by a queer race who had descended from the moon. Lovecraft described them as "in hue as green as the lake and the mists that rise above it.... They had bulging eyes, pouting, flabby lips, and curious ears, and were without voice. These beings worshipped a strange god known as Bokrug, the Great Water Lizard, although it was more their physical form that caused the people of Sarnath to despise them. ' },
    { id: 12, title: 'The statement of Randolph Carter', year: 1919, src: TheStatementImage,
    about: ' It tells of a traumatic event in the life of Randolph Carter, a student of the occult loosely representing Lovecraft himself. It is the first story in which Carter appears. "The Statement of Randolph Carter" is the first person testimony of the titular character, who has been found wandering through swampland in an amnesiac shock. In his statement, Carter attempts to explain the disappearance of his companion, the occultist Harley Warren. Warren has come into the possession of a book, written in an unknown language, the exact contents of which he never revealed to Carter. Carter mentions that Warren has other "strange, rare books on forbidden subjects", several of which are in Arabic. ' },
    { id: 13, title: 'The Street', year: 1919, src: TheStreeImage,
    about: 'The story traces the history of the titular street in a New England city, presumably Boston, from its first beginnings as "but a path" in colonial times to a quasi-supernatural occurrence in the years immediately following World War I. As the city grows up around the street, it is planted with many trees and built along with "simple, beautiful houses of brick and wood", each with a rose garden. As the Industrial Revolution runs its course, the area degenerates into a run-down and polluted slum, with all of the streets old houses falling into disrepair. ' },
    { id: 14, title: 'The Terrible Old Man', year: 1920, src: TerribleOldManImage,
    about: 'The Terrible Old Man is a strange elderly man "so old that no one can remember when he was young, and so taciturn that few know his real name." He lives alone in an ancient house on Water Street in the town of Kingsport. Even among the locals, few know the details of the Old Mans life, but it is believed that he captained East Indian clipper ships in his youth and had accumulated great riches throughout his life. Those who had visited the property had seen bizarre collections of stones in the front yard and observed the Old Man carrying on conversations with mysterious bottles on his table, which make certain definite vibrations as if in answer. Most locals take care to avoid the Old Man and his house. ' },
    { id: 15, title: 'The Cats of Ulthar', year: 1920, src: TheCatsImage,
    about: 'An unnamed narrator, while gazing upon his pet cat, begins to reminisce about a law in the town of Ulthar that forbids the killing of cats and relates the story of how this law came to be. The tale begins with the introduction of an old cotter (farmer) and his wife who delight in trapping and violently killing any cats who venture onto their property. The people of the town are too afraid of the couple to speak against these acts, so they instead focus their efforts on keeping their felines from approaching the cotters house. One night a caravan of travelers from a distant land arrives and passes through the village. They bring with them an orphan named Menes who, having lost his family to a plague, has only a small, black kitten to keep him company. After being unable to find his kitten on the third day of his stay, Menes hears the stories of the old cotter and his wife, and decides to take action. ' },
    { id: 16, title: 'The Tree', year: 1920, src: TheTreeImage,
    about: 'About The Tree' },
    { id: 17, title: 'Celephais', year: 1920, src: CelephaisImage,
    about: 'About the Celephais' },
    { id: 18, title: 'From Beyond', year: 1920, src: FromBeyondImage,
    about: 'About the From Beyond' },
    { id: 19, title: 'The Temple', year: 1920, src: TheTempleImage,
    about: 'About the Temple' },
    { id: 20, title: 'Nyarlathotep', year: 1920, src: TheNyarlahotepImage,
    about: 'About the Nyarlathotep' },
    { id: 21, title: 'The Picture in the House', year: 1920, src: ThePictureInTheHouseImage,
    about: 'About the Picture in the House' },
    { id: 22, title: 'Facts Concerning the Late Arthur Jermyn and His Famility', year: 1920, src: FactsConcerningImage,
    about: 'About the Facts Concerning the Late Arthur Jermyn and His Famility' },
    { id: 23, title: 'The Nameless City', year: 1921, src: TheNamelessCityImage,
    about: 'About the Nameless City' },
    { id: 24, title: 'The Quest of Iranon', year: 1921, src: TheQuestImage,
    about: 'About the Quest of Iranon' },
    { id: 25, title: 'The Moon-Bog', year: 1921, src: TheMoonBogImage,
    about: 'About the Moon-Bog' },
    { id: 26, title: 'Ex Oblivione', year: 1921, src: ExOblivioneImage,
    about: 'About the Ex Oblivione' },
    { id: 27, title: 'The Other Gods', year: 1921, src: TheOuterGodsImage,
    about: 'About the Other Gods' },
    { id: 28, title: 'The Outsider', year: 1921, src: TheOutsiderImage,
    about: 'About the Outsider' },
    { id: 29, title: 'The Music of Erich Zann', year: 1921, src: TheMusicOfErichImage,
    about: 'About the Music of Erich Zann' },
    { id: 30, title: 'Sweet Ermengarde', year: 1921, src: SweetErmengarde,
    about: 'About the Sweet Ermengarde' },
    { id: 31, title: 'Hypnos', year: 1922, src: HypnosImage,
    about: 'About the Hypnos' },
    { id: 32, title: 'What the Moon Brings', year: 1922, src: WhatTheMoonBringsImage,
    about: 'About the What the Moon Bring' },
    { id: 33, title: 'Azatoth', year: 1922, src: AzatothImage,
    about: 'About the Azatoth' },
    { id: 34, title: 'Herbert West-Reanimator', year: 1922, src: HerberWestImage,
    about: 'About the Herbert West-Reanimator' },
    { id: 35, title: 'The Hound', year: 1922, src: TheHoundImage,
    about: 'About the Hound' },
    { id: 36, title: 'The Lurking Fear', year: 1922, src: TheLurkingFearImage,
    about: 'About the Lurking Fear' },
    { id: 37, title: 'The Rats in the Walls', year: 1922, src: TheRatsInTheWallImage,
    about: 'About the Rats in the Walls' },
    { id: 38, title: 'The Unnamable', year: 1923, src: TheUnnamableImage,
    about: 'About the Unnamable' },
    { id: 39, title: 'The Festival', year: 1923, src: TheFestivalImage,
    about: 'About the Festival' },
    { id: 40, title: 'The Shunned House', year: 1924, src: TheHunnedHouseImage,
    about: 'About the Shunned House' },
    { id: 41, title: 'The Horror at Red Hook', year: 1924, src: TheHorrorAtRedCrookImage,
    about: 'About the Horror at Red Hook' },
    { id: 42, title: 'In the Vault', year: 1925, src: InTheVaulImage,
    about: 'About the In the Vault' },
    { id: 43, title: 'Cool Air', year: 1926, src: CoolAirImage,
    about: 'About the Cool Air' },
    { id: 44, title: 'The Call of Cthulhu', year: 1926, src: TheCallOfCthulhuImage,
    about: 'About the Call of Cthulhu' },
    { id: 45, title: 'Pickmans Model', year: 1926, src: ThePickmansImage,
    about: 'About the Pickmans Model' },
    { id: 46, title: 'The Strange High Mouse in the Mist', year: 1926, src: TheStrangeHouseImage,
    about: 'About the Strange High Mouse in the Mist' },
    { id: 47, title: 'The Silver Key', year: 1926, src: TheSilverKeyImage,
    about: 'About the Silver Key' },
    { id: 48, title: 'The Dream-Quest of Unknown Kadath', year: 1927, src: TheDreamQuestOfUnknownImage,
    about: 'About the Dream-Quest of Unknown Kadathe' },
    { id: 49, title: 'The Case of Charles Dexter Ward', year: 1927, src: TheCaseOfImage,
    about: 'About the Case of Charles Dexter Ward' },
    { id: 50, title: 'The Colour Out of Space', year: 1927, src: TheColourOutImage,
    about: 'About the Colour Out of Space' },
    { id: 51, title: 'The Descendant', year: 1927, src: TheDescendantImage,
    about: 'About the Descendant' },
    { id: 52, title: 'The Very Old Folk', year: 1927, src: VeryOldFolkImage,
    about: 'About the Very Old Folk' },
    { id: 53, title: 'History of the Necronomicon', year: 1927, src: NecronomiconImage,
    about: 'About the History of the Necronomicon' },
    { id: 54, title: 'The Dunwitch Horror', year: 1928, src: TheDunwitchHorrorImage,
    about: 'About the Dunwitch Horror' },
    { id: 55, title: 'Ibid', year: 1928, src: IbidImage,
    about: 'About the Ibid' },
    { id: 56, title: 'The Wisperer in Darkness', year: 1930, src: WispererInDarknessImage,
    about: 'About the Wisperer in Darkness' },
    { id: 57, title: 'At the Mountains of Madness', year: 1931, src: MountainOfMadnessImage,
    about: 'About the Mountains of Madness' },
    { id: 58, title: 'The Shadow over Innsmouth', year: 1931, src: TheShadowOverInnsmouthImage,
    about: 'About the Shadow over Innsmouth' },
    { id: 59, title: 'The Dreams in the Witch House', year: 1932, src:TheDreamsInTheWitchHouseImage,
    about: 'About the Dreams in the Witch House' },
    { id: 60, title: 'The Thing on the Doorstep', year: 1933, src: TheThingOnDoorstepImage,
    about: 'About the Thing on the Doorstep' },
    { id: 61, title: 'The Book', year: 1933,
    about: 'About the Book' },
    { id: 62, title: 'The Evil Clergyman', year: 1933, src: TheEvilClergymanImage,
    about: 'About the Evil Clergyman' },
    { id: 63, title: 'The Shadow Out of Time', year: 1935, src: TheShadowOutOfTimeImage,
    about: 'About the Shadow Out of Time' },
    { id: 64, title: 'The Haunter of the Dark', year: 1935, src: TheHaunerOfTheDarkImage,
    about: 'About the Haunter of the Dark' },
    { id: 65, title: 'He', year: 1925, src: HeImage,
    about: 'About the He' }
  ];

function ControlledCarousel() {
 
  return (
    <div>
      <div>
        <div className='justify-center h-full'>
          <h2 className='text-4xl font-bold text-white'>Library</h2>
        </div>
      </div>

      <Carousel>
          {images.map((image) => (
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='slide'>
                    <img src={image.src} key={image.id} width={250} height={250} />
                    <h4 className='text-white'>{image.title} - {image.year}</h4>
                  </div>
                </div>
                <div className='col'>
                    <h4 className='text-white'>{image.about}</h4>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;