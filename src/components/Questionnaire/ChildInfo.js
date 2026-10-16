import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Grid,
    Avatar,
    Paper,
    IconButton,
    Button,
} from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ChildInfo({ formData, setFormData, colors, textFieldStyles }) {
    const handleAddChild = () => {
        const children_2 = formData.children_2 || [];
        setFormData({
            ...formData,
            children_2: [...children_2, { name: '', age: '' }],
        });
    };

    const handleRemoveChild = (index) => {
        const children_2 = [...formData.children_2];
        children_2.splice(index, 1);
        setFormData({ ...formData, children_2 });
    };

    const handleChildChange = (index, field, value) => {
        const children_2 = [...formData.children_2];
        children_2[index][field] = value;
        setFormData({ ...formData, children_2 });
    };

    const children_2 = formData.children_2 || [];

    return (
        <Paper elevation={0} sx={{
            backgroundColor: colors.paper,
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            mb: 4,
            border: '1px solid',
            borderColor: colors.border,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: `linear-gradient(180deg, ${colors.accent.primary}, ${colors.accent.secondary})`
            }} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{
                    bgcolor: colors.accent.primary,
                    width: 40,
                    height: 40,
                    color: '#FFFFFF',
                    mr: 2,
                    fontSize: '1.2rem'
                }}>
                    2
                </Avatar>
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                    Возраст ребёнка/детей
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: colors.text.light, mb: 3 }}>
                <ChildCareIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                Добавьте имя и возраст каждого ребёнка
            </Typography>

            {children_2.length === 0 ? (
                <Typography variant="body2" sx={{ color: colors.text.light, fontStyle: 'italic', mb: 2 }}>
                    Нажмите «Добавить ребёнка», чтобы начать
                </Typography>
            ) : (
                children_2.map((child, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }} alignItems="center">
                        <Grid item xs={12} sm={5}>
                            <TextField
                                fullWidth
                                label="Имя ребёнка"
                                value={child.name}
                                onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                                placeholder="Имя"
                                variant="outlined"
                                sx={textFieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                fullWidth
                                label="Возраст"
                                value={child.age}
                                onChange={(e) => handleChildChange(index, 'age', e.target.value)}
                                placeholder="Например: 5 лет"
                                variant="outlined"
                                sx={textFieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <IconButton
                                onClick={() => handleRemoveChild(index)}
                                sx={{ color: colors.accent.primary }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))
            )}

            <Button
                startIcon={<AddIcon />}
                onClick={handleAddChild}
                sx={{
                    mt: 1,
                    color: colors.accent.primary,
                    borderColor: colors.accent.primary,
                    '&:hover': {
                        borderColor: colors.accent.primary,
                        backgroundColor: colors.accent.light,
                    },
                }}
                variant="outlined"
            >
                Добавить ребёнка
            </Button>
        </Paper>
    );
}