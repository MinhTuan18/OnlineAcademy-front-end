import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';

const companySizeOptions = ['1-10', '11-30', '31-50', '50+'];

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      email: 'joo291998@gmail.com',
      fullName: 'Phan Thanh Bảo Châu',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      fullName: Yup.string().max(255).required('Full Name is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Box pb={3}
        pt={8}
        style={{
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            color="textPrimary"
            style={{ marginBottom: 3 }}
            variant="h4"
          >
            Profile
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
            >
              <Card
                variant="outlined"
                style={{ padding: 3 }}
              >
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <Box pb={3}
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar
                        src="/static/user-chen_simmons.png"
                        alt='avatar'
                        style={{
                          height: 64,
                          marginRight: 2,
                          width: 64
                        }}
                      />
                      <div>
                        <Button
                          color="primary"
                          size="small"
                          style={{ marginBottom: 1 }}
                          type="button"
                          variant="outlined"
                        >
                          Upload new avatar
                        </Button>
                        <div>
                          <Typography
                            color="textSecondary"
                            variant="caption"
                          >
                            Recommended dimensions: 200x200, maximum file size: 5MB
                          </Typography>
                        </div>
                      </div>
                    </Box>
                    <Grid
                      container
                      spacing={2}
                      style={{ maxWidth: 420 }}
                    >
                      <Grid
                        item
                        xs={12}
                      >
                        <TextField
                          error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                          fullWidth
                          helperText={formik.touched.fullName && formik.errors.fullName}
                          label="Full Name"
                          name="fullName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.fullName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                      >
                        <TextField
                          error={Boolean(formik.touched.email && formik.errors.email)}
                          fullWidth
                          helperText={formik.touched.email && formik.errors.email}
                          label="Email address"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="email"
                          value={formik.values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                      >
                        <TextField
                          error={Boolean(formik.touched.jobTitle && formik.errors.jobTitle)}
                          fullWidth
                          helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                          label="Job title"
                          name="jobTitle"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.jobTitle}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                      >
                        <TextField
                          error={Boolean(formik.touched.companyName && formik.errors.companyName)}
                          fullWidth
                          helperText={formik.touched.companyName && formik.errors.companyName}
                          label="Company name"
                          name="companyName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.companyName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                      >
                        <TextField
                          error={Boolean(formik.touched.companySize && formik.errors.companySize)}
                          fullWidth
                          helperText={formik.touched.companySize && formik.errors.companySize}
                          label="Company size"
                          name="companySize"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          select
                          value={formik.values.companySize}
                          variant="outlined"
                        >
                          {companySizeOptions.map((companySizeOption) => (
                            <MenuItem
                              key={companySizeOption}
                              value={companySizeOption}
                            >
                              {companySizeOption}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      {formik.errors.submit && (
                        <Grid
                          item
                          xs={12}
                        >
                          <FormHelperText error>
                            {formik.errors.submit}
                          </FormHelperText>
                        </Grid>
                      )}
                      <Grid
                        item
                        xs={12}
                      >
                        <Button
                          color="primary"
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Save settings
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
