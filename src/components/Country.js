import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Country = ({country}) => {
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Link to={`/countries/${country.code}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}