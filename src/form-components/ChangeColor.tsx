import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string): React.JSX.Element => {
                return (
                    <span key={color}>
                        {"    "}
                        <Form.Check
                            type="radio"
                            name="colors"
                            onChange={() => {
                                setChosenColor(color);
                            }}
                            id={"color-" + color}
                            value={color}
                            checked={chosenColor === color}
                            inline={true}
                        />
                        <span style={{ backgroundColor: color }}>{color}</span>
                    </span>
                );
            })}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
