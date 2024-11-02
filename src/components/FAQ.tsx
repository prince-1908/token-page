import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
    return (
        <div className='h-screen px-[5rem] flex flex-col justify-center'>
            <h2 className='heading'>FAQ</h2>


            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className='px-16 py-3'>
                    <AccordionTrigger className='text'>How much benefit will liquidity providers receive? </AccordionTrigger>
                    <AccordionContent>
                        Vidisse labores aliquando est id, cu utroque urbanitas est. Appetere definitiones eu vel, suas adolescens mnesarchum ei duo. Habemus vivendum pertinax ne eam, id rebum expetendis eos. Ex qui soleat aliquid.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className={`px-16 py-3`}>
                    <AccordionTrigger className='text'>How much benefit will AUSD minters receive?</AccordionTrigger>
                    <AccordionContent>
                        Vidisse labores aliquando est id, cu utroque urbanitas est. Appetere definitiones eu vel, suas adolescens mnesarchum ei duo. Habemus vivendum pertinax ne eam, id rebum expetendis eos. Ex qui soleat aliquid.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className='px-16 py-3'>
                    <AccordionTrigger className='text'>How much benefit will borrowers receive?</AccordionTrigger>
                    <AccordionContent>
                        Vidisse labores aliquando est id, cu utroque urbanitas est. Appetere definitiones eu vel, suas adolescens mnesarchum ei duo. Habemus vivendum pertinax ne eam, id rebum expetendis eos. Ex qui soleat aliquid.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className='px-16 py-3'>
                    <AccordionTrigger className='text'>How much benefit will LP token providers receive? </AccordionTrigger>
                    <AccordionContent>
                        Vidisse labores aliquando est id, cu utroque urbanitas est. Appetere definitiones eu vel, suas adolescens mnesarchum ei duo. Habemus vivendum pertinax ne eam, id rebum expetendis eos. Ex qui soleat aliquid.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className='px-16 py-3'>
                    <AccordionTrigger className='text'>How much benefit will AQUA staker receive? </AccordionTrigger>
                    <AccordionContent>
                        Vidisse labores aliquando est id, cu utroque urbanitas est. Appetere definitiones eu vel, suas adolescens mnesarchum ei duo. Habemus vivendum pertinax ne eam, id rebum expetendis eos. Ex qui soleat aliquid.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
