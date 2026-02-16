import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <main
      style={{
        backgroundColor: isDark ? "#030712" : "#ffffff",
        color: isDark ? "#f3f4f6" : "#111827",
      }}
      className="min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4" style={{ color: isDark ? "#ffffff" : "#111827" }}>ACM Hacettepe Hakkında</h1>
        <p className="text-lg" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
          ACM Hacettepe Öğrenci Topluluğu 2010 yılında kurulmuş olup ACM'in Türkiye'de bulunan 13 öğrenci kolundan biridir. Topluluğumuz kurulduğu günden bu yana her geçen gün artan üye sayısıyla Hacettepe Üniversitesinin en büyük topluluklarından biri haline gelmiştir.
          ACM Hacettepe Öğrenci Topluluğu olarak amacımız, teknik ve sosyal alanda yapılan etkinliklerle öğrencilerimizi her iki alanda da bilgi sahibi olmuş, gelişmiş bireyler haline getirmektir. Topluluğumuzun en önemli görevi; öğrencilerimizin meslek hayatı ile ilgili sorularına cevap bulabilecekleri seminerler düzenlemek, iş hayatlarında onlara yardımcı olacak dersler ve seminerlerle teknik bilgiler vermek, bu bilgileri teknik geziler ile desteklemek ve kendilerini geliştirebilecekleri projeleri gerçekleştirebilecekleri bir ortam sunmaktır.
          Bir bilişim teknolojileri kuruluşu olan ACM'in vermiş olduğu yol haritasıyla ilerleyen topluluğumuzun tüm faaliyetleri üniversite öğrencileri tarafından gerçekleştirilmekte ve üniversitemizdeki birçok bölüme hitap etmektedir.
        </p>
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: isDark ? "#ffffff" : "#111827" }}>Ar-Ge Birimi Hakkında</h2>
          <p className="text-lg" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
            Ar-Ge birimi, topluluğumuzun bilişim sektöründe yenilikçi projeler geliştirerek öğrencilerin teknik becerilerini ve problem çözme yeteneklerini geliştirmeyi hedefleyen alt birimidir. Teknik bilgi ve ilgi sahibi insanları bir araya getirerek teknik yeteneklerini geliştirmelerine yardımcı olan, mentorluk ve takım çalışması fırsatları sunan; projeler geliştirmek için iş birliği yapabilecekleri profesyonel bir ortam sağlamaktadır. Çalışmalarını yapay zeka, mobil, oyun, web ve robotik olmak üzere beş ana alanda sürdürmekte; Teknofest ve Google Solution Challenge gibi proje yarışmalarına katılmaktadır. Bu yarışmaların yanı sıra özgün fikirlere dayalı projeler de geliştirilmekte ve bunların bazıları, Hacettepe Teknokent Ön Kuluçka'sına yapılan başvurular sonucunda seçilerek geliştirilmeye devam etmektedir.
          </p>
        </section>
      </div>
    </main>
  );
}
