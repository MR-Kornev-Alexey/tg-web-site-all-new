import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionHeader({
                                          title,
                                          subtitle = "",
                                          align = "center",
                                          maxWidth = "none"
                                      }) {
    return (
        <Box sx={{
            textAlign: align,
            mb: 6,
            maxWidth: maxWidth,
            mx: align === "center" ? 'auto' : 'inherit'
        }}>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 300,
                    color: '#3E2F28', // Bitter Chocolate
                    mb: subtitle ? 2 : 0,
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px'
                }}
            >
                {title}
            </Typography>

            {subtitle && (
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        fontWeight: 400,
                        color: '#A67C52', // Saddle Tan
                        fontStyle: 'italic',
                        mb: 4
                    }}
                >
                    {subtitle}
                </Typography>
            )}

            <Box sx={{
                width: '80px',
                height: '2px',
                backgroundColor: '#D95D2B',
                mx: align === "center" ? 'auto' : '0',
                mb: 4
            }} />
        </Box>
    );
}