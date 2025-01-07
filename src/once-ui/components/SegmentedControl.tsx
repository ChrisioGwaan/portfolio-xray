'use client';

import { useState, useEffect } from 'react';
import { Flex, ToggleButton, Scroller } from '.';

interface ButtonOption {
    label?: React.ReactNode;
    value: string;
    prefixIcon?: string;
    suffixIcon?: string;
    className?: string;
}

interface SegmentedControlProps {
    buttons: ButtonOption[];
    onToggle: (selected: string) => void;
    defaultSelected?: string;
    selected?: string;
    className?: string;
    style?: React.CSSProperties;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
    buttons,
    onToggle,
    defaultSelected,
    selected,
    className,
    style,
}) => {
    const [internalSelected, setInternalSelected] = useState<string>(() => {
        if (selected !== undefined) return selected;
        if (defaultSelected !== undefined) return defaultSelected;
        return buttons[0]?.value || '';
    });

    useEffect(() => {
        if (selected !== undefined) {
            setInternalSelected(selected);
        }
    }, [selected]);

    const handleButtonClick = (clickedButton: ButtonOption) => {
        const newSelected = clickedButton.value;
        setInternalSelected(newSelected);
        onToggle(newSelected);
    };

    const selectedIndex = buttons.findIndex(
        button => button.value === internalSelected
    );

    return (
        <Flex
            fillWidth
            minWidth={0}
            position="relative"
            className={className}
            style={style}
        >
            <Flex
                fillWidth
                position="relative"
                overflowX="hidden"
                overflowY="hidden"
            >
                <Scroller contained={true} direction="row">
                    <Flex fillWidth gap="2">
                        {buttons.map((button, index) => {
                            let label: string | undefined;
                            let children: React.ReactNode = undefined;

                            if (typeof button.label === 'string') {
                                label = button.label;
                            } else {
                                children = button.label;
                            }

                            return (
                                <ToggleButton
                                    key={button.value}
                                    label={label}
                                    value={button.value}
                                    selected={index === selectedIndex}
                                    onClick={() => handleButtonClick(button)}
                                    prefixIcon={button.prefixIcon}
                                    suffixIcon={button.suffixIcon}
                                    width="fill"
                                    aria-pressed={index === selectedIndex}
                                >
                                    {children}
                                </ToggleButton>
                            );
                        })}
                    </Flex>
                </Scroller>
            </Flex>
        </Flex>
    );
};

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
export type { SegmentedControlProps, ButtonOption };