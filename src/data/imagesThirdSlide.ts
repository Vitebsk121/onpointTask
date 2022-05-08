import {IimagesData} from "../interfaces/IimagesData";
import styles from "../components/SlideThird/SlideThird.module.scss";
import BottlePic from '../assets/images/slide3/bottle.png'
import BubbleBluePic from '../assets/images/slide3/bubble_blue.png'
import BubbleRedPic from '../assets/images/slide3/bubble_red.png'
import BubblePinkPic from '../assets/images/slide3/bubble_pink.png'
import BubbleDarkBluePic from '../assets/images/slide3/bubble_darkBlue.png'

export const imagesData: IimagesData[] = [
  {
    url: BottlePic,
    alt: 'bottle',
    cls: [styles.pic, styles.bottle],
  },
  {
    url: BubbleBluePic,
    alt: 'blue bubble',
    cls: [styles.pic, styles.bubble1],
  },
  {
    url: BubbleBluePic,
    alt: 'blue bubble',
    cls: [styles.pic, styles.bubble2],
  },
  {
    url: BubbleRedPic,
    alt: 'red bubble',
    cls: [styles.pic, styles.bubble3],
  },
  {
    url: BubblePinkPic,
    alt: 'pink bubble',
    cls: [styles.pic, styles.bubble4],
  },
  {
    url: BubbleBluePic,
    alt: 'blue bubble',
    cls: [styles.pic, styles.bubble5],
  },
  {
    url: BubblePinkPic,
    alt: 'pink bubble',
    cls: [styles.pic, styles.bubble6],
  },
  {
    url: BubbleBluePic,
    alt: 'blue bubble',
    cls: [styles.pic, styles.bubble7],
  },
  {
    url: BubbleDarkBluePic,
    alt: 'dark blue bubble',
    cls: [styles.pic, styles.bubble8],
  },
];
