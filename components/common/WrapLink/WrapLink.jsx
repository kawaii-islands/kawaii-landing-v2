import Link from 'next/link';

const WrapLink = ({ to, ...props }) => {
    if (to.startsWith('http')) {
        return <a target="_blank" href={to} {...props} />;
    }

    return <Link href={to} {...props} />;
};

export default WrapLink;
