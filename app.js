function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const questions = [
    {
        "no": 1,
        "teks": "Ketika menghadiri acara sosial, Anda cenderung:",
        "opsi": {
            "A": "Berinteraksi dengan banyak orang, termasuk orang baru",
            "B": "Berbicara hanya dengan orang yang sudah Anda kenal",
            "C": "Mengamati dari pinggir dan hanya berbicara ketika diajak",
            "D": "Menemukan topik mendalam dengan 1-2 orang"
        },
        "tipe": "EI",
        "skor": { "A": "E", "B": "E", "C": "I", "D": "I" }
    },
    {
        "no": 2,
        "teks": "Ketika mempelajari hal baru, Anda lebih memilih:",
        "opsi": {
            "A": "Panduan praktis langkah demi langkah",
            "B": "Video demonstrasi nyata",
            "C": "Konsep teoretis dan prinsip dasar",
            "D": "Diskusi tentang berbagai kemungkinan penerapannya"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "S", "C": "N", "D": "N" }
    },
    {
        "no": 3,
        "teks": "Dalam mengambil keputusan penting, Anda lebih mengandalkan:",
        "opsi": {
            "A": "Logika dan analisis objektif",
            "B": "Nilai-nilai pribadi dan prinsip hidup",
            "C": "Dampak pada hubungan interpersonal",
            "D": "Pengalaman masa lalu yang terbukti efektif"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "F", "C": "F", "D": "T" }
    },
    {
        "no": 4,
        "teks": "Dalam menyelesaikan pekerjaan, Anda:",
        "opsi": {
            "A": "Membuat jadwal ketat dan menaatinya",
            "B": "Menyelesaikan tepat waktu dengan fleksibilitas",
            "C": "Bekerja ketika merasa terinspirasi",
            "D": "Menyesuaikan dengan situasi terbaru"
        },
        "tipe": "JP",
        "skor": { "A": "J", "B": "J", "C": "P", "D": "P" }
    },
    {
        "no": 5,
        "teks": "Ketika melihat gambar ini, pertama kali Anda:",
        "opsi": {
            "A": "Melihat detail (warna, tekstur, objek spesifik)",
            "B": "Mengenali pola dan struktur keseluruhan",
            "C": "Membayangkan cerita di balik gambar",
            "D": "Merasakan emosi yang ingin disampaikan"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "S", "C": "N", "D": "N" },
        gambar: true
    },
    {
        "no": 6,
        "teks": "Ketika tim mengalami konflik, Anda:",
        "opsi": {
            "A": "Menganalisis akar masalah secara objektif",
            "B": "Mencari solusi yang memuaskan semua pihak",
            "C": "Memediasi dengan memperhatikan perasaan anggota",
            "D": "Mengajukan pendekatan struktural baru"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "F", "C": "F", "D": "T" }
    },
    {
        "no": 7,
        "teks": "Aktivitas weekend ideal Anda:",
        "opsi": {
            "A": "Pesta bersama banyak teman",
            "B": "Proyek kreatif pribadi",
            "C": "Membaca buku bagus di rumah",
            "D": "Petualangan spontan ke tempat baru"
        },
        "tipe": "EI",
        "skor": { "A": "E", "B": "I", "C": "I", "D": "E" }
    },
    {
        "no": 8,
        "teks": "Ketika memecahkan masalah, Anda:",
        "opsi": {
            "A": "Fokus pada fakta yang ada",
            "B": "Mengeksplorasi berbagai kemungkinan solusi",
            "C": "Menggunakan metode yang telah terbukti berhasil",
            "D": "Mengembangkan pendekatan inovatif"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "N", "C": "S", "D": "N" }
    },
    {
        "no": 9,
        "teks": "Dalam mengevaluasi karya seni, yang paling penting:",
        "opsi": {
            "A": "Teknik dan keahlian pembuatan",
            "B": "Makna simbolik dan kedalaman pesan",
            "C": "Emosi yang dibangkitkan pada penikmat",
            "D": "Keaslian dan kreativitas konsep"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "N", "C": "F", "D": "N" }
    },
    {
        "no": 10,
        "teks": "Menyangkut deadline, Anda:",
        "opsi": {
            "A": "Selesai jauh sebelum deadline",
            "B": "Selesai tepat waktu dengan perencanaan matang",
            "C": "Bekerja optimal di tekanan deadline",
            "D": "Fleksibel selama hasil akhir berkualitas"
        },
        "tipe": "JP",
        "skor": { "A": "J", "B": "J", "C": "P", "D": "P" }
    },
    {
        "no": 11,
        "teks": "Setelah hari yang melelahkan, Anda memulihkan energi dengan:",
        "opsi": {
            "A": "Berkumpul dengan teman-teman",
            "B": "Me time di tempat tenang",
            "C": "Melakukan hobi kreatif",
            "D": "Olahraga atau aktivitas fisik"
        },
        "tipe": "EI",
        "skor": { "A": "E", "B": "I", "C": "I", "D": "E" }
    },
    {
        "no": 12,
        "teks": "Ketika menerima informasi baru, Anda cenderung:",
        "opsi": {
            "A": "Fokus pada data konkret yang disajikan",
            "B": "Mencari pola dan hubungan tersembunyi",
            "C": "Mempertimbangkan implikasi praktis",
            "D": "Membayangkan kemungkinan masa depan"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "N", "C": "S", "D": "N" }
    },
    {
        "no": 13,
        "teks": "Dalam menilai suatu tindakan, yang paling penting:",
        "opsi": {
            "A": "Efektivitas dan hasil yang dicapai",
            "B": "Niat dan motivasi di baliknya",
            "C": "Dampak pada orang lain",
            "D": "Kesesuaian dengan prinsip moral"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "F", "C": "F", "D": "F" }
    },
    {
        "no": 14,
        "teks": "Ketika memulai proyek baru, Anda:",
        "opsi": {
            "A": "Membuat rencana detail sebelum memulai",
            "B": "Menyiapkan kerangka umum kemudian mengembangkan",
            "C": "Langsung memulai dan menyesuaikan sepanjang jalan",
            "D": "Mengeksplorasi berbagai pendekatan dulu"
        },
        "tipe": "JP",
        "skor": { "A": "J", "B": "J", "C": "P", "D": "P" }
    },
    {
        "no": 15,
        "teks": "Dalam bekerja sama, Anda lebih menghargai:",
        "opsi": {
            "A": "Efisiensi dan produktivitas",
            "B": "Harmoni dan kerjasama tim",
            "C": "Kreativitas dan inovasi",
            "D": "Ketepatan dan keandalan"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "F", "C": "N", "D": "S" }
    },
    {
        "no": 16,
        "teks": "Ketika menghadapi situasi tidak terduga, Anda:",
        "opsi": {
            "A": "Menganalisis pilihan secara sistematis",
            "B": "Mengikuti insting dan penilaian situasional",
            "C": "Mencari masukan dari orang lain",
            "D": "Melihatnya sebagai peluang baru"
        },
        "tipe": "JP",
        "skor": { "A": "J", "B": "P", "C": "F", "D": "P" }
    },
    {
        "no": 17,
        "teks": "Dalam memilih karir, prioritas utama Anda:",
        "opsi": {
            "A": "Stabilitas dan keamanan finansial",
            "B": "Kesempatan berkembang dan belajar",
            "C": "Dampak sosial dan membantu orang",
            "D": "Kebebasan dan ekspresi diri"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "N", "C": "F", "D": "P" }
    },
    {
        "no": 18,
        "teks": "Ketika berdebat, Anda:",
        "opsi": {
            "A": "Berpegang pada fakta dan logika",
            "B": "Mencari titik temu yang memuaskan semua",
            "C": "Mempertahankan prinsip dengan tegas",
            "D": "Mengeksplorasi berbagai perspektif"
        },
        "tipe": "TF",
        "skor": { "A": "T", "B": "F", "C": "T", "D": "N" }
    },
    {
        "no": 19,
        "teks": "Mengenai rutinitas, Anda:",
        "opsi": {
            "A": "Nyaman dengan rutinitas yang terstruktur",
            "B": "Membutuhkan variasi dan kebaruan",
            "C": "Menyesuaikan tergantung situasi",
            "D": "Menciptakan pola baru secara teratur"
        },
        "tipe": "JP",
        "skor": { "A": "J", "B": "P", "C": "P", "D": "J" }
    },
    {
        "no": 20,
        "teks": "Ketika memberikan hadiah, Anda:",
        "opsi": {
            "A": "Memilih sesuatu yang praktis dan berguna",
            "B": "Mencari hadiah yang penuh makna personal",
            "C": "Memberi pengalaman bukan barang fisik",
            "D": "Membuat hadiah custom yang unik"
        },
        "tipe": "SN",
        "skor": { "A": "S", "B": "F", "C": "N", "D": "N" }
    }
]

// Database deskripsi tipe MBTI
const mbtiTypes = {
    "ISTJ": {
        "nama": "The Inspector",
        "deskripsi": "Anda adalah orang yang praktis dan faktual, bertanggung jawab dan terorganisir. Anda menghargai tradisi dan setia pada tanggung jawab. Anda sangat dapat diandalkan dan selalu menyelesaikan apa yang Anda mulai.",
        "karir": "Akuntan, Manajer, Hakim, Administrator, Pustakawan"
    },
    "ISFJ": {
        "nama": "The Protector",
        "deskripsi": "Anda hangat, penuh perhatian, dan bertanggung jawab. Anda sangat teliti dan berdedikasi pada kewajiban. Anda memiliki ingatan yang kuat untuk detail yang penting bagi orang lain dan selalu berusaha menciptakan lingkungan yang harmonis.",
        "karir": "Perawat, Guru, Pustakawan, Konselor, Administratif"
    },
    "INFJ": {
        "nama": "The Counselor",
        "deskripsi": "Anda visioner, idealis, dan terinspirasi. Memiliki integritas tinggi dan keinginan kuat untuk membantu orang lain. Anda mencari makna dalam hubungan, ide, dan peristiwa, dengan kemampuan memahami orang yang mendalam.",
        "karir": "Psikolog, Penulis, Konsultan, Guru, Pekerja Sosial"
    },
    "INTJ": {
        "nama": "The Mastermind",
        "deskripsi": "Anda analitis, strategis, dan mandiri. Memiliki kemampuan memahami teori kompleks dan menerapkannya secara praktis. Anda visioner dengan pikiran yang selalu mencari kemungkinan-kemungkinan baru dan solusi inovatif.",
        "karir": "Ilmuwan, Insinyur, Pengusaha, Profesor, Perencana Strategis"
    },
    "ISTP": {
        "nama": "The Craftsman",
        "deskripsi": "Anda tenang, fleksibel, dan logis. Ahli dalam memecahkan masalah praktis dan beradaptasi dengan lingkungan. Anda menyukai kebebasan untuk bereksplorasi dengan tangan dan mata, memahami cara kerja segala sesuatu.",
        "karir": "Polisi, Programmer, Atlit, Teknisi, Pilot"
    },
    "ISFP": {
        "nama": "The Composer",
        "deskripsi": "Anda ramah, sensitif, dan rendah hati. Menikmati momen saat ini dan menghargai kebebasan pribadi. Anda memiliki apresiasi tinggi terhadap keindahan dan seni, dengan pendekatan hidup yang fleksibel dan spontan.",
        "karir": "Seniman, Desainer, Musisi, Pekerja Anak, Fisioterapis"
    },
    "INFP": {
        "nama": "The Healer",
        "deskripsi": "Anda idealis, kreatif, dan berprinsip. Memiliki hasrat kuat untuk membantu orang lain dan mencari makna hidup. Anda sangat setia pada nilai-nilai pribadi dan orang-orang yang penting bagi Anda.",
        "karir": "Penulis, Psikolog, Konselor, Desainer Grafis, Pustakawan"
    },
    "INTP": {
        "nama": "The Architect",
        "deskripsi": "Anda inovatif, teoretis, dan mandiri. Terampil dalam menemukan solusi kreatif untuk masalah kompleks. Anda sangat logis dan analitis, dengan rasa ingin tahu yang tak terpuaskan terhadap dunia ide.",
        "karir": "Ilmuwan, Filsuf, Profesor, Programmer, Ahli Matematika"
    },
    "ESTP": {
        "nama": "The Dynamo",
        "deskripsi": "Anda energik, pandai bergaul, dan spontan. Ahli dalam berpikir cepat dan memengaruhi orang lain. Anda fleksibel dan toleran, mengambil pendekatan pragmatis yang berfokus pada hasil langsung.",
        "karir": "Marketing, Sales, Pengusaha, Atlet, Petugas Pemadam Kebakaran"
    },
    "ESFP": {
        "nama": "The Performer",
        "deskripsi": "Anda ramah, antusias, dan menyenangkan. Pandai membuat suasana hidup dan menikmati interaksi sosial. Anda spontan dan suka bermain, membawa pendekatan menyenangkan ke semua yang Anda lakukan.",
        "karir": "Hiburan, Event Planner, Humas, Perhotelan, Desainer Mode"
    },
    "ENFP": {
        "nama": "The Champion",
        "deskripsi": "Anda kreatif, bersemangat, dan imajinatif. Pandai memahami orang dan memotivasi mereka. Anda melihat kehidupan penuh dengan kemungkinan dan membuat koneksi antara peristiwa dan informasi dengan sangat mudah.",
        "karir": "Penulis, Konsultan, Psikolog, Jurnalis, Hubungan Masyarakat"
    },
    "ENTP": {
        "nama": "The Visionary",
        "deskripsi": "Anda cerdas, kritis, dan inovatif. Menikmati perdebatan intelektual dan memecahkan masalah menantang. Anda sangat imajinatif dan berpikiran strategis, selalu mencari solusi baru untuk masalah yang menarik.",
        "karir": "Pengacara, Wirausaha, Ilmuwan, Insinyur, Perencana Strategis"
    },
    "ESTJ": {
        "nama": "The Supervisor",
        "deskripsi": "Anda praktis, tegas, dan terorganisir. Pandai mengelola orang dan proyek untuk hasil efisien. Anda menghargai tradisi dan aturan, dan mengharapkan hal yang sama dari orang lain.",
        "karir": "Manajer, Administrator, Tentara, Hakim, Guru"
    },
    "ESFJ": {
        "nama": "The Provider",
        "deskripsi": "Anda hangat, bertanggung jawab, dan populer. Ahli dalam menciptakan harmoni dan bekerja sama dalam tim. Anda sangat sadar akan kebutuhan orang lain dan berusaha keras untuk memenuhinya.",
        "karir": "Guru, Perawat, Manajemen, Pekerja Sosial, Administratif"
    },
    "ENFJ": {
        "nama": "The Teacher",
        "deskripsi": "Anda karismatik, persuasif, dan peduli. Pandai membimbing orang untuk mencapai potensi terbaik mereka. Anda memiliki kemampuan alami untuk melihat potensi dalam diri orang lain dan ingin membantu mereka mencapainya.",
        "karir": "Konsultan, HRD, Pelatih, Guru, Psikolog"
    },
    "ENTJ": {
        "nama": "The Commander",
        "deskripsi": "Anda tegas, strategis, dan pemimpin alami. Pandai mengorganisir sistem dan mencapai tujuan jangka panjang. Anda cepat melihat ketidakefisienan dan mengembangkan solusi yang komprehensif.",
        "karir": "CEO, Konsultan, Pengacara, Manajer Proyek, Insinyur"
    }
};

// Variabel state aplikasi
let currentQuestion = 0;
let answers = [];
let userName = "";
let shuffledQuestions = [];

// DOM Elements
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const questionDisplay = document.getElementById('question-display');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const startButton = document.getElementById('start-test');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const restartButton = document.getElementById('restart-btn');
const nameInput = document.getElementById('nama');
const resultName = document.getElementById('result-name');
const mbtiType = document.getElementById('mbti-type');
const typeName = document.getElementById('type-name');
const typeDescription = document.getElementById('type-description');
const typeCareer = document.getElementById('type-career');
const dimensionScores = document.getElementById('dimension-scores');

// Event Listeners
startButton.addEventListener('click', startTest);
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
restartButton.addEventListener('click', restartTest);


function startTest() {
    if (nameInput.value.trim() === "") {
        alert("Silakan masukkan nama Anda terlebih dahulu");
        return;
    }

    userName = nameInput.value.trim();

    // Acak urutan pertanyaan
    shuffledQuestions = shuffleArray([...questions]);

    // Reset state aplikasi
    currentQuestion = 0;
    answers = [];

    switchScreen(introScreen, testScreen);
    showQuestion(currentQuestion);
}

// Fungsi untuk beralih antar layar
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    setTimeout(() => {
        toScreen.classList.add('active');
    }, 300);
}

// Fungsi untuk menampilkan pertanyaan
function showQuestion(index) {
    if (index >= questions.length) {
        showLoadingScreen();
        return;
    }

    const question = shuffledQuestions[index];
    const progress = ((index) / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${index}/${shuffledQuestions.length}`;
    let questionHTML = `
                <div class="question-container">
                    <div class="question-number">Pertanyaan ${index + 1} dari ${shuffledQuestions.length}</div>
                    <div class="question-text">${question.teks}</div>
                    <div class="options-container">
            `;

    if (question.gambar) {
        const randomImageId = Math.floor(Math.random() * 1000) + 1;
        questionHTML += `
            <div class="d-flex justify-content-center my-4">
                <img src="https://picsum.photos/id/${randomImageId}/600/300" 
                     alt="Gambar ilustrasi" 
                     class="img-fluid rounded"
                     style="border: 3px solid var(--primary); box-shadow: 4px 4px 0 var(--secondary); max-height: 300px;">
            </div>
        `;
    }
    for (const [key, value] of Object.entries(question.opsi)) {
        const isSelected = answers[index] === key;
        questionHTML += `
                    <div class="option-btn ${isSelected ? 'selected' : ''}" data-option="${key}">
                        <div class="option-letter">${key}</div>
                        <div class="option-text">${value}</div>
                    </div>
                `;
    }
    questionHTML += `</div></div>`;
    questionDisplay.innerHTML = questionHTML;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            selectOption(this, index);
        });
    });
    prevButton.disabled = index === 0;
    nextButton.disabled = !answers[index];
}

function selectOption(element, index) {
    // Hapus seleksi sebelumnya
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Tambahkan seleksi pada opsi yang dipilih
    element.classList.add('selected');

    // Simpan jawaban
    answers[index] = element.getAttribute('data-option');

    // PERUBAHAN PENTING: Aktifkan tombol berikutnya setelah memilih jawaban
    nextButton.disabled = false;
}

// Fungsi untuk pindah ke pertanyaan berikutnya
function nextQuestion() {
    if (!answers[currentQuestion]) {
        alert("Silakan pilih jawaban terlebih dahulu!");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showLoadingScreen();
    }
}

// Fungsi untuk kembali ke pertanyaan sebelumnya
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Fungsi untuk menampilkan layar loading
function showLoadingScreen() {
    switchScreen(testScreen, loadingScreen);

    // Simulasikan proses perhitungan
    setTimeout(() => {
        showResults();
    }, 2500);
}

// Fungsi untuk menghitung hasil
function calculateResults() {
    let scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    // Hitung skor berdasarkan jawaban
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (answer) {
            const question = questions[i];
            const scoreValue = question.skor[answer];
            scores[scoreValue] += 1;
        }
    }

    // Tentukan tipe MBTI
    const type =
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');

    return {
        type: type,
        scores: scores,
        details: mbtiTypes[type]
    };
}

// Fungsi untuk menampilkan hasil
function showResults() {
    const results = calculateResults();

    // Tampilkan data pengguna
    resultName.textContent = userName;
    mbtiType.textContent = results.type;
    typeName.textContent = results.details.nama;
    typeDescription.textContent = results.details.deskripsi;
    typeCareer.textContent = results.details.karir;

    // Tampilkan skor dimensi
    dimensionScores.innerHTML = '';

    const dimensions = [
        { name: "Extraversion", key: "E", opposite: "I", oppositeName: "Introversion" },
        { name: "Sensing", key: "S", opposite: "N", oppositeName: "Intuition" },
        { name: "Thinking", key: "T", opposite: "F", oppositeName: "Feeling" },
        { name: "Judging", key: "J", opposite: "P", oppositeName: "Perceiving" }
    ];

    dimensions.forEach(dim => {
        const total = results.scores[dim.key] + results.scores[dim.opposite];
        const percentage = Math.round((results.scores[dim.key] / total) * 100);

        const dimensionHTML = `
                    <div class="dimension-bar">
                        <div class="dimension-label">${dim.oppositeName}</div>
                        <div class="dimension-meter">
                            <div class="dimension-fill" style="width: ${100 - percentage}%; background-color: var(--pink);"></div>
                        </div>
                        <div class="dimension-label">${dim.name}</div>
                    </div>
                    <div style="text-align: center; margin: 5px 0 20px; font-weight: bold;">
                        ${dim.name}: ${results.scores[dim.key]} | ${dim.oppositeName}: ${results.scores[dim.opposite]}
                    </div>
                `;

        dimensionScores.innerHTML += dimensionHTML;
    });

    // Tampilkan layar hasil
    switchScreen(loadingScreen, resultScreen);
}

// Fungsi untuk mengulang tes
function restartTest() {
    currentQuestion = 0;
    answers = [];
    switchScreen(resultScreen, introScreen);
}