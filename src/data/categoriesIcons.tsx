import {
  BiAlbum,
  BiAnchor,
  BiArch,
  BiAtom,
  BiAward,
  BiBaguette,
  BiBaseball,
  BiBath,
  BiBattery,
  BiBed,
  BiBook,
  BiBookReader,
  BiBot,
  BiBowlHot,
  BiBrain,
  BiBriefcase,
  BiBrush,
  BiBuilding,
  BiBulb,
  BiBus,
  BiCalendarCheck,
  BiCamera,
  BiCapsule,
  BiCar,
  BiCart,
  BiCctv,
  BiChair,
  BiChalkboard,
  BiCheese,
  BiChurch,
  BiClinic,
  BiCoffee,
  BiCookie,
  BiCool,
  BiCreditCard,
  BiCycling,
  BiDesktop,
  BiDevices,
  BiDish,
  BiDollarCircle,
  BiDonateHeart,
  BiDumbbell,
  BiFilm,
  BiFoodMenu,
  BiFootball,
  BiFork,
  BiGasPump,
  BiGhost,
  BiGift,
  BiGlasses,
  BiGroup,
  BiHandicap,
  BiHeadphone,
  BiHeart,
  BiHome,
  BiHotel,
  BiIdCard,
  BiInjection,
  BiJoystick,
  BiKey,
  BiLandscape,
  BiMicrophone,
  BiMobileAlt,
  BiMoney,
  BiMoviePlay,
  BiMusic,
  BiNavigation,
  BiNews,
  BiPaint,
  BiPalette,
  BiParty,
  BiPhoneCall,
  BiPlusMedical,
  BiRestaurant,
  BiRocket,
  BiSmile,
  BiSolidPlaneAlt,
  BiSun,
  BiTrophy,
} from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaRegSadTear } from "react-icons/fa";
import { GiClothes, GiHealthPotion, GiPathDistance, GiPayMoney, GiTreeBeehive } from "react-icons/gi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LuDog } from "react-icons/lu";
import { MdFamilyRestroom, MdOutlineCleaningServices, MdOutlineSecurity } from "react-icons/md";

const icons = {
  album: <BiAlbum size={24} />,
  anchor: <BiAnchor size={24} />,
  arch: <BiArch size={24} />,
  atom: <BiAtom size={24} />,
  award: <BiAward size={24} />,
  baguette: <BiBaguette size={24} />,
  baseball: <BiBaseball size={24} />,
  bath: <BiBath size={24} />,
  battery: <BiBattery size={24} />,
  bed: <BiBed size={24} />,
  book: <BiBook size={24} />,
  bot: <BiBot size={24} />,
  bowlHot: <BiBowlHot size={24} />,
  brush: <BiBrush size={24} />,
  building: <BiBuilding size={24} />,
  bulb: <BiBulb size={24} />,
  bus: <BiBus size={24} />,
  calendarCheck: <BiCalendarCheck size={24} />,
  camera: <BiCamera size={24} />,
  capsule: <BiCapsule size={24} />,
  car: <BiCar size={24} />,
  cart: <BiCart size={24} />,
  ccTv: <BiCctv size={24} />,
  chair: <BiChair size={24} />,
  cheese: <BiCheese size={24} />,
  church: <BiChurch size={24} />,
  clinic: <BiClinic size={24} />,
  coffee: <BiCoffee size={24} />,
  cookie: <BiCookie size={24} />,
  cool: <BiCool size={24} />,
  creditCard: <BiCreditCard size={24} />,
  cycling: <BiCycling size={24} />,
  desktop: <BiDesktop size={24} />,
  devices: <BiDevices size={24} />,
  dish: <BiDish size={24} />,
  finance: <BiDollarCircle size={24} />,
  donate: <BiDonateHeart size={24} />,
  film: <BiFilm size={24} />,
  foodMenu: <BiFoodMenu size={24} />,
  football: <BiFootball size={24} />,
  fork: <BiFork size={24} />,
  gasPump: <BiGasPump size={24} />,
  ghost: <BiGhost size={24} />,
  gift: <BiGift size={24} />,
  glasses: <BiGlasses size={24} />,
  group: <BiGroup size={24} />,
  handicap: <BiHandicap size={24} />,
  headphone: <BiHeadphone size={24} />,
  heart: <BiHeart size={24} />,
  home: <BiHome size={24} />,
  hotel: <BiHotel size={24} />,
  idCard: <BiIdCard size={24} />,
  injection: <BiInjection size={24} />,
  joystick: <BiJoystick size={24} />,
  key: <BiKey size={24} />,
  landscape: <BiLandscape size={24} />,
  microphone: <BiMicrophone size={24} />,
  mobile: <BiMobileAlt size={24} />,
  money: <BiMoney size={24} />,
  moviePlay: <BiMoviePlay size={24} />,
  music: <BiMusic size={24} />,
  navigation: <BiNavigation size={24} />,
  news: <BiNews size={24} />,
  party: <BiParty size={24} />,
  restaurant: <BiRestaurant size={24} />,
  rocket: <BiRocket size={24} />,
  trophy: <BiTrophy size={24} />,
  phoneCall: <BiPhoneCall size={24} />,
  plusMedical: <BiPlusMedical size={24} />,
  work: <BiBriefcase size={24} />,
  family: <MdFamilyRestroom size={24} />,
  pets: <LuDog size={24} />,
  mentalHealth: <BiBrain size={24} />,
  exercise: <BiDumbbell size={24} />,
  art: <BiPalette size={24} />,
  nature: <GiTreeBeehive size={24} />,
  reading: <BiBookReader size={24} />,
  travel: <BiSolidPlaneAlt size={24} />,
  fun: <BiSmile size={24} />,
  relaxation: <BiSun size={24} />,
  sadness: <FaRegSadTear size={24} />,
  creativity: <BiPaint size={24} />,
  adventure: <GiPathDistance size={24} />,
  learning: <BiChalkboard size={24} />,
  service: <MdOutlineCleaningServices size={24} />,
  supermarket: <HiOutlineBuildingStorefront size={24} />,
  clothes: <GiClothes size={24} />,
  security: <MdOutlineSecurity size={24} />,
  health: <GiHealthPotion size={24} />,
  others: <CiCircleMore size={24} />,
  salary: <GiPayMoney size={24} />,
};

export default icons;