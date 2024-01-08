import { Box, Typography, Grid, TextField, Button, Container, Divider, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Release as ReleaseT } from '~/types/release';
import { PlayArrowOutlined, ArrowForwardIosOutlined, DarkMode } from "@mui/icons-material";
import '../../../../../assets/stylesheets/v3/releases.scss'
import '../../../../components/distribution/review/release/style.scss'



export function Release({ release }: { release: ReleaseT }) {
  const { t } = useTranslation();
  const propertyValues = Object.values(release);
  console.log(propertyValues, "release data is here");
  console.log(release, "release ");

  let selectedKeys1 = {
    [t('v3.releases.release_date')]: release?.saleDate,
    [t('v3.releases.release_original_date')]: release?.origReleaseYear,
    [t('v3.releases.label')]: release?.label,
    [t('v3.releases.upcs_number')]: release?.upcs?.tunecore?.number,
    [t('v3.releases.release_primary_genre')]: release?.primaryGenreId,
    [t('v3.releases.release_secondary_genre')]: release?.secondaryGenreId,
    [t('v3.releases.release_language')]: release?.languagecode,
    [t('v3.releases.isrc')]: release?.name
  }


  return (
    <section>
      <Container maxWidth="lg">
        <Box sx={{ paddingTop: 0 }}>
          <Typography className='reviewsubmittitle'
            variant="h2"
          >
            {t('review_and_submit')}
          </Typography>

          <Typography variant="subtitle2" sx={{ marginBottom: '15px' }}>
            {t('this is exactly how  your release will apear in stores.Review everything carefully to get your music out there on time')}
          </Typography>


          <Divider />

          <Grid container spacing={2} sx={{ marginTop: '20px' }}>

            <Grid item xs={4}>
              <Card className='mainCard' variant="outlined">
                <img alt="translate me" src={release.artwork} style={{ flex: '1' }} />
                <Typography variant="h6" component="h2" className='editbtn'>
                  EDIT <ArrowForwardIosOutlined sx={{ fontSize: '16px' }} />
                </Typography>
              </Card>
              {/* <Box 
            className="myBox"
              sx={{
                width: '90%',
                height: 300,
                backgroundColor: '#7f7f7f',
                display: 'flex',
                flexDirection: 'column',
                borderTopRightRadius: '10px',
                borderTopleftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderBottomleftRadius: '10px',
                '&:hover': {
                  backgroundColor: '#7f7f7f',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <img alt="translate me" src={release.artwork} style={{flex: '1'}} />
              <Typography variant="h6" component="h2" sx={{
                padding: '10px',
                textAlign: 'center',
                background: '#282828',
                color: '#fff' }}>
               EDIT {'>'}
              </Typography>
              <Grid>
              </Grid>
            </Box> */}
            </Grid>
            <Grid item xs={8}>
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h2">
                    {release.name}
                  </Typography>
                </Box>
                <Typography variant="h6" component="h2" className='editbtn' sx={{marginRight: '20px'
                }}>
                  EDIT   <ArrowForwardIosOutlined sx={{ fontSize: '16px' }} />
                </Typography>
              </Grid>

              <Typography variant="h6" component="h2">
                {release.artistName}
              </Typography>


              {/* <Box sx={{display: 'flex', marginTop: '30px'}}>
              <Grid item xs={6} sx={{ display: 'flex', marginRight: '15px', padding: '10px 30px',
                background: '#282828',borderRadius: '10px', }}>
                  <Typography sx={{ flex: '1' }}>{t('release.date')}:</Typography>
                  <Typography>{release.saleDate}</Typography>
             </Grid>
                <Grid item xs={6} sx={{
                  display: 'flex', marginRight: '15px', padding: '10px 30px',
                  background: '#282828', borderRadius: '10px',
                }}>
                    <Typography sx={{flex: '1'}}>Primary Genre:</Typography>
                    <Typography>{release.primaryGenreId}</Typography>
                </Grid>
            </Box> */}

              <Box sx={{ marginTop: '30px' }}>
                <Grid container spacing={2} sx={{display: 'flex'}}>
              {Object.keys(selectedKeys1).map(function (key, index) {
                // if (index % 4 === 0) {
                  return (
                    <Grid item xs={6} className='release-grid'>
                          <Typography className='keylable'>{key}:</Typography>
                      <Typography className='keydetail'>{selectedKeys1[key]}</Typography>
                        </Grid>
                      
                  )
                    // }

                  })}
                    </Grid>

                    </Box>
            </Grid>
          </Grid>


        </Box>

        <Divider sx={{ padding: '12px' }} />
        <Grid item xs={6} sx={{
          display: 'flex', padding: '10px 0px',

        }}>
          <Typography className='trackTitle'>Track</Typography>

          <Typography sx={{
            flex: '1', color: '#fff', padding: '10px 0px', fontSize: '16px', fontWeight: 'bold', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'end'

          }}>
            EDIT   <ArrowForwardIosOutlined sx={{ fontSize: '16px' }} /></Typography>

        </Grid>
        <Card variant="outlined" sx={{
          width: '100%',
          height: 150,
          // margin:'5px',
          padding: '10px',
          // backgroundColor: '#7f7f7f',
          display: 'flex',
          flexDirection: 'column',
          borderTopRightRadius: '10px',
          borderTopleftRadius: '10px',
          borderBottomRightRadius: '10px',
          borderBottomleftRadius: '10px',
          '&:hover': {
            backgroundColor: '#7f7f7f',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
          <Grid item xs={6} sx={{
            display: 'flex', marginRight: '15px', padding: '10px 0px',

          }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Typography sx={{ color: '#fff', padding: '10px', fontSize: '20px', fontWeight: 'bold' }}>1 </Typography>
              <Box sx={{ flex: '1' }}>
                <Typography sx={{ flex: '1', color: '#fff', padding: '10px', fontSize: '20px', fontWeight: 'bold' }}>Second song in the album</Typography>
                <Typography sx={{ flexDirection: 'column', paddingLeft: '10px' }}>By song writers names</Typography>
                <Typography sx={{ paddingLeft: '10px' }}>ISRC Number</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#fff', padding: '10px', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}> <PlayArrowOutlined /></Typography>
                <Typography sx={{
                  display: 'flex', padding: '10px 30px',
                  background: '#282828', borderRadius: '10px',
                }}>Dolby Atmos - <strong>$16.00</strong></Typography>


              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{
            flexDirection: 'column', marginRight: '15px', padding: '10px 30px',
            borderRadius: '10px',
          }}>

          </Grid>
        </Card>

        <Divider sx={{ padding: '12px', marginTop: '15px' }} />
        <Grid item xs={6} sx={{
          display: 'flex', padding: '10px 0px',

        }}>
          <Typography sx={{ flex: '1', color: '#fff', padding: '10px 0px', fontSize: '20px', fontWeight: 'bold' }}>Store Selection</Typography>
          <Typography sx={{
            flex: '1', color: '#fff', padding: '10px 0px', fontSize: '16px', fontWeight: 'bold', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'end'
          }}>
            EDIT   <ArrowForwardIosOutlined sx={{ fontSize: '16px' }} /></Typography>

        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <Typography sx={{ color: '#fff', fontSize: '16px', marginBottom: '10px', fontWeight: '500' }}>Digital Stores</Typography>
          
          
          <Grid item xs={6} sx={{ display: 'flex', width: '70%' }}>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', }}>
          <Typography sx={{ color: '#fff', fontSize: '16px', marginBottom: '10px', fontWeight: '500' }}>Social Platform</Typography>
          <Grid item xs={6} sx={{ display: 'flex', width: '70%' }}>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
            <Box component="span" sx={{ p: 2, border: '1px solid grey', width: '20px', marginRight: '10px', display: 'inlines' }}></Box>
          </Grid>
        </Grid>

        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ color: '#fff', fontSize: '16px', marginBottom: '10px', fontWeight: '500' }}>Store Automator</Typography>

          <Box sx={{ padding: '20px', background: '#282828', borderRadius: '10px', display: 'flex' }}>
            <Typography sx={{ color: '#fff', fontSize: '16px', flex: '1' }}>Your Release will be automatically distributed to every new store TuneCore adds in the future.</Typography>
            <strong sx={{ color: '#fff', fontSize: '16px' }}>$xx.xx</strong>
          </Box>
        </Grid>

        <Divider sx={{ padding: '12px', marginTop: '15px' }} />
      </Container>
    </section>
  );
}
