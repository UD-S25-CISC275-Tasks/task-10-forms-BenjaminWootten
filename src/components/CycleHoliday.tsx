import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "🦅" | "🎃" | "🦃" | "🎄";

const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎉": "🦅",
    "🦅": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎉"
};

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🦅",
    "🦅": "🎃",
    "🎃": "🎉",
    "🎉": "🦃",
    "🦃": "🎄"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎉");

    function yearChange(): void {
        setHoliday(YEAR_TRANSITIONS[holiday]);
    }
    function alphabetChange(): void {
        setHoliday(ALPHABET_TRANSITIONS[holiday]);
    }

    return (
        <div>
            <Button onClick={alphabetChange}>Advance by Alphabet</Button>
            <Button onClick={yearChange}>Advance by Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
