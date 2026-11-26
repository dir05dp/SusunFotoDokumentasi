const tableBody = document.getElementById('tableBody');

// DATABASE VLOOKUP (NIP & JABATAN)
const pegawaiData = {
    "Malik, ST., MM": { "nip": "197012312007011017", "jabatan": "Kepala Satuan Kerja PJN Wil. III SulSel" },
    "Nixon Soplantila, SE": { "nip": "197006152008121001", "jabatan": "Pejabat Penandatanganan SPM" },
    "Wahyuni, SE": { "nip": "197605152014102001", "jabatan": "Bendahara Pengeluaran" },
    "Suarni Awing, S.T., M.T": { "nip": "197701152009112001", "jabatan": "Asisten Keuangan, Umum dan Pelaporan" },
    "Muhammad Ridha, S.E": { "nip": "198307132014101001", "jabatan": "Asisten Pengelolaan BMN" },
    "Inayah, ST": { "nip": "199504132018022003", "jabatan": "Asisten Pelaksanaan & Pengawasan" },
    "Hendra, ST": { "nip": "198701152010121004", "jabatan": "Asisten Program, Rencana dan Adm. Teknis" },
    "Yuni Harjani H, ST. MT": { "nip": "197106071999032008", "jabatan": "Petugas Data Teknis Jalan dan Jembatan" },
    "Yumi Yurinda, SE": { "nip": "197905172007012020", "jabatan": "Pengelola Barang Milik Negara" },
    "Sitti Khadijah Niode, SE": { "nip": "197403192008122001", "jabatan": "Petugas Pembukuan dan Pembayaran" },
    "Henny Taro, S. Sos": { "nip": "197808202009112001", "jabatan": "Petugas e-mon, SIPP, Lakip" },
    "Sherly Rauf, S.Sos": { "nip": "197206162014122001", "jabatan": "Petugas Administrasi, Umum, Hukum & Rumah Tangga" },
    "Andi Baso Asrul Djamil": { "nip": "198005132014121003", "jabatan": "Petugas Pengawasan Desain Teknik" },
    "Solihin, AR": { "nip": "198101042014101001", "jabatan": "Petugas Unit Akuntansi KPA" },
    "Aqieraah Islamsyah Razak, SH": { "nip": "199104022025212049", "jabatan": "Analis Hukum Ahli Pertama" },
    "Enysiswari Yusuf, ST": { "nip": "198106042025212028", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Muhammad Takdir, S.Kom": { "nip": "198610152025211052", "jabatan": "Pranata Komputer Ahli Pertama" },
    "Iswahyudi Kasim DM, SE": { "nip": "197209062025211021", "jabatan": "Penata Layanan Operasional" },
    "Rachmatia, SE": { "nip": "197808042025212013", "jabatan": "Penata Layanan Operasional" },
    "Taufik Hariono, SE": { "nip": "198107292025211037", "jabatan": "Penata Layanan Operasional" },
    "Ahmad Mahfud, S.Kom": { "nip": "197712042025211017", "jabatan": "Penata Layanan Operasional" },
    "Jeanny Imelda Pattikayhatu, S.Si": { "nip": "197506282025212006", "jabatan": "Penata Layanan Operasional" },
    "Herman, SE": { "nip": "197806082025211028", "jabatan": "Penata Layanan Operasional" },
    "Roslinda Baso, S.E": { "nip": "197901282025212013", "jabatan": "Penata Layanan Operasional" },
    "Murdianto, A.Md": { "nip": "197609202025211018", "jabatan": "Pengelola Layanan Operasional" },
    "Riko": { "nip": "197912122025211033", "jabatan": "Operator Layanan Operasional" },
    "Sulham": { "nip": "198009022025211022", "jabatan": "Operator Layanan Operasional" },
    "Harmes": { "nip": "198106152025211045", "jabatan": "Pengadministrasi Perkantoran" },
    "Akbar": { "nip": "197408062025211025", "jabatan": "Pengadministrasi Perkantoran" },
    "Riskianto": { "nip": "199608312025211027", "jabatan": "Operator Layanan Operasional" },
    "Muhammad Basir. T": { "nip": "197709102025211034", "jabatan": "Operator Layanan Operasional" },
    "Irwan AR, ST, MT": { "nip": "198301022010121001", "jabatan": "Pejabat Pembuat Komitmen 3.1 Prov. SulSel" },
    "Eri Roki Natanael, S.T.": { "nip": "199608252022031009", "jabatan": "Kepala Urusan Tata Usaha" },
    "Saharullah, ST": { "nip": "197604082008121001", "jabatan": "Pelaksana (Koordinator Pengawas Lapangan)" },
    "ST. Salmah, SS": { "nip": "196810202007012001", "jabatan": "Kepala Urusan Teknik" },
    "Hujerah, S.Sos": { "nip": "196811182008122001", "jabatan": "Petugas Sub. Urusan Keuangan" },
    "Marliah": { "nip": "197405052009112001", "jabatan": "Petugas Sub Urusan Administrasi Teknik & Pelaporan" },
    "Ikhwan": { "nip": "197204152014121004", "jabatan": "Pengawas Lapangan" },
    "Sukmawaty Sahabuddin": { "nip": "197211092009112001", "jabatan": "Petugas Sub Urusan Umum dan Gudang" },
    "Rudy Hendra Wijaya, ST": { "nip": "197310192025211012", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Muhammad Rusdy, ST": { "nip": "198203032025211047", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Charles Niku, ST": { "nip": "198303292025211037", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Andi Sarimustika Muin, ST": { "nip": "199106072025212046", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "M. Suratman M, A.Md.": { "nip": "198108122024211003", "jabatan": "Penata Laksana Jalan dan Jembatan Terampil" },
    "Jeson Ruga, A.Md": { "nip": "198708112025211037", "jabatan": "Penata Laksana Jalan Dan Jembatan Terampil" },
    "Irfan Afandy, SE": { "nip": "197911062025211018", "jabatan": "Penata Layanan Operasional" },
    "Seniati Allo Samuel, SE": { "nip": "197706182025212016", "jabatan": "Penata Layanan Operasional" },
    "Nur Suhastini MS, SE": { "nip": "199112092025212046", "jabatan": "Penata Layanan Operasional" },
    "Febrianty Parastuti, SE": { "nip": "199802232025212025", "jabatan": "Penata Layanan Operasional" },
    "Muhammad Rio Andhika Noor": { "nip": "198206212025211026", "jabatan": "Operator Layanan Operasional" },
    "Subair": { "nip": "197103152025211010", "jabatan": "Operator Layanan Operasional" },
    "Andi Pamil": { "nip": "197804302025211009", "jabatan": "Operator Layanan Operasional" },
    "Roby Sumarlam": { "nip": "198006092025211028", "jabatan": "Operator Layanan Operasional" },
    "Asdar M": { "nip": "198109262025211030", "jabatan": "Operator Layanan Operasional" },
    "Ronald Haris": { "nip": "198704292025211034", "jabatan": "Operator Layanan Operasional" },
    "Ari Wibowo": { "nip": "199009022025211030", "jabatan": "Operator Layanan Operasional" },
    "Khairul Arief": { "nip": "198807122025211065", "jabatan": "Pengadministrasi Perkantoran" },
    "Muhtar": { "nip": "198508092025211043", "jabatan": "Pengelola Umum Operasional" },
    "Anastasia Mani Sarungallo, ST, MT": { "nip": "199110102015032006", "jabatan": "Asisten Program, Rencana dan Adm. Teknis" },
    "Tirana Novitri S, S.T., M.Eng.": { "nip": "199511062020122007", "jabatan": "Kepala Urusan Tata Usaha" },
    "Kamal Makkulau, ST": { "nip": "196904102007011001", "jabatan": "Pelaksana (Koordinator Pengawas Lapangan)" },
    "Andi Nilawati, SE": { "nip": "197606192009112001", "jabatan": "Petugas Sub Urusan Keuangan" },
    "Lukman Hakim": { "nip": "196905212009111001", "jabatan": "Pengawas Lapangan" },
    "Chalifahtuddin Sabri": { "nip": "197103242007011002", "jabatan": "Pengawas Lapangan" },
    "Iskandar": { "nip": "197508092009111001", "jabatan": "Pengawas Lapangan" },
    "Ilham": { "nip": "196812042014121003", "jabatan": "Pengawas Lapangan" },
    "Sarman, ST": { "nip": "197808092025211011", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Andi Wahyudi, ST": { "nip": "198006052025211043", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Novita Sari, SE": { "nip": "198411102025212038", "jabatan": "Analis Sumber Daya Manusia Aparatur Ahli Pertama" },
    "Nurul Indra Sujabdi, ST": { "nip": "199107232025212043", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Mulia Mustamin, ST": { "nip": "198107262025211026", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Hilda Rukmana Arsyad, ST": { "nip": "198701272025212040", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Rizwan Setyawan, S. Kom": { "nip": "199112292025211039", "jabatan": "Penata Layanan Operasional" },
    "Syahruddin, SE": { "nip": "198808162025211049", "jabatan": "Penata Layanan Operasional" },
    "Hasim": { "nip": "198006022025211034", "jabatan": "Operator Layanan Operasional" },
    "Harianto": { "nip": "198202032025211026", "jabatan": "Operator Layanan Operasional" },
    "Sardi": { "nip": "198307072025211044", "jabatan": "Operator Layanan Operasional" },
    "Amrullah": { "nip": "198508282025211039", "jabatan": "Operator Layanan Operasional" },
    "Zubair": { "nip": "198602252025211031", "jabatan": "Operator Layanan Operasional" },
    "Musyawwir": { "nip": "199409102025211046", "jabatan": "Operator Layanan Operasional" },
    "Azis": { "nip": "197512012025211018", "jabatan": "Operator Layanan Operasional" },
    "Hasbudi": { "nip": "197906062025211050", "jabatan": "Operator Layanan Operasional" },
    "Jaharuddin": { "nip": "197701122025211019", "jabatan": "Pengadministrasi Perkantoran" },
    "Nasrul": { "nip": "198606182025211046", "jabatan": "Pengadministrasi Perkantoran" },
    "Roslina Tahir, ST, MT": { "nip": "197710242009012001", "jabatan": "Pejabat Pembuat Komitmen 3.3 Prov. SulSel" },
    "Rusdy Hasan YP": { "nip": "198312152014121002", "jabatan": "Kepala Urusan Tata Usaha" },
    "Mursalim, ST": { "nip": "197203072007011002", "jabatan": "Pelaksana (Koordinator Pengawas Lapangan)" },
    "Jumriany Bachrun, SE": { "nip": "197310092008122001", "jabatan": "Petugas Sub Urusan Keuangan" },
    "Noerfajri, ST": { "nip": "198510272014122003", "jabatan": "Petugas Data Teknis Jalan dan Jembatan" },
    "Eddy Adriyanto Kasdjuri, S.Sos": { "nip": "196809072007011001", "jabatan": "Petugas Sub Urusan Umum dan Gudang" },
    "Maksum Sultan": { "nip": "197307232008121001", "jabatan": "Kepala Urusan Teknik" },
    "Hermin": { "nip": "197204202008122001", "jabatan": "Petugas Sub Urusan Administrasi Teknik & Pelaporan" },
    "Jennie Lefina": { "nip": "197101312008122001", "jabatan": "Petugas Sub Urusan Keuangan" },
    "Nana Ruslana Astuty Asyhab, ST": { "nip": "198201312025212029", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Iswan, SE": { "nip": "198009022025211025", "jabatan": "Penata Layanan Operasional" },
    "Andi Suri Enryani, SE": { "nip": "198012302025212019", "jabatan": "Penata Layanan Operasional" },
    "Hamka Samsuddin, S.Sos": { "nip": "198307152025211046", "jabatan": "Penata Layanan Operasional" },
    "Juslan, S.Sos": { "nip": "199201012025211074", "jabatan": "Penata Layanan Operasional" },
    "Muhlisyam, S.Sos": { "nip": "199204272025211041", "jabatan": "Penata Layanan Operasional" },
    "Muhammad Dahlan A, SE": { "nip": "196910152025211017", "jabatan": "Penata Layanan Operasional" },
    "Wahyudi Djalil": { "nip": "197810292025211012", "jabatan": "Penata Laksana Jalan Dan Jembatan Pemula" },
    "Habibi Alfian": { "nip": "198805142025211038", "jabatan": "Penata Laksana Jalan Dan Jembatan Pemula" },
    "Laupe": { "nip": "198002102025211032", "jabatan": "Operator Layanan Operasional" },
    "Iwan Kurniawan": { "nip": "198212062025211031", "jabatan": "Operator Layanan Operasional" },
    "Ardiansyah": { "nip": "198305252025211042", "jabatan": "Operator Layanan Operasional" },
    "Muhammad Fajrin": { "nip": "198605042025211048", "jabatan": "Operator Layanan Operasional" },
    "Budi Darman": { "nip": "198801212025211037", "jabatan": "Pengadministrasi Perkantoran" },
    "Hulki": { "nip": "199504192025211037", "jabatan": "Operator Layanan Operasional" },
    "Wira Pratama": { "nip": "199507052025211052", "jabatan": "Operator Layanan Operasional" },
    "Muhammad Fadli Alkausar": { "nip": "199004032025211036", "jabatan": "Pengadministrasi Perkantoran" },
    "Haris": { "nip": "198406032025211031", "jabatan": "Pengelola Umum Operasional" },
    "Muhammad Alamsyah Irianto Kasim, ST": { "nip": "198602052010121002", "jabatan": "Pejabat Pembuat Komitmen 3.4 Prov. SulSel" },
    "Zulheiril Suatrimin, ST": { "nip": "198103022014121002", "jabatan": "Kepala Urusan Tata Usaha" },
    "Harman Hastuti": { "nip": "198410232014121002", "jabatan": "Pelaksana (Koordinator Pengawas Lapangan)" },
    "Asniwati, S.Sos": { "nip": "197007112007012003", "jabatan": "Petugas Sub Urusan Keuangan" },
    "Andi Sismawati, SE": { "nip": "197702092009112001", "jabatan": "Petugas Sub Urusan Keuangan" },
    "A. Nurmayanti. S,Pd": { "nip": "197003052008122003", "jabatan": "Petugas Sub Urusan Administrasi Teknik & Pelaporan" },
    "Sahtiar": { "nip": "197310092009111001", "jabatan": "Pengawas Lapangan" },
    "Maswati": { "nip": "197012312007012017", "jabatan": "Petugas Sub Urusan Administrasi Teknik & Pelaporan" },
    "Sarmawati": { "nip": "197103012008122001", "jabatan": "Petugas Sub Urusan Administrasi Teknik & Pelaporan" },
    "Agustang": { "nip": "197508252009111001", "jabatan": "Pengawas Lapangan" },
    "Samsualan": { "nip": "197001222014121001", "jabatan": "Pengawas Lapangan" },
    "Jumady": { "nip": "197312212014121003", "jabatan": "Pengawas Lapangan" },
    "Muhammad Saleh": { "nip": "196907012014121001", "jabatan": "Pembantu Pelaksana Pemeliharaan" },
    "Kasmawati": { "nip": "197206202014122002", "jabatan": "Petugas Sub Urusan Umum & Gudang" },
    "Sutarni": { "nip": "197206012014122003", "jabatan": "Petugas Sub Urusan Umum & Gudang" },
    "Andi Nurhaedah, ST": { "nip": "197603022025212014", "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama" },
    "Rusdianto, S.Sos": { "nip": "199008102025211055", "jabatan": "Analis Sumber Daya Manusia Aparatur Ahli Pertama" },
    "Zulkifli Syam, A.Md.": { "nip": "199309042025211034", "jabatan": "Arsiparis Terampil" },
    "Aidil Akbar": { "nip": "198406292025211027", "jabatan": "Penata Laksana Jalan Dan Jembatan Pemula" },
    "Madeamin": { "nip": "197006052025211017", "jabatan": "Operator Layanan Operasional" },
    "Hamdani Anwar": { "nip": "197006252025211013", "jabatan": "Operator Layanan Operasional" },
    "Nustan": { "nip": "197804122025211030", "jabatan": "Operator Layanan Operasional" },
    "Jamal": { "nip": "198204062025211052", "jabatan": "Operator Layanan Operasional" },
    "Khaeruddin": { "nip": "198504052025211053", "jabatan": "Operator Layanan Operasional" },
    "Muslimin": { "nip": "198508182025211040", "jabatan": "Operator Layanan Operasional" },
    "Nasrun": { "nip": "199211142025211033", "jabatan": "Operator Layanan Operasional" },
    "Muh. Ridwanullah": { "nip": "199704112025211018", "jabatan": "Operator Layanan Operasional" },
    "Agus Nandir": { "nip": "199508092025211038", "jabatan": "Pengadministrasi Perkantoran" },
    "M. Yusuf": { "nip": "197501032025211011", "jabatan": "Operator Layanan Operasional" }
};

// Daftar Dropdown 
const optionsHTML = `
    <option value="">-- Pilih Pegawai --</option>
    <optgroup label="--- ASN SATKER PJN WIL. III PROV. SUL-SEL ---">
        <option value="Malik, ST., MM">Malik, ST., MM</option>
        <option value="Nixon Soplantila, SE">Nixon Soplantila, SE</option>
        <option value="Wahyuni, SE">Wahyuni, SE</option>
        <option value="Suarni Awing, S.T., M.T">Suarni Awing, S.T., M.T</option>
        <option value="Muhammad Ridha, S.E">Muhammad Ridha, S.E</option>
        <option value="Inayah, ST">Inayah, ST</option>
        <option value="Hendra, ST">Hendra, ST</option>
        <option value="Yuni Harjani H, ST. MT">Yuni Harjani H, ST. MT</option>
        <option value="Yumi Yurinda, SE">Yumi Yurinda, SE</option>
        <option value="Sitti Khadijah Niode, SE">Sitti Khadijah Niode, SE</option>
        <option value="Henny Taro, S. Sos">Henny Taro, S. Sos</option>
        <option value="Sherly Rauf, S.Sos">Sherly Rauf, S.Sos</option>
        <option value="Andi Baso Asrul Djamil">Andi Baso Asrul Djamil</option>
        <option value="Solihin, AR">Solihin, AR</option>
        <option value="Aqieraah Islamsyah Razak, SH">Aqieraah Islamsyah Razak, SH</option>
        <option value="Enysiswari Yusuf, ST">Enysiswari Yusuf, ST</option>
        <option value="Muhammad Takdir, S.Kom">Muhammad Takdir, S.Kom</option>
        <option value="Iswahyudi Kasim DM, SE">Iswahyudi Kasim DM, SE</option>
        <option value="Rachmatia, SE">Rachmatia, SE</option>
        <option value="Taufik Hariono, SE">Taufik Hariono, SE</option>
        <option value="Ahmad Mahfud, S.Kom">Ahmad Mahfud, S.Kom</option>
        <option value="Jeanny Imelda Pattikayhatu, S.Si">Jeanny Imelda Pattikayhatu, S.Si</option>
        <option value="Herman, SE">Herman, SE</option>
        <option value="Roslinda Baso, S.E">Roslinda Baso, S.E</option>
        <option value="Murdianto, A.Md">Murdianto, A.Md</option>
        <option value="Riko">Riko</option>
        <option value="Sulham">Sulham</option>
        <option value="Harmes">Harmes</option>
        <option value="Akbar">Akbar</option>
        <option value="Riskianto">Riskianto</option>
        <option value="Muhammad Basir. T">Muhammad Basir. T</option>
    </optgroup>
    <optgroup label="--- ASN PPK 3.1 PROV. SUL-SEL ---">
        <option value="Irwan AR, ST, MT">Irwan AR, ST, MT</option>
        <option value="Eri Roki Natanael, S.T.">Eri Roki Natanael, S.T.</option>
        <option value="Saharullah, ST">Saharullah, ST</option>
        <option value="ST. Salmah, SS">ST. Salmah, SS</option>
        <option value="Hujerah, S.Sos">Hujerah, S.Sos</option>
        <option value="Marliah">Marliah</option>
        <option value="Ikhwan">Ikhwan</option>
        <option value="Sukmawaty Sahabuddin">Sukmawaty Sahabuddin</option>
        <option value="Rudy Hendra Wijaya, ST">Rudy Hendra Wijaya, ST</option>
        <option value="Muhammad Rusdy, ST">Muhammad Rusdy, ST</option>
        <option value="Charles Niku, ST">Charles Niku, ST</option>
        <option value="Andi Sarimustika Muin, ST">Andi Sarimustika Muin, ST</option>
        <option value="M. Suratman M, A.Md.">M. Suratman M, A.Md.</option>
        <option value="Jeson Ruga, A.Md">Jeson Ruga, A.Md</option>
        <option value="Irfan Afandy, SE">Irfan Afandy, SE</option>
        <option value="Seniati Allo Samuel, SE">Seniati Allo Samuel, SE</option>
        <option value="Nur Suhastini MS, SE">Nur Suhastini MS, SE</option>
        <option value="Febrianty Parastuti, SE">Febrianty Parastuti, SE</option>
        <option value="Muhammad Rio Andhika Noor">Muhammad Rio Andhika Noor</option>
        <option value="Subair">Subair</option>
        <option value="Andi Pamil">Andi Pamil</option>
        <option value="Roby Sumarlam">Roby Sumarlam</option>
        <option value="Asdar M">Asdar M</option>
        <option value="Ronald Haris">Ronald Haris</option>
        <option value="Ari Wibowo">Ari Wibowo</option>
        <option value="Khairul Arief">Khairul Arief</option>
        <option value="Muhtar">Muhtar</option>
    </optgroup>
    <optgroup label="--- ASN PPK 3.2 PROV. SUL-SEL ---">
        <option value="Anastasia Mani Sarungallo, ST, MT">Anastasia Mani Sarungallo, ST, MT</option>
        <option value="Tirana Novitri S, S.T., M.Eng.">Tirana Novitri S, S.T., M.Eng.</option>
        <option value="Kamal Makkulau, ST">Kamal Makkulau, ST</option>
        <option value="Andi Nilawati, SE">Andi Nilawati, SE</option>
        <option value="Lukman Hakim">Lukman Hakim</option>
        <option value="Chalifahtuddin Sabri">Chalifahtuddin Sabri</option>
        <option value="Iskandar">Iskandar</option>
        <option value="Ilham">Ilham</option>
        <option value="Sarman, ST">Sarman, ST</option>
        <option value="Andi Wahyudi, ST">Andi Wahyudi, ST</option>
        <option value="Novita Sari, SE">Novita Sari, SE</option>
        <option value="Nurul Indra Sujabdi, ST">Nurul Indra Sujabdi, ST</option>
        <option value="Mulia Mustamin, ST">Mulia Mustamin, ST</option>
        <option value="Hilda Rukmana Arsyad, ST">Hilda Rukmana Arsyad, ST</option>
        <option value="Rizwan Setyawan, S. Kom">Rizwan Setyawan, S. Kom</option>
        <option value="Syahruddin, SE">Syahruddin, SE</option>
        <option value="Hasim">Hasim</option>
        <option value="Harianto">Harianto</option>
        <option value="Sardi">Sardi</option>
        <option value="Amrullah">Amrullah</option>
        <option value="Zubair">Zubair</option>
        <option value="Musyawwir">Musyawwir</option>
        <option value="Azis">Azis</option>
        <option value="Hasbudi">Hasbudi</option>
        <option value="Jaharuddin">Jaharuddin</option>
        <option value="Nasrul">Nasrul</option>
    </optgroup>
    <optgroup label="--- ASN PPK 3.3 PROV. SUL-SEL ---">
        <option value="Roslina Tahir, ST, MT">Roslina Tahir, ST, MT</option>
        <option value="Rusdy Hasan YP">Rusdy Hasan YP</option>
        <option value="Mursalim, ST">Mursalim, ST</option>
        <option value="Jumriany Bachrun, SE">Jumriany Bachrun, SE</option>
        <option value="Noerfajri, ST">Noerfajri, ST</option>
        <option value="Eddy Adriyanto Kasdjuri, S.Sos">Eddy Adriyanto Kasdjuri, S.Sos</option>
        <option value="Maksum Sultan">Maksum Sultan</option>
        <option value="Hermin">Hermin</option>
        <option value="Jennie Lefina">Jennie Lefina</option>
        <option value="Nana Ruslana Astuty Asyhab, ST">Nana Ruslana Astuty Asyhab, ST</option>
        <option value="Iswan, SE">Iswan, SE</option>
        <option value="Andi Suri Enryani, SE">Andi Suri Enryani, SE</option>
        <option value="Hamka Samsuddin, S.Sos">Hamka Samsuddin, S.Sos</option>
        <option value="Juslan, S.Sos">Juslan, S.Sos</option>
        <option value="Muhlisyam, S.Sos">Muhlisyam, S.Sos</option>
        <option value="Muhammad Dahlan A, SE">Muhammad Dahlan A, SE</option>
        <option value="Wahyudi Djalil">Wahyudi Djalil</option>
        <option value="Habibi Alfian">Habibi Alfian</option>
        <option value="Laupe">Laupe</option>
        <option value="Iwan Kurniawan">Iwan Kurniawan</option>
        <option value="Ardiansyah">Ardiansyah</option>
        <option value="Muhammad Fajrin">Muhammad Fajrin</option>
        <option value="Budi Darman">Budi Darman</option>
        <option value="Hulki">Hulki</option>
        <option value="Wira Pratama">Wira Pratama</option>
        <option value="Muhammad Fadli Alkausar">Muhammad Fadli Alkausar</option>
        <option value="Haris">Haris</option>
    </optgroup>
    <optgroup label="--- ASN PPK 3.4 PROV. SUL-SEL ---">
        <option value="Muhammad Alamsyah Irianto Kasim, ST">Muhammad Alamsyah Irianto Kasim, ST</option>
        <option value="Zulheiril Suatrimin, ST">Zulheiril Suatrimin, ST</option>
        <option value="Harman Hastuti">Harman Hastuti</option>
        <option value="Asniwati, S.Sos">Asniwati, S.Sos</option>
        <option value="Andi Sismawati, SE">Andi Sismawati, SE</option>
        <option value="A. Nurmayanti. S,Pd">A. Nurmayanti. S,Pd</option>
        <option value="Sahtiar">Sahtiar</option>
        <option value="Maswati">Maswati</option>
        <option value="Sarmawati">Sarmawati</option>
        <option value="Agustang">Agustang</option>
        <option value="Samsualan">Samsualan</option>
        <option value="Jumady">Jumady</option>
        <option value="Muhammad Saleh">Muhammad Saleh</option>
        <option value="Kasmawati">Kasmawati</option>
        <option value="Sutarni">Sutarni</option>
        <option value="Andi Nurhaedah, ST">Andi Nurhaedah, ST</option>
        <option value="Rusdianto, S.Sos">Rusdianto, S.Sos</option>
        <option value="Zulkifli Syam, A.Md.">Zulkifli Syam, A.Md.</option>
        <option value="Aidil Akbar">Aidil Akbar</option>
        <option value="Madeamin">Madeamin</option>
        <option value="Hamdani Anwar">Hamdani Anwar</option>
        <option value="Nustan">Nustan</option>
        <option value="Jamal">Jamal</option>
        <option value="Khaeruddin">Khaeruddin</option>
        <option value="Muslimin">Muslimin</option>
        <option value="Nasrun">Nasrun</option>
        <option value="Muh. Ridwanullah">Muh. Ridwanullah</option>
        <option value="Agus Nandir">Agus Nandir</option>
        <option value="M. Yusuf">M. Yusuf</option>
    </optgroup>
`;

// Fungsi Menampilkan NIP & Jabatan
function showPegawaiInfo(selectElement) {
    const parentTd = selectElement.closest('.col-select');
    const infoDiv = parentTd.querySelector('.pegawai-info');
    const printNamaDiv = parentTd.querySelector('.print-nama');
    const selectedName = selectElement.value;
    
    if (selectedName && pegawaiData[selectedName]) {
        const nip = pegawaiData[selectedName].nip;
        const jabatan = pegawaiData[selectedName].jabatan;
        
        infoDiv.innerHTML = nip + '<br>' + jabatan;
        infoDiv.style.display = 'block'; 
        printNamaDiv.innerHTML = selectedName;
    } else {
        infoDiv.innerHTML = '';
        infoDiv.style.display = 'none'; 
        printNamaDiv.innerHTML = '';
    }
}

// Template HTML per baris
function createRowHTML(index, selectValue = '', imgSrc = '') {
    let imgHTML = '';
    let textDisplay = '';
    
    if (imgSrc) {
        imgHTML = `<img src="${imgSrc}" alt="Foto">`;
        textDisplay = 'style="display: none;"'; 
    }

    return `
        <tr class="doc-row">
            <td class="col-number">
                <!-- FITUR BARU: Grup Tombol Aksi di Kiri -->
                <div class="row-actions">
                    <button class="btn-delete-row" title="Hapus Baris ini" onclick="removeSpecificRow(this)">&#10006;</button>
                    <button class="btn-insert-row" title="Sisipkan Baris Baru di Bawah" onclick="insertRowAfter(this)">&#10133;</button>
                </div>
                <span class="row-number">${index}</span>.
            </td>
            <td class="col-select">
                <select class="pegawai-select" onchange="showPegawaiInfo(this)">
                    ${optionsHTML}
                </select>
                <div class="print-nama"></div>
                <div class="pegawai-info"></div>
            </td>
            <td class="col-upload">
                <div class="upload-zone" onclick="triggerFileInput(this)" ondragover="event.preventDefault()" ondrop="handleDrop(event, this)">
                    <span class="upload-text" ${textDisplay}>+ Tarik & Lepas Foto (Drag & Drop)<br>Atau Klik Disini</span>
                    <input type="file" class="file-input" style="display: none;" accept="image/*" onchange="previewImage(this)">
                    ${imgHTML}
                </div>
            </td>
        </tr>
    `;
}

// Set nilai select dropdown
function setSelectValue(row, value) {
    const selectElement = row.querySelector('.pegawai-select');
    if(value) { 
        selectElement.value = value;
        showPegawaiInfo(selectElement); 
    }
}

// Inisialisasi awal
window.onload = () => {
    for (let i = 1; i <= 4; i++) {
        tableBody.insertAdjacentHTML('beforeend', createRowHTML(i));
    }
};

// Fungsi Tambah Baris (Di Akhir)
function addRow() {
    const currentRowCount = tableBody.querySelectorAll('tr').length;
    tableBody.insertAdjacentHTML('beforeend', createRowHTML(currentRowCount + 1));
}

// FITUR BARU: Fungsi Menyisipkan Baris di Tengah
function insertRowAfter(button) {
    const currentRow = button.closest('tr');
    // Memasukkan baris baru (indeks 0 sementara) tepat setelah baris yang tombol tambahnya diklik
    currentRow.insertAdjacentHTML('afterend', createRowHTML(0));
    // Perbarui semua nomor urut agar otomatis tersusun lagi
    updateRowNumbers();
}

// Fungsi Hapus Baris Terakhir
function removeLastRow() {
    const rows = tableBody.querySelectorAll('tr');
    if (rows.length > 0) { rows[rows.length - 1].remove(); } 
    else { alert("Tidak ada baris yang bisa dihapus."); }
    updateRowNumbers();
}

// Fungsi Hapus Baris Tertentu
function removeSpecificRow(button) {
    const row = button.closest('tr');
    row.remove();
    updateRowNumbers();
}

// Fungsi Update Nomor Urut Otomatis
function updateRowNumbers() {
    const rows = tableBody.querySelectorAll('.doc-row');
    rows.forEach((row, index) => {
        row.querySelector('.row-number').innerText = index + 1;
    });
}

function triggerFileInput(zone) {
    const fileInput = zone.querySelector('.file-input');
    fileInput.click();
}

function previewImage(input) {
    const zone = input.closest('.upload-zone');
    const file = input.files[0];
    if (file) { displayPreview(file, zone); }
}

function handleDrop(event, zone) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const input = zone.querySelector('.file-input');
    if (file && file.type.startsWith('image/')) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        displayPreview(file, zone);
    }
}

function displayPreview(file, zone) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const oldImg = zone.querySelector('img');
        if (oldImg) oldImg.remove();

        const img = document.createElement('img');
        img.src = e.target.result; 
        
        zone.querySelector('.upload-text').style.display = 'none';
        zone.appendChild(img);
    }
    reader.readAsDataURL(file);
}

function saveDataToFile() {
    const rows = tableBody.querySelectorAll('.doc-row');
    let rowData = [];

    rows.forEach(row => {
        const selectedPegawai = row.querySelector('.pegawai-select').value;
        const imgElement = row.querySelector('.upload-zone img');
        const imgSrc = imgElement ? imgElement.src : '';

        rowData.push({
            pegawai: selectedPegawai,
            image: imgSrc
        });
    });

    const dataToSave = {
        judul: document.getElementById('docTitle').innerText,
        baris: rowData
    };

    const jsonString = JSON.stringify(dataToSave);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Data_Dokumentasi.json'; 
    
    document.body.appendChild(a);
    a.click(); 
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadDataFromFile(event) {
    const file = event.target.files[0];
    if (!file) return; 

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const savedData = JSON.parse(e.target.result);
            tableBody.innerHTML = ''; 
            
            let rowsToLoad = [];

            if (Array.isArray(savedData)) {
                rowsToLoad = savedData; 
            } else {
                rowsToLoad = savedData.baris;
                if (savedData.judul) {
                    document.getElementById('docTitle').innerText = savedData.judul;
                }
            }
            
            rowsToLoad.forEach((data, index) => {
                tableBody.insertAdjacentHTML('beforeend', createRowHTML(index + 1, data.pegawai, data.image));
                const newRow = tableBody.lastElementChild;
                setSelectValue(newRow, data.pegawai);
            });
        } catch (error) {
            alert('Gagal memuat file! Pastikan file yang Anda pilih adalah file Data_Dokumentasi.json yang valid.');
        }
    };

    reader.readAsText(file);
    event.target.value = ''; 
}