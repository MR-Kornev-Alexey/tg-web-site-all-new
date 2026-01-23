import { Link, Box } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function TelegramCTA({
                                        text = 'Запросить формат работы',
                                        href = 'https://t.me/MrkDigital?text=запрос',
                                        sx = {},
                                    }) {
    return (
        <Link
            href={href}
            target="_blank"
            underline="none"
            sx={{
                mt: 3,
                px: { xs: 2, sm: 3 },
                height: { xs: 44, sm: 48 },
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: '#f5f5f5',
                color: '#444',
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'all .2s ease',
                whiteSpace: 'nowrap',

                '&:hover': {
                    backgroundColor: '#eaeaea',
                },

                ...sx,
            }}
        >
            <TelegramIcon sx={{ fontSize: 20 }} />
            <Box>{text}</Box>
        </Link>
    );
}
