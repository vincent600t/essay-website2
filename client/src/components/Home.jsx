import { Box, Button, Container, Grid, Typography, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Professional Essay Writing Services
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Get high-quality papers delivered on time by expert writers.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1.2rem" }}
          href="/order"
        >
          Order Now
        </Button>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "Essay Writing", desc: "Expert-written essays tailored to your needs." },
            { title: "Research Papers", desc: "Detailed and well-researched papers for any subject." },
            { title: "Proofreading", desc: "Make your essays error-free and polished." }
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                quote: "Amazing service! Got my essay before the deadline.",
                author: "Hafifa H.",
              },
              {
                quote: "Affordable and professional. Highly recommended!",
                author: "Vincent N.",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 4, height: "100%" }}>
                  <Typography variant="body1" fontStyle="italic" mb={2}>
                    “{testimonial.quote}”
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" textAlign="right">
                    — {testimonial.author}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 4, textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} EssayPro. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
