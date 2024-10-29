import React, { useState, useRef } from 'react';
import { NavLink, useNavigate, BrowserRouter } from 'react-router-dom'; // For navigation
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS
import "./Home.css"

const Home = () => {
  const navigate = useNavigate(); // React Router navigation
  const form = useRef(null); // Reference to the form

  // Form state
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: ''
  });

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Navigate to register page
  const goRegister = () => {
    navigate('/register');
  };

  // Send mail function using emailjs.sendForm
  const sendMail = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      emailjs.sendForm(
        'service_nuqy6ls',
        'template_ytb0uj7',
        form.current,
        'yL8-IVJCsvClJeMOS'
      ).then(
        () => {
          toast.success('Message Sent Successfully');
          setFormData({ subject: '', email: '', message: '' }); // Reset form data
        },
        (error) => {
          toast.error('Error Sending Message');
          console.log('Error Sending Message:', error.text);
        }
      );
    } catch (error) {
      toast.error('Error Sending Message');
      console.log('Error Sending Message:', error);
    }
  };

  // Scroll to Contact Form
  const scrollToContact = () => {
    form.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="overflow-hidden app">
      <header>
        <div className="w-11/12 mx-auto lg:w-10/12">
          <div className="flex items-center menu-area">
            <div className="w-4/12">
              <div className="left_menu_bar">
                <button type="button">
                  <img src="assets/home/icons/toggle.svg" alt="toggle" />
                </button>
              </div>
            </div>
            <div className="flex justify-center w-4/12">
              <div className="logo_bar">
              </div>
            </div>
            <div className="w-4/12">
              <div className="social_icons">
                <ul className="flex items-center justify-end nav">
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/x.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/instagram.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/facebook.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="ml-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/youtube.svg" alt="pic" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="section1 banner_area">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="flex flex-col items-center justify-center h-full banner_content">
            <div className="title">
              <div className="flex w-full justify-center mb-4">
                <img src="/assets/home/2.png" alt="" className=" w-[280px]" />
              </div>
              <h4 className="subtitle w-80% mx-auto">
                Especialistas en envíos de dinero para pago proveedores, en  
                américa latina y Asia
              </h4>
            </div>
            <div className="flex items-center justify-center pt-5 banner_btn">
              <button type="button" className="glossy-button" onClick={scrollToContact}>
                <span>Contacto</span>
              </button>
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 overly"></div>
      </section>

      {/* Quick Access Section */}
      <section className="relative pt-24 section2 quick_access">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="quick_content py-14">
            <div className="top_items pb-14">
              <h1>PAGA A TU PROVEEDOR EN EL EXTRANJERO</h1>
            </div>
            <div className="flex flex-col items-center justify-between buy_send lg:flex-row lg:justify-start">
              <div className="flex justify-end w-full lg:w-6/12">
                <div className="relative inline-block buy_send_left_content">
                  <img src="assets/home/buy.png" alt="buy" className="object-cover w-full h-full" />
                  <div className="h-full p-10 overflow-hidden overly_items">
                    <div className="flex h-full">
                      <div className="flex flex-col items-start justify-between w-11/12 h-full">
                        <div className="flex justify-center w-full wallet_box">
                          <button type="button" >
                            <img src="assets/home/icons/wallet.svg" alt="wallet" />
                          </button>
                        </div>
                        <div className="content">
                          <h4>ENVÍA DÓLARES <br />
MEDIANTE SWIFT Y <br />
PAGA PROVEEDORES</h4>
                        </div>
                      </div>
                      <div className="w-1/12">
                        <div className="flex flex-col items-center justify-center h-full overly_content2">
                          <div className="line_txt">01</div>
                          <div className="line_chart"></div>
                          <div className="redEffects"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-12/12 lg:w-6/12">
                <div className="relative inline-block buy_send_right_content">
                  <img src="assets/home/send.png" alt="buy" className="object-cover w-full h-full" />
                  <div className="h-full p-10 overflow-hidden overly_items">
                    <div className="flex h-full">
                      <div className="flex flex-col items-start justify-between w-11/12 h-full">
                        <div className="flex justify-center w-full wallet_box">
                          <button type="button">
                            <img src="assets/home/icons/gift.svg" alt="wallet" />
                          </button>
                        </div>
                        <div className="content">
                          <h4 className="capitalize">
                          ESPECIALISTAS EN <br/> PAGOS DESDE BOLIVIA
                          </h4>
                        </div>
                      </div>
                      <div className="w-1/12">
                        <div className="flex flex-col items-center justify-center h-full overly_content2">
                          <div className="line_txt">02</div>
                          <div className="line_chart"></div>
                          <div className="redEffects"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full details_content">
            <div className="flex flex-col justify-center mx-auto lg:flex-row w-12/12 lg:w-9/12">
              <div className="w-11/12 mx-auto lg:w-7/12">
                <div className="left_details">
                  <p>
                  Los pagos se completan en un plazo de
                  48H
                  </p>
                </div>
              </div>
              <div className="w-12/12 lg:w-5/12">
                <div className="w-full right_details">
                  <div className="flex items-center justify-center lg:items-start lg:justify-end icon_box">
                    <button type="button" className="mx-3">
                      <img src="assets/home/icons/thunder.svg" alt="thunder" />
                    </button>
                    <p>LA RAPIDEZ Y EFICIENCIA QUE NECESITAS</p>
                  </div>
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute effects1"></div>
          <div className="absolute effects2"></div>
        </div>
      </section>

      {/* Create Account Section */}
      <section className="h-full section-3 create_account_area pt-14 pb-60">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="p-6 create_account">
            <div className="top-title">
              <h2>
              Firmamos contratos de servicios que respaldan
y garantizan la operación.
Gestionamos pagos desde Chile a Asia y desde
Bolivia a cualquier parte del mundo
              </h2>
            </div>
            <div className="flex items-end w-full flex-col lg:flex-row">
              <div className="w-11/12 lg:w-6/12">
                <div className="left_price_menu">
                  <ul className="flex items-center nav">
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Velocidad
                      </NavLink>
                      <div className="mx-2 shape active"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Eficiencia
                      </NavLink>
                      <div className="mx-2 shape"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Comodidad
                      </NavLink>
                      <div className="mx-2 shape"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Fiabilidad
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-11/12 lg:w-6/12">
                <div className="right_price_box mt-14">
                  <div className="flex justify-center pb-3 database">
                    <button type="button" className="database-btn">
                      <img src="assets/home/icons/database.svg" alt="database" />
                    </button>
                  </div>
                  <div className="pb-3 sub-title text-white">
                    <h3>GRANDES MONTOS SOBRE</h3>
                  </div>
                  <div className="pb-3 price">
                    <h1>$10,000</h1>
                  </div>
                  <div className="details">
                    <p>A TARIFA PREFERENCIAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative footer py-14">
        <div className="relative w-11/12 lg:w-9/12 h-full mx-auto py-14">
          {/* <div className="top_bar">
            <div className="flex items-center flex-col lg:flex-row justify-center lg:justify-start">
              <div className="w-11-/12 lg:w-8/12 h-full">
                <div className="relative flex flex-col lg:flex-row items-center h-full left_content">
                  <h1>
                    CREAR <br /> CUENTA AHORA
                  </h1>
                  <button type="button" className="lg:absolute arrow_btn" onClick={goRegister}>
                    <img src="assets/home/icons/arrow.svg" alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-4/12 h-full">
                <div className="right_button">
                  <button type="button" onClick={goRegister}>
                    Crear Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Form */}
          <div  className="h-full main_content pt-14">
            <div className="flex h-full flex-col justify-center items-center lg:flex-row">
              <div className="w-11/12 lg:w-6/12 h-full lg:pl-10 p:0 mx-auto">
                <div className="relative h-full left_content">
                  <div className="logo_bar">
                    <NavLink to="/">
                      <img src="/assets/home/2.png" alt="logo" />
                    </NavLink>
                  </div>
                  <div className="pt-10 social_icons hidden lg:block">
                    <ul className="flex items-center justify-start nav">
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/x.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/instagram.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/facebook.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="ml-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/youtube.svg" alt="pic" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute copyright bottom-10 left-10 hidden lg:block">
                    <p>Copyright © 2023. Todos los derechos reservados.</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={form} className="h-full main_content pt-14 relative z-20">
            <div className="flex h-full flex-col justify-center items-center lg:flex-row">
              <div className="w-11/12 lg:w-6/12 mx-auto h-full">
                <form ref={form} className="h-full contact_form" onSubmit={sendMail}>
                  <div className="pb-5 title">
                    <h4>¿Tiene preguntas? Contáctenos</h4>
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="subject">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Introduce tu nombre..."
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Introduce tu correo..."
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      placeholder="Escribe tu mensaje..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="glossy-button">
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Effects */}
        <div className="absolute effects1">
          <img src="/assets/home/cube2.png" alt="cube" />
        </div>
        <div className="absolute effects2">
          <img src="assets/home/cube.png" alt="cube" />
        </div>
        <div className="absolute effects3 j"></div>
        <ToastContainer/>
      </section>
    </div>
  );
};

export default Home;
