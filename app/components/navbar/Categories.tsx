'use client';

import Container from "../Container";
import { IoDiamond } from 'react-icons/io5'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: "Windnills",
        icon: GiWindmill,
        description: 'This property has Windnilll!'
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: 'This Property is Modern!'
    },
    {
        label: "Countryside",
        icon: TbMountain,
        description: 'This Property is in the Countryside!'
    },
    {
        label: "Pool",
        icon: TbPool,
        description: 'This Property has a pool!'
    },
    {
        label: "Island",
        icon: GiIsland,
        description: 'This Property is on an Island!'
    },
    {
        label: "Lake",
        icon: GiBoatFishing,
        description: 'This Property is close to a lake!'
    },
    {
        label: "skiing",
        icon: FaSkiing,
        description: 'This Property has a skiing activities!'
    },
    {
        label: "Castles",
        icon: GiCastle,
        description: 'This Property is in a castle!'
    },
    {
        label: "Camping",
        icon: GiForestCamp,
        description: 'This Property has a camping activities!'
    },
    {
        label: "Arctic",
        icon: BsSnow,
        description: 'This Property has a camping activities!'
    },
    {
        label: "Cave",
        icon: GiCaveEntrance,
        description: 'This Property is in a cave!'
    },
    {
        label: "Desert",
        icon: GiCactus,
        description: 'This Property is in a desert!'
    },
    {
        label: "Barns",
        icon: GiBarn,
        description: 'This Property is in a barn!'
    },
    {
        label: "Lux",
        icon: IoDiamond,
        description: 'This Property is luxurious!'
    },

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div className="
                pt-4
                flex
                flex-rpw
                items-center
                justify-between
                overflow-x-auto"
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories


