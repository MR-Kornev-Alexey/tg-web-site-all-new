import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function ThirdCard({ title, icon }) {
    return (
        <Card sx={{ width: '96%', height: 90, marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginRight: '10px' }}>{icon}</div>
                    <div style={{ fontSize: 14 }}>{title}</div>
                </div>
            </CardContent>
        </Card>
    );
}
