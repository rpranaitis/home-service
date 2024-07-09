import { MdCleaningServices, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';
import { FaTruckMoving } from 'react-icons/fa';

export const categories = [
  {
    icon: <MdCleaningServices />,
    iconColor: '#b51fef',
    title: 'Cleaning',
  },
  {
    icon: <GiAutoRepair />,
    iconColor: '#e7b633',
    title: 'Repair',
  },
  {
    icon: <PiPaintBrushHouseholdFill />,
    iconColor: '#079c9e',
    title: 'Painting',
  },
  {
    icon: <FaTruckMoving />,
    iconColor: '#e33e44',
    title: 'Shifting',
  },
  {
    icon: <MdOutlinePlumbing />,
    iconColor: '#ed9514',
    title: 'Plumbing',
  },
  {
    icon: <MdOutlineElectricalServices />,
    iconColor: '#0662ba',
    title: 'Electric',
  },
];
