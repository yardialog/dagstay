import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — DAGSTAY",
  description: "Политика обработки персональных данных DAGSTAY.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Навигация назад */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
        >
          ← Назад на главную
        </Link>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Дата последнего обновления: 26 июля 2025 г.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">1. Общие положения</h2>
            <p className="text-muted-foreground">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет
              порядок обработки и защиты персональных данных пользователей сайта
              dagstay.ru (далее — «Сайт»), которым управляет ИП/ООО «DAGSTAY»
              (далее — «Оператор», «Мы»).
            </p>
            <p className="mt-2 text-muted-foreground">
              Используя Сайт, вы выражаете своё согласие с условиями настоящей
              Политики. Если вы не согласны с какими-либо положениями, пожалуйста,
              воздержитесь от использования Сайта.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              2. Какие данные мы собираем
            </h2>
            <p className="mb-2 font-medium text-foreground">2.1. Данные, которые вы предоставляете:</p>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Имя, фамилия, отчество</li>
              <li>Номер телефона</li>
              <li>Имя пользователя в Telegram</li>
              <li>Тип объекта размещения (отель, гостевой дом, глэмпинг)</li>
              <li>Количество номеров / мест</li>
              <li>Комментарии и дополнительные сведения</li>
            </ul>

            <p className="mt-4 mb-2 font-medium text-foreground">
              2.2. Данные, собираемые автоматически:
            </p>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                IP-адрес, тип браузера, язык, операционная система, разрешение
                экрана
              </li>
              <li>
                Страницы, которые вы посещаете, время и длительность визитов,
                последовательность навигации
              </li>
              <li>
                Реферер (источник перехода), данные файлов cookie и аналогичных
                технологий
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              3. Цели обработки данных
            </h2>
            <p className="text-muted-foreground">
              Мы обрабатываем персональные данные в следующих целях:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                Связь с вами для консультации, подготовки предложения и заключения
                договора
              </li>
              <li>Оказание услуг по договору (создание сайтов, реклама, CRM)</li>
              <li>
                Направление информационных и коммерческих предложений (при наличии
                согласия)
              </li>
              <li>Улучшение работы Сайта и качества оказываемых услуг</li>
              <li>
                Аналитика посещаемости и поведения пользователей для оптимизации
                маркетинга
              </li>
              <li>Соблюдение требований законодательства РФ</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              4. Правовые основания обработки
            </h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                П. 1 ст. 6 Федерального закона № 152-ФЗ «О персональных данных» —
                согласие субъекта персональных данных
              </li>
              <li>
                П. 5 ст. 6 ФЗ № 152-ФЗ — исполнение договора, стороной которого
                является субъект персональных данных
              </li>
              <li>
                П. 9 ст. 6 ФЗ № 152-ФЗ — законные интересы Оператора
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              5. Передача данных третьим лицам
            </h2>
            <p className="text-muted-foreground">
              Мы не передаём ваши персональные данные третьим лицам, за
              исключением случаев:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Это прямо предусмотрено законодательством РФ</li>
              <li>
                Вы дали на это явное согласие (например, для передачи данных
                партнёрам, выполняющим услуги по нашему поручению)
              </li>
              <li>
                Это необходимо для исполнения договора (хостинг-провайдеры,
                сервисы аналитики, платёжные системы)
              </li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              Мы используем следующие сервисы, которые могут получать доступ к
              техническим данным: Яндекс.Метрика, ВКонтакте (рекламный SDK).
              Передача данных в эти сервисы осуществляется в соответствии с их
              политиками конфиденциальности.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              6. Файлы cookie
            </h2>
            <p className="text-muted-foreground">
              Сайт использует файлы cookie для:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Обеспечения корректной работы Сайта</li>
              <li>Аналитики посещаемости (Яндекс.Метрика)</li>
              <li>
                Настройки рекламы (ретаргетинг в Яндекс.Директ и ВКонтакте)
              </li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              Вы можете отключить cookie в настройках браузера, однако это может
              привести к ограничению функциональности Сайта.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              7. Хранение и защита данных
            </h2>
            <p className="text-muted-foreground">
              Персональные данные хранятся на защищённых серверах в течение срока,
              необходимого для достижения целей обработки, но не более 5 лет с
              момента последнего взаимодействия с вами, если иное не предусмотрено
              договором или законодательством.
            </p>
            <p className="mt-2 text-muted-foreground">
              Мы применяем организационные и технические меры для защиты
              персональных данных от несанкционированного доступа, изменения,
              раскрытия или уничтожения: шифрование данных, контроль доступа,
              регулярное обновление программного обеспечения.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              8. Ваши права
            </h2>
            <p className="text-muted-foreground">
              Вы имеете право:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                Получить информацию об обработке своих персональных данных
              </li>
              <li>
                Требовать уточнения, блокирования или уничтожения персональных
                данных
              </li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>
                Обратиться с жалобой в уполномоченный орган по защите прав
                субъектов персональных данных (Роскомнадзор)
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              9. Контактная информация
            </h2>
            <p className="text-muted-foreground">
              По всем вопросам, связанным с обработкой персональных данных,
              обращайтесь:
            </p>
            <div className="mt-3 rounded-xl border border-border bg-muted/30 p-5 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Оператор:</span>{" "}
                DAGSTAY
              </p>
              <p className="mt-1">
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href="mailto:hello@dagstay.ru"
                  className="text-brand transition-colors hover:underline"
                >
                  hello@dagstay.ru
                </a>
              </p>
              <p className="mt-1">
                <span className="font-medium text-foreground">Telegram:</span>{" "}
                <a
                  href="https://t.me/dagstay"
                  className="text-brand transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dagstay
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
