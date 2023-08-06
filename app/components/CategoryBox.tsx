'use client'

import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from 'query-string'

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label // The current label is going to be the category params in our URL
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }
        // If the category we click on is already beem selected in the URL theat means we want to reset it from the newest query
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url)
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            trensition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
            <Icon size={26} />
            <div className='font-medium text-sm'>{label}</div>
        </div>
    )
}

export default CategoryBox