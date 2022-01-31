import React, { useState, useCallback } from 'react';
import { HamburgerArrow } from 'react-animated-burgers'

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )
    return (
        <div>
            <HamburgerArrow
                buttonColor="#FFBC67"
                barColor="white"
                {...{ isActive, toggleButton }}
            />
        </div>
    );
};

export default Hamburger;