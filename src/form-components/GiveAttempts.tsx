import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [addAttempts, setAddAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <Form.Group controlId="formAddAttempts">
                <Form.Label>Add Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={addAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAddAttempts(Number(event.target.value));
                    }}
                />
            </Form.Group>
            <div>
                <Button
                    disabled={attempts === 0}
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        if (isNaN(addAttempts)) {
                            return;
                        }
                        setAttempts(attempts + addAttempts);
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
