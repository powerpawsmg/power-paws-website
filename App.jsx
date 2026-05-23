import { useState } from "react";

const theme = {
  red: "#C8102E",
  redDark: "#9B0B22",
  redLight: "#F9E5E8",
  black: "#111111",
  charcoal: "#1E1E1E",
  offWhite: "#F7F5F2",
  gray: "#6B6B6B",
  lightGray: "#E8E6E3",
};

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${theme.offWhite}; font-family: 'Barlow', sans-serif; color: ${theme.black}; }

  .nav {
    position: sticky; top: 0; z-index: 100;
    background: ${theme.black};
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2.5rem; height: 64px;
    border-bottom: 3px solid ${theme.red};
  }
  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.6rem; color: white; letter-spacing: 2px;
    display: flex; align-items: center; gap: 10px; cursor: pointer;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 2rem; align-items: center; }
  .nav-link {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.95rem; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; color: #AAA; cursor: pointer;
    border: none; background: none; padding: 0;
    transition: color 0.2s;
  }
  .nav-link:hover, .nav-link.active { color: ${theme.red}; }
  .nav-cta {
    background: ${theme.red}; color: white; padding: 8px 20px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.85rem;
    font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
    border: none; cursor: pointer; border-radius: 2px;
    transition: background 0.2s;
  }
  .nav-cta:hover { background: ${theme.redDark}; }

  .hero {
    background: ${theme.black};
    min-height: 560px;
    display: grid; grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }
  .hero-left {
    padding: 5rem 3rem 5rem 4rem;
    display: flex; flex-direction: column; justify-content: center;
  }
  .hero-eyebrow {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.8rem; font-weight: 700; letter-spacing: 3px;
    color: ${theme.red}; text-transform: uppercase; margin-bottom: 1rem;
  }
  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5.5rem; line-height: 0.95; color: white; letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }
  .hero-title span { color: ${theme.red}; }
  .hero-sub {
    font-size: 1.1rem; color: #CCC; line-height: 1.7;
    max-width: 420px; margin-bottom: 2.5rem;
  }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary {
    background: ${theme.red}; color: white; padding: 14px 32px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem;
    font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    border: none; cursor: pointer; border-radius: 2px; transition: background 0.2s;
  }
  .btn-primary:hover { background: ${theme.redDark}; }
  .btn-outline {
    background: transparent; color: white; padding: 14px 32px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem;
    font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    border: 2px solid rgba(255,255,255,0.3); cursor: pointer; border-radius: 2px;
    transition: border-color 0.2s;
  }
  .btn-outline:hover { border-color: white; }
  .hero-right {
    background: ${theme.charcoal};
    display: flex; align-items: center; justify-content: center;
  }

  .badges {
    display: grid; grid-template-columns: repeat(3, 1fr);
    background-color: rgba(0,0,0,0.2); gap: 1px;
  }
  .badge-item { background: ${theme.red}; padding: 1.8rem 1.5rem; text-align: center; }
  .badge-num { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: white; line-height: 1; }
  .badge-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.8rem; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: rgba(255,255,255,0.75); margin-top: 4px;
  }

  .section { padding: 5rem 4rem; }
  .section-dark { background: ${theme.black}; color: white; }
  .section-light { background: ${theme.offWhite}; }
  .section-title { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; letter-spacing: 2px; margin-bottom: 0.5rem; }
  .section-sub { font-size: 1rem; color: ${theme.gray}; margin-bottom: 3rem; max-width: 550px; line-height: 1.7; }
  .section-dark .section-sub { color: #AAA; }
  .section-accent { color: ${theme.red}; }

  .how-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .how-card {
    background: ${theme.charcoal}; padding: 2rem 1.5rem; border-radius: 4px;
    border-top: 4px solid ${theme.red}; position: relative;
  }
  .how-num {
    font-family: 'Bebas Neue', sans-serif; font-size: 4rem; color: rgba(200,16,46,0.15);
    position: absolute; top: 8px; right: 16px; line-height: 1;
  }
  .how-icon { font-size: 2rem; margin-bottom: 1rem; }
  .how-title {
    font-family: 'Barlow Condensed', sans-serif; font-size: 1.1rem;
    font-weight: 700; letter-spacing: 1px; color: white; margin-bottom: 0.5rem; text-transform: uppercase;
  }
  .how-desc { font-size: 0.9rem; color: #AAA; line-height: 1.6; }

  .testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .testi-card { background: white; padding: 2rem; border-radius: 4px; border-left: 4px solid ${theme.red}; }
  .testi-stars { color: ${theme.red}; font-size: 1rem; margin-bottom: 1rem; }
  .testi-text { font-size: 0.95rem; color: #333; line-height: 1.7; margin-bottom: 1.2rem; font-style: italic; }
  .testi-name { font-weight: 600; font-size: 0.9rem; color: ${theme.black}; }
  .testi-dog { font-size: 0.8rem; color: ${theme.gray}; }

  .services-hero { background: ${theme.black}; padding: 5rem 4rem; border-bottom: 4px solid ${theme.red}; }
  .page-hero-title { font-family: 'Bebas Neue', sans-serif; font-size: 4.5rem; color: white; letter-spacing: 2px; }
  .page-hero-sub { font-size: 1.1rem; color: #AAA; max-width: 600px; margin-top: 1rem; line-height: 1.7; }

  .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .service-card {
    background: white; border-radius: 4px; overflow: hidden;
    border: 1px solid ${theme.lightGray}; transition: border-color 0.2s;
  }
  .service-card:hover { border-color: ${theme.red}; }
  .service-header { background: ${theme.black}; padding: 1.5rem 2rem; display: flex; align-items: center; gap: 1rem; }
  .service-icon-wrap {
    width: 48px; height: 48px; background: ${theme.red}; border-radius: 4px;
    display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0;
  }
  .service-name { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; color: white; letter-spacing: 1px; }
  .service-duration {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.75rem; font-weight: 600;
    letter-spacing: 2px; text-transform: uppercase; color: ${theme.red};
  }
  .service-body { padding: 1.5rem 2rem; }
  .service-desc { font-size: 0.95rem; color: ${theme.gray}; line-height: 1.7; margin-bottom: 1.2rem; }
  .service-features { list-style: none; }
  .service-features li {
    font-size: 0.88rem; color: ${theme.black}; padding: 5px 0;
    display: flex; align-items: center; gap: 8px; border-bottom: 1px solid ${theme.lightGray};
  }
  .service-features li:last-child { border-bottom: none; }
  .check { color: ${theme.red}; font-weight: 700; }

  .price-section { background: ${theme.red}; padding: 3rem 4rem; }
  .price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,0,0,0.15); }
  .price-card { background: ${theme.red}; padding: 2.5rem 2rem; text-align: center; }
  .price-plan {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.8rem; font-weight: 700;
    letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 1rem;
  }
  .price-amount { font-family: 'Bebas Neue', sans-serif; font-size: 4rem; color: white; line-height: 1; }
  .price-period { font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-top: 4px; }
  .price-note { font-size: 0.82rem; color: rgba(255,255,255,0.65); margin-top: 1rem; line-height: 1.5; }
  .price-badge {
    display: inline-block; background: rgba(0,0,0,0.25); color: white;
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; margin-bottom: 1rem;
  }

  .signup-layout { display: grid; grid-template-columns: 1fr 1fr; min-height: 600px; }
  .signup-left { background: ${theme.black}; padding: 4rem; display: flex; flex-direction: column; justify-content: center; }
  .signup-right { background: ${theme.offWhite}; padding: 4rem 3.5rem; }
  .form-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; color: white; letter-spacing: 2px; margin-bottom: 1rem; }
  .form-sub { font-size: 0.95rem; color: #AAA; line-height: 1.7; margin-bottom: 2.5rem; }
  .checklist { list-style: none; }
  .checklist li {
    color: white; font-size: 0.95rem; padding: 0.6rem 0;
    display: flex; align-items: flex-start; gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.08); line-height: 1.5;
  }
  .checklist li:last-child { border-bottom: none; }
  .checklist .check { color: ${theme.red}; font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

  .form-group { margin-bottom: 1.2rem; }
  .form-label {
    display: block; font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    color: ${theme.gray}; margin-bottom: 6px;
  }
  .form-input, .form-select, .form-textarea {
    width: 100%; padding: 10px 14px; border: 1.5px solid ${theme.lightGray};
    border-radius: 3px; font-family: 'Barlow', sans-serif; font-size: 0.95rem;
    color: ${theme.black}; background: white; outline: none; transition: border-color 0.2s;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: ${theme.red}; }
  .form-textarea { resize: vertical; min-height: 90px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-submit {
    width: 100%; background: ${theme.red}; color: white; padding: 14px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; border: none; cursor: pointer;
    border-radius: 3px; margin-top: 0.5rem; transition: background 0.2s;
  }
  .form-submit:hover { background: ${theme.redDark}; }

  .booking-gate {
    min-height: 500px; display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 4rem; text-align: center;
  }
  .gate-lock { font-size: 3.5rem; margin-bottom: 1.5rem; }
  .gate-title { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; letter-spacing: 2px; margin-bottom: 1rem; }
  .gate-sub { font-size: 1rem; color: ${theme.gray}; max-width: 480px; line-height: 1.7; margin-bottom: 2rem; }
  .gate-form {
    background: white; padding: 2.5rem; border-radius: 4px; width: 100%; max-width: 420px;
    border: 1px solid ${theme.lightGray};
  }
  .gate-form-title {
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem; color: ${theme.black};
  }

  .booking-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 3rem 4rem; }
  .booking-panel { background: white; border-radius: 4px; border: 1px solid ${theme.lightGray}; overflow: hidden; }
  .booking-panel-header {
    background: ${theme.black}; padding: 1.2rem 1.5rem;
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: white;
  }
  .booking-panel-body { padding: 1.5rem; }
  .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
  .cal-day-name {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.7rem; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase; text-align: center; color: ${theme.gray}; padding: 4px 0;
  }
  .cal-day {
    aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
    border-radius: 3px; font-size: 0.88rem; cursor: pointer; transition: background 0.15s;
  }
  .cal-day.empty { cursor: default; }
  .cal-day.available:hover { background: ${theme.redLight}; color: ${theme.red}; }
  .cal-day.selected { background: ${theme.red}; color: white; font-weight: 600; }
  .cal-day.past { color: #CCC; cursor: default; }

  .time-slots { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 1rem; }
  .time-slot {
    text-align: center; padding: 10px 6px; border: 1.5px solid ${theme.lightGray};
    border-radius: 3px; cursor: pointer; font-size: 0.85rem; transition: all 0.15s;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 600; letter-spacing: 1px;
  }
  .time-slot:hover { border-color: ${theme.red}; color: ${theme.red}; }
  .time-slot.selected { background: ${theme.red}; border-color: ${theme.red}; color: white; }
  .time-slot.booked { background: ${theme.lightGray}; color: #AAA; cursor: not-allowed; border-color: transparent; }

  .booking-confirm {
    background: ${theme.black}; color: white; width: 100%; padding: 12px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 1rem; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; border: none; cursor: pointer;
    border-radius: 3px; margin-top: 1.5rem; transition: background 0.2s;
  }
  .booking-confirm:hover { background: ${theme.redDark}; }
  .booking-confirm:disabled { background: #CCC; cursor: not-allowed; }

  .upcoming-item {
    display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0;
    border-bottom: 1px solid ${theme.lightGray};
  }
  .upcoming-item:last-child { border-bottom: none; }
  .upcoming-date {
    background: ${theme.red}; color: white; border-radius: 4px;
    padding: 6px 10px; text-align: center; min-width: 52px;
  }
  .upcoming-month { font-family: 'Barlow Condensed', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
  .upcoming-day { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; line-height: 1; }
  .upcoming-info { flex: 1; }
  .upcoming-dog { font-weight: 600; font-size: 0.95rem; }
  .upcoming-time { font-size: 0.85rem; color: ${theme.gray}; margin-top: 2px; }
  .upcoming-status {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.7rem; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase; background: #eafaf1;
    color: #27ae60; padding: 3px 8px; border-radius: 2px;
  }

  .footer { background: ${theme.black}; padding: 3rem 4rem 2rem; border-top: 3px solid ${theme.red}; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 2rem; }
  .footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; color: white; letter-spacing: 2px; margin-bottom: 1rem; }
  .footer-desc { font-size: 0.88rem; color: #888; line-height: 1.7; max-width: 280px; }
  .footer-col-title {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 3px; text-transform: uppercase; color: ${theme.red}; margin-bottom: 1rem;
  }
  .footer-links { list-style: none; }
  .footer-links li { padding: 4px 0; }
  .footer-links a { color: #888; font-size: 0.88rem; text-decoration: none; cursor: pointer; transition: color 0.2s; }
  .footer-links a:hover { color: white; }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-copy { font-size: 0.8rem; color: #555; }
  .footer-area { font-size: 0.8rem; color: ${theme.red}; font-family: 'Barlow Condensed', sans-serif; font-weight: 600; letter-spacing: 1px; }
`;

function PawLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="20" r="9" fill="#C8102E"/>
      <ellipse cx="9" cy="11" rx="3" ry="4" fill="#C8102E"/>
      <ellipse cx="16" cy="9" rx="3" ry="4" fill="#C8102E"/>
      <ellipse cx="23" cy="11" rx="3" ry="4" fill="#C8102E"/>
      <ellipse cx="5" cy="17" rx="2.5" ry="3.5" fill="#C8102E"/>
      <ellipse cx="27" cy="17" rx="2.5" ry="3.5" fill="#C8102E"/>
    </svg>
  );
}

function VanGraphic() {
  return (
    <svg viewBox="0 0 400 280" width="380" height="280">
      <rect x="30" y="100" width="340" height="130" rx="12" fill="#C8102E"/>
      <rect x="30" y="100" width="200" height="130" rx="12" fill="#9B0B22"/>
      <rect x="50" y="115" width="85" height="60" rx="6" fill="#1E1E1E" opacity="0.7"/>
      <rect x="145" y="115" width="60" height="60" rx="6" fill="#1E1E1E" opacity="0.4"/>
      <rect x="215" y="80" width="155" height="150" rx="10" fill="#C8102E"/>
      <rect x="225" y="95" width="60" height="75" rx="5" fill="#87CEEB" opacity="0.6"/>
      <rect x="295" y="95" width="60" height="75" rx="5" fill="#87CEEB" opacity="0.4"/>
      <circle cx="90" cy="240" r="30" fill="#111"/>
      <circle cx="90" cy="240" r="18" fill="#444"/>
      <circle cx="90" cy="240" r="8" fill="#222"/>
      <circle cx="300" cy="240" r="30" fill="#111"/>
      <circle cx="300" cy="240" r="18" fill="#444"/>
      <circle cx="300" cy="240" r="8" fill="#222"/>
      <text x="235" y="170" fontFamily="'Bebas Neue', serif" fontSize="13" fill="white" letterSpacing="1">POWER PAWS</text>
      <text x="238" y="183" fontFamily="'Bebas Neue', serif" fontSize="10" fill="rgba(255,255,255,0.7)" letterSpacing="1">MOBILE GYM</text>
    </svg>
  );
}

function HomePage({ navigate }) {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">📍 Serving Stamford, CT & Surrounding Areas</p>
          <h1 className="hero-title">YOUR DOG<br/>DESERVES A<br/><span>REAL</span><br/>WORKOUT.</h1>
          <p className="hero-sub">Power Paws Mobile Gym brings professional-grade canine fitness directly to your door — climate-controlled, treadmill-equipped, and tailored to your pup.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("signup")}>Get Started Today</button>
            <button className="btn-outline" onClick={() => navigate("services")}>View Services</button>
          </div>
        </div>
        <div className="hero-right">
          <VanGraphic />
        </div>
      </div>

      <div className="badges">
        <div className="badge-item"><div className="badge-num">30</div><div className="badge-label">Minute Sessions</div></div>
        <div className="badge-item"><div className="badge-num">100%</div><div className="badge-label">Climate Controlled</div></div>
        <div className="badge-item"><div className="badge-num">1-on-1</div><div className="badge-label">Personal Attention</div></div>
      </div>

      <div className="section section-dark">
        <p className="section-title">HOW IT <span className="section-accent">WORKS</span></p>
        <p className="section-sub">Getting your dog fit has never been easier. We come to you, do the work, and bring them back happy and tired.</p>
        <div className="how-grid">
          {[
            { icon: "📋", title: "Sign Up & Screen", desc: "Fill out our intake form. We'll schedule a free temperament screening to ensure our gym is the right fit for your dog." },
            { icon: "📅", title: "Book a Session", desc: "Once cleared, access our client portal to book 30-minute sessions at times that work for your schedule." },
            { icon: "🚐", title: "We Come to You", desc: "Our mobile gym pulls up to your home. No driving, no waiting rooms, no stress for your pup." },
            { icon: "🏆", title: "Results You'll See", desc: "Regular sessions improve your dog's weight, energy, mood, and behavior. Track progress over time." },
          ].map((s, i) => (
            <div className="how-card" key={i}>
              <div className="how-num">{i + 1}</div>
              <div className="how-icon">{s.icon}</div>
              <div className="how-title">{s.title}</div>
              <p className="how-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section section-light">
        <p className="section-title">WHY <span style={{ color: theme.red }}>POWER PAWS</span></p>
        <p className="section-sub">Traditional walks aren't always enough. Our controlled, professional workout environment delivers real fitness benefits.</p>
        <div className="testimonials">
          {[
            { quote: "My golden retriever lost 8 pounds in 3 months. His vet was amazed. Power Paws is worth every penny.", name: "Sarah M.", dog: "Owner of Biscuit, 5yr Golden Retriever" },
            { quote: "Rocky has hip dysplasia and the low-impact treadmill sessions have genuinely improved his mobility. I recommend this to everyone.", name: "James T.", dog: "Owner of Rocky, 7yr German Shepherd" },
            { quote: "I work long hours and this service is a lifesaver. My lab is finally calm in the evenings. Best investment I've made as a dog owner.", name: "Maria L.", dog: "Owner of Duke, 3yr Labrador" },
          ].map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{t.quote}"</p>
              <div className="testi-name">{t.name}</div>
              <div className="testi-dog">{t.dog}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: theme.red, padding: "3.5rem 4rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", color: "white", letterSpacing: "2px", lineHeight: 1 }}>READY TO GET YOUR DOG MOVING?</p>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem", fontSize: "1rem" }}>Slots are limited — Stamford area only. Join the waitlist today.</p>
        </div>
        <button className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.6)" }} onClick={() => navigate("signup")}>Join the Waitlist →</button>
      </div>
    </div>
  );
}

function ServicesPage({ navigate }) {
  return (
    <div>
      <div className="services-hero">
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", color: theme.red, textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Offer</p>
        <h1 className="page-hero-title">OUR <span style={{ color: theme.red }}>SERVICES</span></h1>
        <p className="page-hero-sub">Every session is tailored to your dog's age, breed, fitness level, and health needs. No cookie-cutter routines — just real results.</p>
      </div>

      <div className="section section-light">
        <div className="services-grid">
          {[
            { icon: "🏃", name: "Standard Treadmill Session", duration: "30 Minutes", desc: "Our core offering. Your dog gets a structured, monitored treadmill workout in our climate-controlled mobile gym. Great for weight management and energy burn.", features: ["Professional canine treadmill", "Continuous handler supervision", "Heart rate monitoring", "Post-session hydration", "Session notes emailed to you"] },
            { icon: "🐾", name: "Senior Dog Fitness", duration: "30 Minutes — Low Impact", desc: "Modified sessions for older dogs or those with joint issues. Slower pace, shorter bursts, and extra care for dogs 7+ or with health conditions.", features: ["Vet-cleared protocol", "Slow-start warm-up routine", "Orthopedic mat resting station", "Mobility observation notes", "Vet communication available"] },
            { icon: "⚡", name: "High Energy Breed Intensive", duration: "30 Minutes — Advanced", desc: "For working breeds, high-drive dogs, or those that need more than a standard walk. Higher speeds, interval training, and mental engagement exercises.", features: ["Interval speed programming", "Breed-specific pace targets", "Energy level check-in sheet", "Behavioral enrichment tips", "Progress tracking dashboard"] },
            { icon: "🌱", name: "Puppy Foundation Program", duration: "30 Minutes — Ages 6m–18m", desc: "Build healthy habits early. Our puppy program focuses on low-impact movement, body awareness, and getting comfortable with structured exercise.", features: ["Age-appropriate speed settings", "Positive reinforcement only", "Coordination exercises", "Owner education notes", "Growth milestone tracking"] },
          ].map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-header">
                <div className="service-icon-wrap">{s.icon}</div>
                <div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-duration">{s.duration}</div>
                </div>
              </div>
              <div className="service-body">
                <p className="service-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="price-section">
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", color: "white", letterSpacing: "2px", marginBottom: "0.5rem" }}>SIMPLE, TRANSPARENT PRICING</p>
        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "2rem", fontSize: "0.95rem" }}>No hidden fees. No long-term contracts required.</p>
        <div className="price-grid">
          {[
            { plan: "Drop-In", amount: "$45", period: "per session", note: "Perfect for trying us out. Book as needed with no commitment." },
            { plan: "Monthly 8-Pack", amount: "$320", period: "per month (8 sessions)", note: "Our most popular plan. Two sessions per week at a discounted rate.", badge: "Best Value" },
            { plan: "Monthly 12-Pack", amount: "$420", period: "per month (12 sessions)", note: "For the dedicated dog athlete. Three sessions per week for serious results." },
          ].map((p, i) => (
            <div className="price-card" key={i}>
              {p.badge && <div className="price-badge">{p.badge}</div>}
              <div className="price-plan">{p.plan}</div>
              <div className="price-amount">{p.amount}</div>
              <div className="price-period">{p.period}</div>
              <p className="price-note">{p.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: theme.black, padding: "3rem 4rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "white", letterSpacing: "2px" }}>EVERY DOG REQUIRES A FREE SCREENING FIRST</p>
          <p style={{ color: "#888", fontSize: "0.95rem", marginTop: "0.5rem" }}>It's quick, friendly, and ensures our gym is the right fit for your pup.</p>
        </div>
        <button className="btn-primary" onClick={() => navigate("signup")}>Request Screening</button>
      </div>
    </div>
  );
}

function SignupPage() {
  const [form, setForm] = useState({ ownerName: "", email: "", phone: "", address: "", dogName: "", breed: "", age: "", weight: "", conditions: "", goals: "", howHeard: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (!form.ownerName || !form.email || !form.dogName || !form.breed) return;
    setSubmitted(true);
  };

  return (
    <div>
      <div className="signup-layout">
        <div className="signup-left">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", color: theme.red, textTransform: "uppercase", marginBottom: "0.75rem" }}>New Client Intake</p>
          <h1 className="form-title">LET'S GET YOUR DOG STARTED.</h1>
          <p className="form-sub">Fill out this form and we'll reach out within 24–48 hours to schedule your dog's free temperament and fitness screening. No commitment required.</p>
          <ul className="checklist">
            {[
              "Free screening included — no credit card needed",
              "Sessions serve Stamford, Greenwich, Darien & nearby CT towns",
              "All breeds and fitness levels welcome",
              "Vet records may be requested for senior or medical dogs",
              "Cancellations accepted 24hrs in advance",
            ].map((item, i) => <li key={i}><span className="check">✓</span> {item}</li>)}
          </ul>
        </div>
        <div className="signup-right">
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <div style={{ background: "#eafaf1", border: "1.5px solid #27ae60", borderRadius: "4px", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🐾</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: "1px", color: "#1a6e3c" }}>You're on the list!</h3>
                <p style={{ color: "#2d8050", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: 1.6 }}>Thanks, {form.ownerName}! We've received your intake form for <strong>{form.dogName}</strong>. Our team will contact you at <strong>{form.email}</strong> within 24–48 hours to schedule your free screening.</p>
              </div>
            </div>
          ) : (
            <>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: theme.gray, marginBottom: "1.5rem" }}>New Client Intake Form</p>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: theme.red, marginBottom: "0.75rem" }}>Your Information</p>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" name="ownerName" value={form.ownerName} onChange={handleChange} placeholder="Jane Smith" /></div>
                <div className="form-group"><label className="form-label">Phone</label><input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="(203) 555-0100" /></div>
              </div>
              <div className="form-group"><label className="form-label">Email Address *</label><input className="form-input" name="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" /></div>
              <div className="form-group"><label className="form-label">Home Address (for pickup)</label><input className="form-input" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Stamford, CT" /></div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: theme.red, marginBottom: "0.75rem", marginTop: "1.5rem" }}>Your Dog</p>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Dog's Name *</label><input className="form-input" name="dogName" value={form.dogName} onChange={handleChange} placeholder="Buddy" /></div>
                <div className="form-group"><label className="form-label">Breed *</label><input className="form-input" name="breed" value={form.breed} onChange={handleChange} placeholder="Labrador Retriever" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Age</label><input className="form-input" name="age" value={form.age} onChange={handleChange} placeholder="e.g. 3 years" /></div>
                <div className="form-group"><label className="form-label">Weight (approx.)</label><input className="form-input" name="weight" value={form.weight} onChange={handleChange} placeholder="e.g. 65 lbs" /></div>
              </div>
              <div className="form-group"><label className="form-label">Health Conditions or Concerns</label><textarea className="form-textarea" name="conditions" value={form.conditions} onChange={handleChange} placeholder="Arthritis, hip dysplasia, recent surgery, allergies, etc. Leave blank if none." /></div>
              <div className="form-group"><label className="form-label">Fitness Goals</label><textarea className="form-textarea" name="goals" value={form.goals} onChange={handleChange} placeholder="Weight loss, behavior improvement, general health, post-surgery recovery..." /></div>
              <div className="form-group">
                <label className="form-label">How Did You Hear About Us?</label>
                <select className="form-select" name="howHeard" value={form.howHeard} onChange={handleChange}>
                  <option value="">Select one</option>
                  <option>Google Search</option><option>Instagram / Facebook</option>
                  <option>Friend or Family Referral</option><option>Veterinarian Recommendation</option>
                  <option>Nextdoor</option><option>Saw the van!</option><option>Other</option>
                </select>
              </div>
              <button className="form-submit" onClick={handleSubmit}>Submit Intake Form →</button>
              <p style={{ fontSize: "0.78rem", color: theme.gray, textAlign: "center", marginTop: "0.75rem" }}>We'll follow up within 24–48 hours. No spam, ever.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function BookingPage() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [authError, setAuthError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleLogin = () => {
    if (email && pin === "1234") { setAuthed(true); setAuthError(false); }
    else setAuthError(true);
  };

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const calDays = [];
  for (let i = 0; i < 3; i++) calDays.push(null);
  for (let i = 1; i <= 31; i++) calDays.push(i);

  const bookedSlots = { 5: ["8:00 AM", "10:30 AM"], 9: ["9:00 AM"], 13: ["8:00 AM", "11:00 AM", "2:00 PM"], 18: ["10:30 AM", "3:30 PM"] };
  const times = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];
  const upcoming = [
    { month: "JUN", day: "3", dog: "Biscuit", time: "9:00 AM — 30 min session" },
    { month: "JUN", day: "6", dog: "Biscuit", time: "10:30 AM — 30 min session" },
    { month: "JUN", day: "10", dog: "Biscuit", time: "9:00 AM — 30 min session" },
  ];

  if (!authed) {
    return (
      <div className="booking-gate">
        <div className="gate-lock">🔒</div>
        <h2 className="gate-title">CLIENT PORTAL</h2>
        <p className="gate-sub">This page is exclusively for current Power Paws clients whose dogs have completed their screening. Enter your credentials below to access the booking calendar.</p>
        <div className="gate-form">
          <p className="gate-form-title">Client Login</p>
          <div className="form-group"><label className="form-label">Email Address</label><input className="form-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" /></div>
          <div className="form-group">
            <label className="form-label">Client PIN</label>
            <input className="form-input" type="password" value={pin} onChange={e => setPin(e.target.value)} placeholder="4-digit PIN" maxLength={4} />
            <p style={{ fontSize: "0.78rem", color: theme.gray, marginTop: "5px" }}>Your PIN was provided in your welcome email.</p>
          </div>
          {authError && <p style={{ color: theme.red, fontSize: "0.85rem", marginBottom: "0.75rem" }}>Invalid email or PIN. Please try again.</p>}
          <button className="form-submit" onClick={handleLogin}>Access My Portal →</button>
          <p style={{ fontSize: "0.78rem", color: theme.gray, textAlign: "center", marginTop: "0.75rem" }}>Not a client yet? Sign up for a screening first.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: theme.black, padding: "2.5rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `3px solid ${theme.red}` }}>
        <div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", color: theme.red, textTransform: "uppercase", marginBottom: "4px" }}>Welcome Back</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "white", letterSpacing: "2px", lineHeight: 1 }}>BOOK A SESSION</h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ color: "#888", fontSize: "0.85rem" }}>Logged in as</p>
          <p style={{ color: "white", fontWeight: 600 }}>{email}</p>
          <p style={{ color: theme.red, fontSize: "0.85rem" }}>🐾 Biscuit — Active Client</p>
        </div>
      </div>

      <div className="booking-layout">
        <div>
          <div className="booking-panel" style={{ marginBottom: "1.5rem" }}>
            <div className="booking-panel-header">📅 June 2025 — Select a Date</div>
            <div className="booking-panel-body">
              <div className="cal-grid">
                {days.map(d => <div className="cal-day-name" key={d}>{d}</div>)}
                {calDays.map((d, i) => {
                  if (!d) return <div key={`e${i}`} className="cal-day empty" />;
                  const isPast = d < 3;
                  const isSelected = selectedDay === d;
                  return (
                    <div key={d} className={`cal-day ${isPast ? "past" : "available"} ${isSelected ? "selected" : ""}`}
                      onClick={() => { if (!isPast) { setSelectedDay(d); setSelectedTime(null); setConfirmed(false); } }}>
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {selectedDay && (
            <div className="booking-panel">
              <div className="booking-panel-header">⏱ Available Times — June {selectedDay}</div>
              <div className="booking-panel-body">
                <div className="time-slots">
                  {times.map(t => {
                    const isBooked = (bookedSlots[selectedDay] || []).includes(t);
                    const isSelected = selectedTime === t;
                    return (
                      <div key={t} className={`time-slot ${isBooked ? "booked" : ""} ${isSelected && !isBooked ? "selected" : ""}`}
                        onClick={() => { if (!isBooked) { setSelectedTime(t); setConfirmed(false); } }}>
                        {isBooked ? "Booked" : t}
                      </div>
                    );
                  })}
                </div>
                {selectedTime && !confirmed && (
                  <div style={{ marginTop: "1.2rem", padding: "1rem", background: theme.redLight, borderRadius: "3px" }}>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>Confirm: June {selectedDay} at {selectedTime}</p>
                    <p style={{ fontSize: "0.82rem", color: theme.gray, marginTop: "4px" }}>30-minute session for Biscuit · Power Paws Mobile Gym</p>
                  </div>
                )}
                {confirmed && (
                  <div style={{ marginTop: "1.2rem", padding: "1rem", background: "#eafaf1", border: "1.5px solid #27ae60", borderRadius: "3px" }}>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a6e3c" }}>✓ Booking Confirmed!</p>
                    <p style={{ fontSize: "0.82rem", color: "#2d8050", marginTop: "4px" }}>June {selectedDay} at {selectedTime} — A confirmation email has been sent.</p>
                  </div>
                )}
                <button className="booking-confirm" disabled={!selectedTime || confirmed} onClick={() => setConfirmed(true)}>
                  {confirmed ? "Session Booked ✓" : "Confirm Booking"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="booking-panel" style={{ marginBottom: "1.5rem" }}>
            <div className="booking-panel-header">🏃 Upcoming Sessions</div>
            <div className="booking-panel-body">
              {upcoming.map((u, i) => (
                <div className="upcoming-item" key={i}>
                  <div className="upcoming-date">
                    <div className="upcoming-month">{u.month}</div>
                    <div className="upcoming-day">{u.day}</div>
                  </div>
                  <div className="upcoming-info">
                    <div className="upcoming-dog">{u.dog}</div>
                    <div className="upcoming-time">{u.time}</div>
                  </div>
                  <div className="upcoming-status">Confirmed</div>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-panel">
            <div className="booking-panel-header">📋 My Dog's Profile</div>
            <div className="booking-panel-body">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ width: 52, height: 52, background: theme.redLight, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>🐕</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>Biscuit</div>
                  <div style={{ fontSize: "0.85rem", color: theme.gray }}>Golden Retriever · 5 years · 68 lbs</div>
                </div>
              </div>
              {[["Membership", "8-Session Monthly Pack"], ["Status", "Active Client — Screened ✓"], ["Sessions This Month", "4 of 8 used"], ["Next Renewal", "July 1, 2025"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${theme.lightGray}`, fontSize: "0.88rem" }}>
                  <span style={{ color: theme.gray }}>{k}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <div className="nav-logo" onClick={() => setPage("home")}>
          <PawLogo /> POWER PAWS
        </div>
        <div className="nav-links">
          {[["home", "Home"], ["services", "Services"], ["signup", "Sign Up"]].map(([p, label]) => (
            <button key={p} className={`nav-link ${page === p ? "active" : ""}`} onClick={() => setPage(p)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => setPage("booking")}>Client Login</button>
        </div>
      </nav>

      <main>
        {page === "home" && <HomePage navigate={setPage} />}
        {page === "services" && <ServicesPage navigate={setPage} />}
        {page === "signup" && <SignupPage />}
        {page === "booking" && <BookingPage />}
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">🐾 Power Paws Mobile Gym</div>
            <p className="footer-desc">Professional canine fitness delivered to your door. Climate-controlled, treadmill-equipped, and tailored to your dog's needs.</p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[["Home", "home"], ["Services", "services"], ["Sign Up", "signup"], ["Client Login", "booking"]].map(([label, pg]) => (
                <li key={pg}><a onClick={() => setPage(pg)}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a>info@powerpawsmobile.com</a></li>
              <li><a>(203) 555-PAWS</a></li>
              <li><a>Stamford, CT 06901</a></li>
              <li style={{ marginTop: "0.75rem" }}><a>@PowerPawsCT</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Power Paws Mobile Gym LLC. All rights reserved.</p>
          <p className="footer-area">📍 Serving Stamford · Greenwich · Darien · New Canaan · CT</p>
        </div>
      </footer>
    </>
  );
}
