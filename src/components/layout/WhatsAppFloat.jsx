function WhatsAppFloat() {
  const phone = "6285189976233"; // ganti kalau perlu
  const text = "Halo, saya ingin bertanya mengenai kerja sama pembuatan website.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      className="wa-float"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/wa.png" alt="WhatsApp" className="wa-icon" />
    </a>
  );
}

export default WhatsAppFloat;
