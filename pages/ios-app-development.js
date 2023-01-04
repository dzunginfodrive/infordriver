import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function IosAppDevelopment() {
  return (
    <div>
      <Header />
      <div className='sliderBox blockNFT'>
        <img
          style={{ width: '100%', opacity: '0.5' }}
          src='images/Blockchain_background.png'
        />
        <Box sx={{ flexGrow: 1 }} className='sliderContent'>
          <Grid container spacing={0}>
            <p>
              Our team of expert iOS app <br /> developers uses cutting-
              <br />
              edge technologies to build
              <br /> apps that are quality tested <br />
              for perfection.
            </p>
            <Button href="/contact-us" className='readmore' variant='text'>
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className='socical-network'>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <TwitterIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Box>
      </div>
      <section className={`sectionBox IosAppBox`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className='fd1'>
            <Grid item xs={8}>
              <Card className='fp1'>
                <Typography gutterBottom variant='h3' component='div'>
                  iOS APP DEVELOPMENT
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h2'
                    component='div'
                    >
                    We are well-known for being a leading provider of full-
                    <br />
                    stack iPhone app development services. We provide a <br />{' '}
                    wide range of custom iOS apps that empower
                    <br /> businesses and help them in turning ideas into
                    reality.
                    <br /> Our proficiency, vast experience, professionalism,
                    <br /> technical know-how, and unmatched services make us a{' '}
                    <br /> reliable place for creating dependable and scalable
                    iOS <br />
                    applications.
                    <br />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Being a reliable iOS app development company with expertise
                    in <br /> multiple industries, we strive to provide our
                    customers with the <br /> solutions they need to lead their
                    industries. Our iOS app development
                    <br /> services help in improving your company's
                    productivity while improving <br /> customer satisfaction.
                    Our iOS app developers have a comprehensive <br />{' '}
                    understanding of the latest technologies and adequate
                    experience <br /> using them to create iOS applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <img
                  alt='Exact analysis'
                  className='Ios_img'
                  src='images/ios-app-development.png'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={`sectionBox IosAppBox2`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className='fd1'>
            <Grid item xs={12}>
              <Card className='ios-app2'>
                <Typography gutterBottom variant='h2' component='div'>
                  Key benefits of our iOS app
                  <br></br> development services
                </Typography>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    We are a full-stack iOS app development company that has
                    released <br />
                    hundreds of native iOS apps with high App Store ratings and{' '}
                    <br /> success rates. We use advanced methodologies and
                    technologies to <br /> build apps with the best-in-class
                    features, functionality, and <br /> interface.
                  </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox whyUsBox IosAppBox3`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 400 }} className='IosCard'>
                <Avatar
                  alt='Remy Sharp'
                  src='images/Best-consumer-experience.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Best consumer <br /> experience
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    We have an excellent team of <br /> expert designers and
                    developers <br /> with adequate experience to <br /> provide
                    you with real value for
                    <br /> money. We offer maintenance
                    <br /> services for the developed apps to
                    <br /> guarantee their consistent top
                    <br /> performance while enhancing the
                    <br /> experience of users.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 400 }} className='IosCard bg'>
                <Avatar
                  alt='Remy Sharp'
                  src='images/Best-consumer-experience.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Appealing app interface
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    In iOS applications, it is possible <br /> to design
                    interface elements and <br /> layouts to change shape and
                    size <br /> on different devices, during iPad <br />{' '}
                    multitasking, in split view, when <br /> the screen rotates,
                    and more.
                    <br /> In this way, users are provided with a <br /> better
                    experience while building <br /> better relationships with{' '}
                    <br /> customers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 400 }} className='IosCard'>
                <Avatar
                  alt='Remy Sharp'
                  src='images/Best-consumer-experience.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    High security
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Every business needs to choose a <br />
                    platform that offers users not just
                    <br /> appealing features but also the
                    <br /> highest level of security. Your
                    <br /> growth is in the safest possible
                    <br /> hands because every member of
                    <br /> our team abides by the rules and <br />
                    never gives out your information to
                    <br /> any third party.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 400 }} className='IosCard bg'>
                <Avatar
                  alt='Remy Sharp'
                  src='images/Best-consumer-experience.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Improved branding
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Being a leading iOS app <br /> development company, we are{' '}
                    <br />
                    very much familiar with the <br />
                    importance of application
                    <br /> branding. As, mobile app branding
                    <br /> is how users will perceive the app: <br />
                    its communication, its visual
                    <br /> image, and its reputation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 400 }} className='IosCard'>
                <Avatar
                  alt='Remy Sharp'
                  src='images/Best-consumer-experience.png'
                  sx={{ width: 65, height: 65, marginLeft: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    className='pt15 pb15'
                    component='div'
                  >
                    Loyal user base
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Today people like to purchase just <br /> from the people
                    they trust. Loyal
                    <br /> customers are significant key <br /> resources that
                    give the company a <br /> manageable upper hand over <br />{' '}
                    competitors. Loyalty improves a <br /> firm's overall
                    financial <br /> performance due to increased <br />
                    purchases.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}></Grid>
          </Grid>
        </Box>
      </section>

      <section className={`sectionBox IosOurBox`}>
        <div className='IosOurBoxPd'>
          <Typography
            gutterBottom
            variant='h2'
            component='div'
            className='IodHdn'
          >
            Our iOS application <br />
            development expertise
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 550 }} className='IosCard bgf'>
                  <Avatar
                    alt='Remy Sharp'
                    src='images/OurApplication_bg.png'
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      className='pt15 pb15 hdnclr'
                      component='div'
                    >
                      iOS app Customization &<br /> development
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='hdnclr'
                    >
                      Infodrive has rich expertise in the overall development
                      <br /> of iOS applications, so, you can be guaranteed the
                      best <br />
                      iPhone development service. We coordinate with our <br />
                      clients right from the beginning and work with them
                      <br /> through the design stage until the actual
                      deployment of <br />
                      the application.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 550 }} className='IosCard bgf'>
                  <Avatar
                    alt='Remy Sharp'
                    src='images/OurApplication_bg.png'
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      className='pt15 pb15 hdnclr'
                      component='div'
                    >
                      Cross-platform <br />
                      development
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='hdnclr'
                    >
                      As a top-rated offshore iOS application development
                      <br /> company in India, Infodrive has gained expertise in
                      <br /> creating multi-platform app development solutions
                      for
                      <br /> both Android and iOS devices. Our team of experts
                      <br /> builds robust, high-quality, scalable, and
                      interactive iOS <br />
                      apps that run flawlessly over different iOS devices. We
                      <br /> make sure to provide fast and tailored development
                      <br /> services with top-tier results.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ maxWidth: 550 }} className='IosCard bgf'>
                  <Avatar
                    alt='Remy Sharp'
                    src='images/OurApplication_bg.png'
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      className='pt15 pb15 hdnclr'
                      component='div'
                    >
                      Mobile app
                      <br />
                      integration
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='hdnclr'
                    >
                      Infodrive helps businesses to reach their potential in{' '}
                      <br /> today’s mobile world by connecting teams and <br />{' '}
                      customers wherever they may be, at home, in the <br />{' '}
                      office, or on the go. Our mobile app development team{' '}
                      <br /> combines deep technical expertise, strong design{' '}
                      <br /> judgments, and years of practical experience in{' '}
                      <br /> integrating your mobile solution with your other
                      digital <br /> assets, including websites, web
                      applications, custom <br /> software, etc.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card sx={{ maxWidth: 550 }} className='IosCard bgf'>
                  <Avatar
                    alt='Remy Sharp'
                    src='images/OurApplication_bg.png'
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      className='pt15 pb15 hdnclr'
                      component='div'
                    >
                      Maintenance and
                      <br />
                      optimisation
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='hdnclr'
                    >
                      Infodrive is focused on offering excellent iOS <br />{' '}
                      application development and maintenance services.
                      <br /> Regardless of whether it is the full-scale
                      integration of
                      <br /> your iOS app to an upgraded platform, or a minor{' '}
                      <br /> change is required, our proficient team of
                      dedicated iOS <br />
                      app developers guarantees you ideal coordination with
                      <br /> the iOS app community.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card sx={{ maxWidth: 550 }} className='IosCard bgf'>
                  <Avatar
                    alt='Remy Sharp'
                    src='images/OurApplication_bg.png'
                    sx={{ width: 65, height: 65, marginLeft: 2 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      className='pt15 pb15 hdnclr'
                      component='div'
                    >
                      Testing and QA <br />
                      services
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='hdnclr'
                    >
                      We perform robust mobile app testing on multiple
                      <br /> devices, in multiple environments that incorporate
                      <br /> manual testing, visual QA, and automated testing to
                      <br /> ensure that your application works perfectly.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}></Grid>
            </Grid>
          </Box>
        </div>
      </section>

      <section className={`sectionBox BlockchainUsBox contInfo`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6} className='blcnt'>
              <Card className='blcnt2'>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h3'
                    component='div'
                    className='blcntp'
                  >
                    Get in touch with us today for a <br /> non-obligation
                    discussion and <br />
                    start transforming your start-up
                    <br /> ideas into real-life products.
                  </Typography>

                  <Button className='readmore blcnbtn' variant='text'>
                    CONTACT US <ArrowRightAltIcon />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <img
                  alt='Contact us'
                  className='chain_img'
                  src='images/Blockchain_contactus.png'
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <Footer />
    </div>
  );
}
