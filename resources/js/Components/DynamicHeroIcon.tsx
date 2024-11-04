// DynamicHeroIcon.tsx
// Simple Dynamic HeroIcons Component for React (typescript / tsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import { FC } from 'react'
//@ts-ignore
import * as HIcons from '@heroicons/react/outline'

const DynamicHeroIcon: FC<{icon: string}> = (props) => {
    const {...icons} = HIcons
    console.log(icons)
    // @ts-ignore
    const TheIcon: JSX.Element = icons[props.icon]

    return (
        <>
            {/* @ts-ignore */}
            <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </>
    )
}

export default DynamicHeroIcon
