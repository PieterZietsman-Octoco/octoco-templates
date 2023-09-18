import { useState } from 'react';
import { Box, Typography, Hidden, Container, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';

import { styled } from '@mui/material/styles';

const GridWrapper = styled(Grid)(
    ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`,
);

const MainContent = styled(Box)(
    ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
);

const TypographyPrimary = styled(Typography)(
    ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`,
);

const TypographySecondary = styled(Typography)(
    ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`,
);

function Status500({ error, resetErrorBoundary }: any) {
    const [pending, setPending] = useState(false);
    function handleClick() {
        setPending(true);
        resetErrorBoundary();
    }

    return (
        <>
            <Helmet>
                <title>Status - 500</title>
            </Helmet>
            <MainContent>
                <Container maxWidth='md'>
                    <Grid
                        xs={12}
                        md={6}
                        alignItems='center'
                        display='flex'
                        justifyContent='center'
                        item
                    >
                        <Container maxWidth='sm'>
                            <Box textAlign='center'>
                                <img alt='500' height={260} src='/static/images/status/500.svg' />
                                <Typography variant='h2' sx={{ my: 2 }}>
                                    There was an error, please try again later
                                </Typography>
                                <Typography
                                    variant='h4'
                                    color='text.secondary'
                                    fontWeight='normal'
                                    sx={{ mb: 4 }}
                                >
                                    The server encountered an internal error and was not able to
                                    complete your request
                                </Typography>
                                <LoadingButton
                                    onClick={handleClick}
                                    loading={pending}
                                    variant='outlined'
                                    color='primary'
                                    startIcon={<RefreshTwoToneIcon />}
                                >
                                    Refresh view
                                </LoadingButton>
                                <Button href='/home' variant='contained' sx={{ ml: 1 }}>
                                    Go back
                                </Button>
                            </Box>
                        </Container>
                    </Grid>
                </Container>
            </MainContent>
        </>
    );
}

export default Status500;