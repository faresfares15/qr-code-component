import Image from 'next/image';

export default function QrCodeCard() {
    return (
        <div className="w-[315px] h-[500px] bg-white rounded-2xl flex flex-col items-center p-4">
            <div>
            <Image
            src="/images/image-qr-code.png"
            alt="QR code"
            width={370}
            height={370}
            className="rounded-xl"
            />
            </div>
            <div className="px-4">
                <h1 className="text-center text-xl font-bold mt-5 text-[#1F3251]">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-center font-normal mt-5 text-[15px] text-[#7B879D]">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    );
}