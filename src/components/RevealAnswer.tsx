import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<Boolean>(false);

    function changeVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            Answer: <span>{visible === true ? "42" : " "}</span>
        </div>
    );
}
