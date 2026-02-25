import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <main
      className="min-h-screen py-6 sm:py-8 md:py-12"
      style={{
        backgroundColor: isDark ? "#030712" : "#ffffff",
        color: isDark ? "#f3f4f6" : "#111827",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.04)",
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center drop-shadow-lg"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
            >
              HAKKIMIZDA
            </h1>
            <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3" style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>
              Biz kimiz?
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6">
              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>ACM Nedir?</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  ACM (Association for Computing Machinery) bilgisayar mühendisliği bilimini bir araya getirmek için 1947'de kurulmuş ve gün geçtikçe büyüyerek dünya çapında tanınan bir kuruluş olmuştur. Merkezi New York şehrinde olan ACM, dünya genelinde çeşitli şubeleri, profesyonel kulüpleri, özel araştırma gruplarını ve öğrenci kollarını bünyesinde barındırmaktadır. ACM, mesleki akademik yayın ve toplantı faaliyetlerinin yanı sıra bilgisayar bilimlerinin Nobel'i sayılan Turing Ödülü'nü veren kuruluş olarak da bilinir. Dünya genelini kapsayan üyelik sistemi ile bilişim teknolojisinin çeşitli alanları ile uğraşan profesyonellere ve öğrencilere kaynak sağlamaktadır.
                </p>
              </section>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>ACM Hacettepe Hakkında</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  ACM Hacettepe Öğrenci Topluluğu 2010 yılında kurulmuş olup ACM'in Türkiye'de bulunan 13 öğrenci kolundan biridir. Topluluğumuz kurulduğu günden bu yana her geçen gün artan üye sayısıyla Hacettepe Üniversitesinin en büyük topluluklarından biri haline gelmiştir. <br />
                  ACM Hacettepe Öğrenci Topluluğu olarak amacımız, teknik ve sosyal alanda yapılan etkinliklerle öğrencilerimizi her iki alanda da bilgi sahibi olmuş, gelişmiş bireyler haline getirmektir. Topluluğumuzun en önemli görevi; öğrencilerimizin meslek hayatı ile ilgili sorularına cevap bulabilecekleri seminerler düzenlemek, iş hayatlarında onlara yardımcı olacak dersler ve seminerlerle teknik bilgiler vermek, bu bilgileri teknik geziler ile desteklemek ve kendilerini geliştirebilecekleri projeleri gerçekleştirebilecekleri bir ortam sunmaktır. <br />
                  Bir bilişim teknolojileri kuruluşu olan ACM'in vermiş olduğu yol haritasıyla ilerleyen topluluğumuzun tüm faaliyetleri üniversite öğrencileri tarafından gerçekleştirilmekte ve üniversitemizdeki birçok bölüme hitap etmektedir.
                </p>
              </section>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Ar-Ge Birimi Hakkında</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  Ar-Ge birimi, topluluğumuzun bilişim sektöründe yenilikçi projeler geliştirerek öğrencilerin teknik becerilerini ve problem çözme yeteneklerini geliştirmeyi hedefleyen alt birimidir. Teknik bilgi ve ilgi sahibi insanları bir araya getirerek teknik yeteneklerini geliştirmelerine yardımcı olan, mentorluk ve takım çalışması fırsatları sunan; projeler geliştirmek için iş birliği yapabilecekleri profesyonel bir ortam sağlamaktadır. Çalışmalarını yapay zeka, mobil, oyun, web ve robotik olmak üzere beş ana alanda sürdürmekte; Teknofest ve Google Solution Challenge gibi proje yarışmalarına katılmaktadır. Bu yarışmaların yanı sıra özgün fikirlere dayalı projeler de geliştirilmekte ve bunların bazıları, Hacettepe Teknokent Ön Kuluçka'sına yapılan başvurular sonucunda seçilerek geliştirilmeye devam edilmektedir.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
