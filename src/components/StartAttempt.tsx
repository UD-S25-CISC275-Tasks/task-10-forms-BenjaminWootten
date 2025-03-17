import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptCount, setAttemptCount] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        setAttemptCount(attemptCount - 1);
        setInProgress(true);
    }

    function stop(): void {
        setInProgress(false);
    }

    function addAttempt(): void {
        setAttemptCount(attemptCount + 1);
    }

    return (
        <span>
            Remaining Attempts: {attemptCount}{" "}
            <Button onClick={start} disabled={attemptCount <= 0 || inProgress}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </span>
    );
}
