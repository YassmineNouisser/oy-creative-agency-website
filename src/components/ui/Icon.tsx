import {
  HiOutlineDesktopComputer,
  HiOutlineSpeakerphone,
  HiOutlinePencilAlt,
  HiOutlineFilm,
  HiOutlineLightningBolt,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineColorSwatch,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineCheck,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineEye,
} from 'react-icons/hi';
import { FaWhatsapp, FaInstagram, FaTrophy } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  computer: HiOutlineDesktopComputer,
  megaphone: HiOutlineSpeakerphone,
  pencil: HiOutlinePencilAlt,
  film: HiOutlineFilm,
  target: FiTarget,
  bolt: HiOutlineLightningBolt,
  refresh: HiOutlineRefresh,
  chart: HiOutlineChartBar,
  users: HiOutlineUserGroup,
  globe: HiOutlineGlobeAlt,
  lightbulb: HiOutlineLightBulb,
  palette: HiOutlineColorSwatch,
  eye: HiOutlineEye,
  trophy: FaTrophy,
  envelope: HiOutlineMail,
  phone: HiOutlinePhone,
  mappin: HiOutlineLocationMarker,
  check: HiOutlineCheck,
  checkcircle: HiOutlineCheckCircle,
  clock: HiOutlineClock,
  user: HiOutlineUser,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
};

export type IconName = keyof typeof iconMap;

export default function Icon({ name, className = '' }: { name: string; className?: string }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
