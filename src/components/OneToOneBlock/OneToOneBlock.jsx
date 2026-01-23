import { Box, Grid, Typography, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import TelegramCTA from "../TelegramCTA/TelegramCTA";
import * as React from "react";

export default function ExpertGuidanceBlock() {
    return (
      <Container component="section">
          <Box sx={{ my: { xs: 2, sm: 3 } }}>
              {/* Заголовок */}
              <Typography
                  component="h2"
                  sx={{
                      fontSize: { xs: 24, sm: 28, md: 32 },
                      fontWeight: 600,
                      lineHeight: 1.3,
                      textAlign: 'center',
                      mb: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                  }}
              >
                  Через несколько лет разница станет очевидной
                  <br />
                  И не в пользу интуиции
              </Typography>

              <Grid container spacing={{ xs: 4, md: 6 }}>
                  {/* Колонка 1 */}
                  <Grid item xs={12} md={6}>
                      <Typography
                          variant="overline"
                          sx={{ opacity: 0.6, mb: 2, display: "block" }}
                      >
                          Как есть
                      </Typography>

                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {[
                              "Вы реагируете, вместо того чтобы принимать решения.",
                              "Сомневаетесь и уступаете в ключевые моменты, боясь конфликта.",
                              "«Тушите пожары», которые разгораются снова.",
                              "Границы размываются постепенно и становятся проблемой спустя годы.",
                              "Вы чувствуете, что теряете авторитет и контакт одновременно.",
                          ].map((item, index) => (
                              <Typography
                                  component="li"
                                  key={index}
                                  sx={{
                                      mb: 1.5,
                                      lineHeight: 1.6,
                                      listStyleType: "disc",
                                  }}
                              >
                                  {item}
                              </Typography>
                          ))}
                      </Box>
                  </Grid>

                  {/* Колонка 2 */}
                  <Grid item xs={12} md={6}>
                      <Typography
                          variant="overline"
                          sx={{ opacity: 0.6, mb: 2, display: "block" }}
                      >
                          Причина
                      </Typography>

                      <Typography sx={{ lineHeight: 1.7 }}>
                          Родители ошибаются не из-за недостатка любви.
                          <br />
                          <br />
                          Они переоценивают интуицию в сложных возрастных и поведенческих точках.
                          Там, где требуется система и опыт, они действуют на ощупь.
                          <br />
                          <br />
                          Цена таких решений становится понятна,
                          когда ребёнку уже 12, 15, 20 лет.
                      </Typography>
                  </Grid>
              </Grid>
          </Box>
      </Container>
    );
}
