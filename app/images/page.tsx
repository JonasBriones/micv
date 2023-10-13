import Image from 'next/image'


export default function Images(){
    return(
        <>
            <Image 
                src="/warning.png"
                alt="Warning Logo"
                width={100}
                height={100}
            />
        </>
    )
}