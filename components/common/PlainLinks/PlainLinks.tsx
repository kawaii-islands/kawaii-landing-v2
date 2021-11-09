import React from 'react';
import WrapLink from '../WrapLink/WrapLink';
import './PlainLinks.scss';

type LinkProps = {
    path: string;
    title: string;
};

const PlainLinks: React.FC<{ items: LinkProps[]; className?: string; title: string; }> = ({ items, className = '', title }) => {
    return (
        <ul className={`plain-nav ${className}`}>
            <li className="plain-nav-item" key="#">
                <span className="plain-nav-title">{title}</span>
            </li>
            {items.map(({ path, title }) => (
                <li className="plain-nav-item" key={title}>
                    <WrapLink className="plain-nav-link plain-nav-icon-text" to={path}>
                        {title}
                    </WrapLink>
                </li>
            ))}
        </ul>
    );
};

export default PlainLinks;
