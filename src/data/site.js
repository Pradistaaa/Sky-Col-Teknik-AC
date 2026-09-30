export const waNumber = "6281297983801";

export const services = [
  {
    title: "Service & Cuci AC",
    description:
      "Perawatan AC agar tetap bersih, dingin, dan bekerja optimal.",
  },
  {
    title: "Freon AC",
    description:
      "Tambah atau isi freon sesuai jenis refrigerant dan kapasitas AC.",
  },
  {
    title: "Bongkar & Pasang",
    description:
      "Jasa bongkar, pasang, dan bongkar pasang AC rumah maupun usaha.",
  },
  {
    title: "Perbaikan AC",
    description:
      "Pengecekan dan perbaikan berbagai masalah pada unit AC.",
  },
];

export const prices = [
  ["Service Cuci AC 0.5–1 PK", "Rp75.000"],
  ["Service Cuci AC 1.5–2 PK", "Rp85.000"],
  ["Service Cuci AC Inverter", "Rp135.000"],
  ["Tambah Freon R22 0.5–1 PK", "Rp250.000"],
  ["Tambah Freon R22 1.5–2 PK", "Rp300.000"],
  ["Tambah Freon R32/R410 0.5–1 PK", "Rp250.000"],
  ["Tambah Freon R32/R410 1.5–2 PK", "Rp250.000"],
  ["Isi Freon R22 0.5–1 PK", "Rp350.000"],
  ["Isi Freon R22 1.5–2 PK", "Rp450.000"],
  ["Isi Freon R32/R410 0.5–1 PK", "Rp350.000"],
  ["Isi Freon R32/R410 1.5–2 PK", "Rp450.000"],
  ["Bongkar AC", "Rp200.000"],
  ["Pasang AC 0.5–1 PK", "Rp350.000"],
  ["Pasang AC 1.5–2 PK", "Rp400.000"],
  ["Bongkar Pasang AC 0.5–1 PK", "Rp475.000"],
  ["Bongkar Pasang AC 1.5–2 PK", "Rp575.000"],
  ["Penggantian Kapasitor AC 0.5–1 PK", "Rp375.000"],
  ["Penggantian Kapasitor AC 1.5–2 PK", "Rp425.000"],
  ["Harga Bobok Tembok per Titik", "Rp50.000"],
  ["Jasa Las per Titik", "Rp125.000"],
  ["Vakum AC", "Rp275.000"],
  ["Flushing AC", "Rp225.000"],
  ["Vakum dan Flushing", "Rp475.000"],
  ["Biaya Pengecekan AC", "Rp100.000"],
  ["Perbaikan Kebocoran Pipa Beringan Nepel", "Rp395.000"],
  ["Oli Kompresor AC", "Rp375.000"],
  ["Pergantian Pentil Sill Nepel", "Rp175.000"],
];

export const faqs = [
  {
    question: "Apakah Sky Col Teknik AC melayani panggilan?",
    answer:
      "Ya. Sky Col Teknik AC melayani kebutuhan service AC dengan sistem panggilan di area DKI Jakarta.",
  },
  {
    question: "Apakah bisa service AC inverter?",
    answer:
      "Bisa. Tersedia layanan service cuci AC inverter dengan harga yang tercantum pada daftar layanan.",
  },
  {
    question: "Apakah bisa bongkar dan pasang AC?",
    answer:
      "Bisa. Tersedia layanan bongkar, pasang, maupun bongkar pasang berdasarkan kapasitas AC.",
  },
  {
    question: "Bagaimana cara melakukan booking?",
    answer:
      "Hubungi Sky Col Teknik AC melalui WhatsApp, sampaikan kebutuhan dan lokasi, kemudian teknisi akan membantu proses selanjutnya.",
  },
];

export function whatsapp(service = "konsultasi service AC") {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Halo Sky Col Teknik AC, saya ingin ${service}. Mohon informasinya.`
  )}`;
}