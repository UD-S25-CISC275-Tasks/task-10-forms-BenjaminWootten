import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function swapType(): void {
        if (type === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={swapType}>Change Type</Button>{" "}
            {type === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </span>
    );
}
