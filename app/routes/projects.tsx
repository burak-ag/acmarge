import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Projects() {
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
              GEÇMİŞ ÇALIŞMALARIMIZ
            </h1>
            <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3" style={{ color: isDark ? "#d1d5db" : "#6b7280" }}>
              Topluluğumuzun son dönem projeleri ve başarıları
            </p>

            <section className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { n: "11", label: "Web" },
                { n: "3", label: "Mobil" },
                { n: "5", label: "Google Solution Challenge" },
                { n: "1", label: "Oyun Geliştirme" },
                { n: "1", label: "Yapay Zeka" },
                { n: "1", label: "Robotik" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 sm:gap-3 rounded-xl py-4 sm:py-6 px-3 sm:px-4 text-center"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                    border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                  }}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg"
                    style={{
                      background: isDark
                        ? "linear-gradient(135deg,#7c3aed,#8b5cf6)"
                        : "linear-gradient(135deg,#6366f1,#06b6d4)",
                      color: "#ffffff",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-xs sm:text-sm" style={{ color: isDark ? "#d1d5db" : "#374151" }}>{s.label}</div>
                </div>
              ))}
            </section>

            <div className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6">
              <article
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Teknofest Takımlarımız</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  Bu sene, önceki yıllardan gelen birikimlerimizin üstüne ekleyerek Teknofest'in çeşitli yarışma kategorilerine toplamda 12 takımımızla katılım sağladık. Katıldığımız kategoriler şunlardır:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {[
                    "Sağlıkta Yapay Zeka (2)",
                    "Ulaşımda Yapay Zeka (1)",
                    "Finansal Teknolojiler (1)",
                    "Psikolojide Teknolojik Uygulamalar (1)",
                    "Model Uydu (1)",
                    "Uçan Araba Simülasyon (1)",
                    "Eğitim Teknolojileri (1)",
                    "Doğal Dil İşleme (3)",
                    "Travel Hackathon (2)",
                ].map((item) => (
                    <div
                    key={item}
                    className="p-2 sm:p-3 rounded-lg text-xs sm:text-sm text-center"
                    style={{
                        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                        border: isDark ? "1px solid rgba(255,255,255,0.02)" : "1px solid rgba(15,23,42,0.02)",
                        color: isDark ? "#d1d5db" : "#374151",
                    }}
                    >
                    {item}
                    </div>
                ))}
                </div>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  Bu yıl ilk defa katılım gösterdiğimiz Model Uydu Yarışması'nın ilk aşamasını tam puan alarak geçtik.

                  2023 yılında ise Ulaşımda Yapay Zeka, Turizm Teknolojileri ve Ulaşımda Yapay Zeka takımlarımızla katılım sağladık ve Ulaşımda Yapay Zeka kategorisini finalist olarak tamamladık.

                  Bu yıllık takımlarımız da devam eden yarışma sürecinde bu başarıyı devam ettirecek şekilde çalışmalarına devam etmektedirler.
                </p>
              </article>

              <article
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Mobil Tabanlı Projelerimiz</h3>
                <ul className="mt-3 text-xs sm:text-sm space-y-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>
                  <li><strong>Geyik:</strong> Hacettepe'nin etkinliklerini ve duyurularını tek bir yerde toplayan; yemekhane menüsü, ring saatleri, kampüs haritası, GPA hesaplayıcı, akademik takvim gibi öğrencilerin kampüs ve akademik yaşamını kolaylaştıran özelliklere sahip bir mobil uygulamadır. Bu uygulama, Flutter ve Firebase kullanılarak geliştirilmekte ve kullanıcı sayısı devamlı olarak artmaktadır. Şu anda aktif olarak 4350 kullanıcıya sahiptir.</li>
                  <li><strong>Fides:</strong> Fides projemiz, temelde kafeleri hedef kitlesi olarak alan bir "loyalty card" sistemi uygulamasıdır. Projemiz aynı zamanda Hacettepe Ön Kuluçka merkezinden onay almış olup orada geliştirmelerine devam edilmektedir.</li>
                  <li><strong>Huisa:</strong> Huisa projemiz, özellikle okulumuzdaki yabancı öğrenci kitlesini hedefleyen, onlara yardımcı olmayı amaçlayan rehber niteliğinde bir uygulamadır.</li>
                </ul>
              </article>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Oyun Projemiz: ZEPHYR</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>Zephyr, oyun ekibimizin geliştirmekte olduğu 2D oyun projemizdir. Tasarım ve yazılım kısımlarıyla ilgilenen ekip üyelerimiz bulunmakta ve oyun Unity kullanılarak geliştirilmektedir. Projemiz Hacettepe Ön Kuluçka merkezinden de onay almıştır. Ekibimiz aynı zamanda sene içinde ABB Game Jam, Mağara Jam, ÜNOG Ankara Game Jam gibi game jam yarışmalarına da katılım göstermiştir.</p>
              </section>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Yapay Zeka Projemiz: TOONINGO</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>Yapay zeka temelli görüntü işleme içeren projemizdir. Bu projede amaç, Webtoon platformu üzerindeki çizgi roman tarzı hikayeleri daha fazla kullanıcının erişimine sunmak için yapay zeka ve görüntü işleme kullanarak farklı dillere çevrilmesini sağlamaktır.</p>
              </section>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Google Solution Challenge Ekiplerimiz</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>Google Solution Challenge'a geçtiğimiz sene içinde YULAF, Inform Me, Pari, Capsule ve ECOS olmak üzere 5 tane takım ve projeyle katılım sağladık. Projelerin her biri Birleşmiş Milletler'in 17 Sürdürülebilir Kalkınma Hedefi'nden bir veya daha fazlasına çözüm sağlama amaçlı geliştirildi.</p>
              </section>

              <section
                className="p-3 sm:p-5 rounded-lg"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: isDark ? "#ffffff" : "#111827" }}>Web Projelerimiz</h3>
                <p className="text-xs sm:text-sm mt-2" style={{ color: isDark ? "#d1d5db" : "#374151" }}>Topluluğumuz içinde ihtiyaç duyulan siteler de yine Ar-Ge birimimizde geliştirilmektedir. Geliştirmiş olduğumuz projeler aşağıda yer almaktadır.</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {[
                    "Topluluk Web Sitesi: ACM Hacettepe",
                    "HUPROG'24 Web Sitesi",
                    "ACM Hacettepe - ACM Kart Web Sitesi",
                    "Gelişim Etkinliği Web Sitesi",
                    "ACM Hacettepe Kayıt Web Sitesi",
                    "ACSDays Web Sitesi",
                ].map((item) => (
                    <div
                    key={item}
                    className="p-2 sm:p-3 rounded-lg text-xs sm:text-sm text-center"
                    style={{
                        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                        border: isDark ? "1px solid rgba(255,255,255,0.02)" : "1px solid rgba(15,23,42,0.02)",
                        color: isDark ? "#d1d5db" : "#374151",
                    }}
                    >
                    {item}
                    </div>
                ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
