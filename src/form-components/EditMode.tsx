import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            {isEditing ?
                <div>
                    <Form.Group controlId="formEnterName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "" : " not "} a student
                </div>
            }
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit:"
                checked={isEditing}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsEditing(event.target.checked);
                }}
            />
        </div>
    );
}
