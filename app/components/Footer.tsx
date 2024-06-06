import Image from "next/image";
import { tw } from "../lib/tailwindest";
const footer = tw.style({
    paddingTop: 'pt-[4rem]',
    paddingBottom: 'pb-[1rem]',
    gap: 'gap-[1.53rem]',
    display: 'flex',
    flexDirection: 'flex-col',
    borderTopRadius: 'rounded-t-[5rem]',
    backgroundColor: 'bg-blue-950',
    height: 'h-[16rem]',
    width: 'w-full',
    paddingLeft: 'pl-[3rem]',
    paddingRight: 'pr-[3.06rem]',
    '@desktop': {
        paddingLeft: 'desktop:pl-[14rem]',
        paddingRight: 'desktop:pr-[14.06rem]',
    },
    '@screen': {
        paddingLeft: 'screen:pl-[21rem]',
        paddingRight: 'screen:pr-[21.06rem]',
    }
});

const footerStart = tw.style({
    display: 'flex',
    gap: 'gap-[7.5rem]',
    width: 'w-full',
});

const footerEnd = tw.style({
    display: 'flex',
    alignItems: 'items-start',
    justifyContent: 'justify-start',
    borderTopWidth: 'border-t-[1px]',
    borderTopColor: 'border-t-white',
    paddingY: 'py-[1rem]'
})

const business_logo = tw.style({
    display: 'flex',
    flexDirection: 'flex-col',
    gap: 'gap-[1.56rem]'
});
const heroButtons = tw.style({
    display: 'flex',
    justifyContent: 'justify-between',
    alignItems: 'items-center',
    width: 'w-full',

});

const heroButton = tw.style({
    color: "text-white",
    padding: "p-[1rem]",
    height: "h-[3rem]",
    width: 'w-max',
    fontWeight: "font-medium",
    ":hover": {
        color: "hover:text-sky",
    },
    ":active": {
        color: "active:text-sky",
    },
});
export const Footer = () => {
    return (
        <div className={footer.class}>
            <div className={footerStart.class}>
                <div className={business_logo.class}>
                    <Image src={'/named_logo.svg'} width={176} height={56} alt="logo" />
                    <span className="-tracking-[.03rem] leading-[1.48rem] min-w-max text-white">
                        Your platform to grow your business.
                    </span>
                </div>
                <div className={heroButtons.class}>
                    <div className={heroButton.class}>Platform</div>
                    <div className={heroButton.class}>Plans</div>
                    <div className={heroButton.class}>For providers</div>
                    <div className={heroButton.class}>About us</div>
                </div>
            </div>
            <div className={footerEnd.class}>
                <span className="min-w-max leading-[1.2025rem] -tracking-[.02438rem] text-[.8125rem] text-[#AFD0FF]">
                    2024 Brieflly, All rights reserved
                </span>
            </div>
        </div>
    )
}