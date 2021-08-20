import { Button, Container, Grid, Typography } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FooterBox = styled('div')(
    ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      borderTop: '1px solid #d1d7dc',
      padding: '15px 0',
      bottom: 0,
      position: 'fixed'
    })
);

const useStyles = makeStyles((theme) => ({
    link: {
        color: '#7c4bc0'
    }, 
    button: {
        backgroundColor: '#f16101',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2da397'
        }
    }
}));
  

const FooterNavbar = (props) => {
    const { step } = props;
    const classes = useStyles();
    return (
        <FooterBox component="footer">
            <Container maxWidth="lg">
                <Grid container xs justifyContent='center' alignItems='center'>
                    <Grid item xs={6} container justifyContent='center'>
                        {step !== 1 ? <Link className={classes.link} to={`/instructor/course/create/step-${step - 1}`}>Previous</Link> : null}
                    </Grid>
                    <Grid item xs={6} container justifyContent='center'>
                        <Button className={classes.button} href={`/instructor/course/create/step-${step + 1}`}>Continue</Button>
                    </Grid>
                </Grid>
            </Container>
        </FooterBox>
    )
};

FooterNavbar.defaultProps = {
    step: 1
}

FooterNavbar.propTypes = {
    step: PropTypes.number
}

export default FooterNavbar;
