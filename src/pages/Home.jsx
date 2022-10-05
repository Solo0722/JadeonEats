import { message } from "antd";
import React from "react";

const Home = () => {
  return (
    <>
      <div class="preloader">
        <div class="loader">
          <div class="ytp-spinner">
            <div class="ytp-spinner-container">
              <div class="ytp-spinner-rotator">
                <div class="ytp-spinner-left">
                  <div class="ytp-spinner-circle"></div>
                </div>
                <div class="ytp-spinner-right">
                  <div class="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header class="header">
        <div class="navbar-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="index.html">
                    <img src="/assets/img/logo/logo-2.svg" alt="Logo" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>

                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="page-scroll" href="#home">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#services">
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#how">
                          How It Works
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#testimonial">
                          Testimonials
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="/auth">
                          Sign in
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="home" class="hero-section">
        <div class="hero-shape">
          <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <h1 class="wow fadeInUp" data-wow-delay=".2s">
                  <span>Hungry?</span>{" "}
                  <span style={{ fontWeight: "bold", color: "#e8505b" }}>
                    Order Food,{" "}
                  </span>
                  <span>Get Happiness To Your Doorstep</span>
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Enjoy the taste of food made by the best chefs in the world at
                  home! We cook with love and deliver while it’s still piping
                  hot.
                </p>
                <a
                  href="/menu"
                  class="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="/assets/img/landingpage/delivery.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="service-section pt-150">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="section-title text-center mb-70">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Delivery Services
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  Every delicacy you want
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img
                    src="assets/img/landingpage/caramelized-plantain.png"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3>Local</h3>
                  <p>
                    We offer local Ghanaian delicacies from breakfast to supper
                    like Fufu,boiled yam and eggs, Hausa koko and many more.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".4s">
                <div class="icon">
                  <img src="assets/img/landingpage/pizza.png" alt="" />
                </div>
                <div class="content">
                  <h3>Continental</h3>
                  <p>
                    We also offer continental delicacies like chicken pizza,
                    pepperoni pizza, fried rice and chicken, and so many more.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".6s">
                <div class="icon">
                  <img src="assets/img/landingpage/food.png" alt="" />
                </div>
                <div class="content">
                  <h3>Desserts</h3>
                  <p>
                    Want to try some freshly made yoghurt with meat pie? We've
                    got you. We also offer other desserts such as ice-cream,
                    doughouts and even our local sobolo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about-section pt-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-img wow fadeInUp" data-wow-delay=".5s">
                <img src="/assets/img/landingpage/ontime.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    About Us
                  </span>
                  <h1 class="wow fadeInUp" data-wow-delay=".4s">
                    On-time Delivery and Customer Satisfaction
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay=".6s">
                    We have well-disciplined deliverers who bring your food to
                    your doorstep on time. We are never late. We also provide
                    the best customer services and as a result, our customers
                    are always satisfied.
                  </p>
                </div>
                <div
                  class="rating-meta d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".65s"
                >
                  <h5>Rating 4.8</h5>
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                </div>

                <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
                  <div class="single-counter">
                    <h3
                      id="secondo1"
                      class="countup"
                      cup-end="1"
                      cup-append="M+"
                    >
                      1{" "}
                    </h3>
                    <h5>Unhappy</h5>
                  </div>
                  <div class="single-counter position-relative">
                    <h3
                      id="secondo2"
                      class="countup"
                      cup-end="234"
                      cup-append="K+"
                    >
                      234{" "}
                    </h3>
                    <h5>Happy Users</h5>
                  </div>
                  <div class="single-counter">
                    <h3
                      id="secondo3"
                      class="countup"
                      cup-end="34"
                      cup-append="K+"
                    >
                      34{" "}
                    </h3>
                    <h5>Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how" class="delivery-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="delivery-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    Fast Delivery
                  </span>
                  <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">
                    Order Now, Recieve Within 30mins
                  </h1>
                  <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">
                    When you order your now, you receive your it in less than 30
                    minutes. Try JadeonEats now!
                  </p>
                  <a
                    href="/menu"
                    class="main-btn btn-hover wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Go to food menu
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7 order-first order-lg-last">
              <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
                <img src="/assets/img/landingpage/fastdelivery.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="received" class="about-section received-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div
                class="about-img received-img wow fadeInUp"
                data-wow-delay=".5s"
              >
                <img src="/assets/img/landingpage/contactless.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content received-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    How to order your food
                  </span>
                  <ul style={{ listStyle: "outside" }}>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        Click on the "Get Started" button on this page.
                      </p>
                    </li>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        Select the food you want to purchase by clicking on the
                        shopping cart icon on each delicacy.
                      </p>
                    </li>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        After selection your food of choice, click on the cart
                        icon on the navbar to go to the cart. This is where all
                        the foods you've selected and their prices will be.
                      </p>
                    </li>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        Click on the checkout button at the bottom of the page.
                        Enter your delivery details and click next.
                      </p>
                    </li>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        Enter your card number at the space provided for card
                        number and click next.
                      </p>
                    </li>
                    <li>
                      <p class="wow fadeInUp" data-wow-delay=".6s">
                        Hooray! You just completed your order. Now sit back and
                        witness how quickly your food will be delivered to you.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title mb-60 text-center">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Testimonials
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  What Our Users Says
                </h1>
              </div>
            </div>
          </div>

          <div class="row testimonial-wrapper">
            <div class="col-lg-4 col-md-6 -mt-30">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>
                    JadeonEats meal delivery service got me here. Their meals
                    are great for people with busy schedule like me, and they’re
                    healthy and delicious. PS. I have sweet tooth and their
                    desserts are to die for!
                  </p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-1.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>Jesse</h5>
                    <p>Engineering student</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 -mt-60">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>
                    If you want to eat healthier, jadeoneats has a plan for you.
                    Their amazing chefs prepared a wonderful cold-pressed juice
                    and meal for me. The chefs are incredible, and it takes all
                    the effort out of my busy lifestyle. It’s as good as when
                    you sit down at the restaurant eating really great food.
                  </p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-2.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>Gershon Owusu</h5>
                    <p>KNUST Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>
                    Tried the ready to eat meat pie on a whim today while
                    studying for my exams. First bite in I knew I had to go back
                    and get a few more for the weekend. Outstanding!!!
                  </p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-3.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>Ama Konadu</h5>
                    <p>Final year student</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 -mt-30">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>
                    I got my large order of pepperoni pizza today via their
                    website and was very impressed with the packaging and
                    freshness as well as the quality of my meal. The pizza was
                    soooo good!! Looking forward to being a REGULAR ordering
                    customer from now on!!
                  </p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-4.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>Dr. Obour</h5>
                    <p>KNUST Lecturer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 -mt-100">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>Fantastic snacks! The prepared foods are delicious!</p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-5.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>Emmanuella</h5>
                    <p>Catering and Hospitality Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
                <div class="content">
                  <p>
                    Thank you for your food. It’s so fresh and delicious and it
                    takes the work and guess-work out of my busy life when it
                    comes to eating. JadeonEats is AWESOME! You have a customer
                    for life!
                  </p>
                </div>
                <div class="info">
                  <div class="image">
                    <img
                      src="assets/img/testimonial/testimonial-6.png"
                      alt=""
                    />
                  </div>
                  <div class="text">
                    <h5>David Ansah</h5>
                    <p>Businessman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="partner" class="partner-section pt-60 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="single-partner wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/partners/partner-1.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-partner wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/partners/partner-2.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-partner wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/partners/partner-3.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="single-partner wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/partners/partner-4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer id="footer" class="footer pt-100 pb-70">
        <div class="footer-shape">
          <img
            src="assets/img/footer/footer-left.svg"
            alt=""
            class="shape shape-1"
          />
          <img
            src="assets/img/footer/footer-right.svg"
            alt=""
            class="shape shape-2"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div class="logo">
                  <a href="index.html">
                    <img src="/assets/img/logo/logo-2.svg" alt="Logo" />
                  </a>
                </div>
                <div class="download-btns">
                  <a href="#">
                    <span class="icon">
                      <i class="lni lni-apple"></i>
                    </span>
                    <span class="text">
                      Download on the <b>App Store</b>{" "}
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon">
                      <i class="lni lni-play-store"></i>
                    </span>
                    <span class="text">
                      GET IT ON <b>Play Store</b>{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
                <h3>About Us</h3>
                <ul class="links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
                <h3>About</h3>
                <ul class="links">
                  <li>
                    <a href="">Partners</a>
                  </li>
                  <li>
                    <a href="">Terms of Service</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
                <h3>Support</h3>
                <ul class="links">
                  <li>
                    <a href="">Open Ticket</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Return Policy</a>
                  </li>
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i>
      </a>
      <script src="assets/js/bootstrap.5.0.0.alpha-2-min.js"></script>
      <script src="assets/js/count-up.min.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
};

export default Home;
