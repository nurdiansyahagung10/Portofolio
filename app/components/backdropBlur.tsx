type Props = {
    isOpen: boolean;
}

export default function BackdropBlur({ isOpen }: Props) {

    return (
        <div className={`fixed top-0 left-0 right-0 -z-10 scale-0 bottom-0 bg-transparent transition-[backdrop-filter,background-color] duration-500 backdrop-blur-none ${isOpen ? 'bg-black/35! backdrop-blur-md! scale-100' : ''} `}>

        </div>
    );
}