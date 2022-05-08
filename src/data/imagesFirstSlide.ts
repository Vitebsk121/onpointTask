import {IimagesData} from "../interfaces/IimagesData";
import styles from "../components/SlideFirst/SlideFirst.module.scss";
import MoleculePic from '../assets/images/slide1/molecule.png'
import BacteriaPic from '../assets/images/slide1/bacteria.png'
import Bacteria1Pic from '../assets/images/slide1/bacteria1.png'
import Bacteria2Pic from '../assets/images/slide1/bacteria2.png'
import Bacteria3Pic from '../assets/images/slide1/bacteria3.png'
import Bacteria4Pic from '../assets/images/slide1/bacteria4.png'
import Bacteria5Pic from '../assets/images/slide1/bacteria5.png'
import PinkSpermPic from '../assets/images/slide1/pink_sperm.png'
import PinkSperm1Pic from '../assets/images/slide1/pink_sperm.png'

export const imagesData: IimagesData[] = [
  {
    url: MoleculePic,
    alt: 'molecule',
    cls: [styles.pic, styles.molecule],
  },
  {
    url: BacteriaPic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria],
  },
  {
    url: Bacteria1Pic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria1],
  },
  {
    url: Bacteria2Pic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria2],
  },
  {
    url: Bacteria3Pic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria3],
  },
  {
    url: Bacteria4Pic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria4],
  },
  {
    url: Bacteria5Pic,
    alt: 'bacteria',
    cls: [styles.pic, styles.bacteria5],
  },
  {
    url: PinkSpermPic,
    alt: 'pink sperm',
    cls: [styles.pic, styles.sperm],
  },
  {
    url: PinkSperm1Pic,
    alt: 'pink sperm',
    cls: [styles.pic, styles.sperm1],
  },
];
