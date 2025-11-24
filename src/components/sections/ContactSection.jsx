import { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phone = "6285189976233"; // ganti nomor kalau perlu
    const text = `Halo, saya *${name}*.%0A%0A${message}`;
    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section id="kontak" className="section">
      <div className="container">
        <h2>Kontak</h2>
        <p className="section-note">
          Silakan kirim pesan untuk keperluan kerja sama atau pertanyaan.
        </p>

        <div className="contact-form">
          <input
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />

          <textarea
            placeholder="Tulis pesan di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea-field"
          />

          <button className="btn btn-primary" onClick={handleSend}>
            Kirim via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
