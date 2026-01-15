import React from 'react';

const RabbitLogo = ({ size = 40, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ overflow: 'visible' }}
    >
        {/* Stylized Rabbit Head Silhouette based on brand */}
        <path
            d="M50 85C70 85 85 70 85 50C85 30 70 25 60 25C65 10 60 0 50 0C40 0 35 10 40 25C30 25 15 30 15 50C15 70 30 85 50 85Z"
            fill="currentColor"
        />
        <circle cx="35" cy="45" r="5" fill="white" />
        <circle cx="65" cy="45" r="5" fill="white" />
    </svg>
);

export default RabbitLogo;
