import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Пользовательское соглашение — DAGSTAY",
  description: "Условия использования сайта и услуг DAGSTAY.",
};

export default function TermsPage() {
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
          Пользовательское соглашение
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Дата последнего обновления: 26 июля 2025 г.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              1. Термины и определения
            </h2>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">«Сайт»</span> —
                интернет-ресурс dagstay.ru, принадлежащий Оператору.
              </li>
              <li>
                <span className="font-medium text-foreground">«Оператор»</span>,{" "}
                <span className="font-medium text-foreground">«DAGSTAY»</span> —
                лицо, управляющее Сайтом и оказывающее услуги.
              </li>
              <li>
                <span className="font-medium text-foreground">«Пользователь»</span> —
                физическое или юридическое лицо, использующее Сайт.
              </li>
              <li>
                <span className="font-medium text-foreground">«Услуги»</span> —
                комплекс работ по созданию и обслуживанию веб-ресурсов,
                настройке рекламы, внедрению CRM и AI-помощников для объектов
                размещения.
              </li>
              <li>
                <span className="font-medium text-foreground">«Заявка»</span> —
                заполненная Пользователем форма обратной связи на Сайте.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              2. Общие условия
            </h2>
            <p className="text-muted-foreground">
              2.1. Настоящее Пользовательское соглашение (далее — «Соглашение»)
              регулирует отношения между Оператором и Пользователем при
              использовании Сайта и обращении за Услугами.
            </p>
            <p className="mt-2 text-muted-foreground">
              2.2. Используя Сайт, Пользователь подтверждает, что ознакомлен с
              условиями Соглашения, Политикой конфиденциальности и принимает их в
              полном объёме.
            </p>
            <p className="mt-2 text-muted-foreground">
              2.3. Оператор вправе в одностороннем порядке вносить изменения в
              Соглашение. Новая редакция вступает в силу с момента публикации на
              Сайте. Продолжение использования Сайта после публикации изменений
              означает принятие новой редакции.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              3. Предмет соглашения
            </h2>
            <p className="text-muted-foreground">
              3.1. Оператор предоставляет информацию о своих Услугах через Сайт:
              создание сайтов для объектов размещения, настройка контекстной и
              таргетированной рекламы, внедрение систем букинга и CRM, настройка
              AI-помощников, аналитика и сопровождение.
            </p>
            <p className="mt-2 text-muted-foreground">
              3.2. Информация на Сайте носит ознакомительный характер и не
              является публичной офертой (ст. 437 ГК РФ).
            </p>
            <p className="mt-2 text-muted-foreground">
              3.3. Стоимость, сроки и состав Услуг определяются индивидуально в
              договоре (соглашении об оказании услуг), который заключается после
              предварительного обсуждения с Пользователем.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              4. Правила подачи заявки
            </h2>
            <p className="text-muted-foreground">
              4.1. Пользователь вправе заполнить форму обратной связи (Заявку) на
              Сайте для получения консультации или аудита.
            </p>
            <p className="mt-2 text-muted-foreground">
              4.2. Заполняя Заявку, Пользователь подтверждает, что предоставленные
              данные являются достоверными.
            </p>
            <p className="mt-2 text-muted-foreground">
              4.3. Подача Заявки не является заключением договора и не обязывает
              ни одну из сторон к оплате или оказанию Услуг.
            </p>
            <p className="mt-2 text-muted-foreground">
              4.4. Оператор обязуется связаться с Пользователем в течение 2
              рабочих дней с момента подачи Заявки.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              5. Интеллектуальная собственность
            </h2>
            <p className="text-muted-foreground">
              5.1. Все элементы Сайта (дизайн, тексты, графические элементы, код,
              логотипы, товарные знаки) являются объектами интеллектуальной
              собственности Оператора и защищены законодательством РФ.
            </p>
            <p className="mt-2 text-muted-foreground">
              5.2. Пользователь не вправе:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                Копировать, воспроизводить, распространять элементы Сайта без
                письменного разрешения Оператора
              </li>
              <li>
                Использовать элементы Сайта в коммерческих целях
              </li>
              <li>
                Извлекать данные с помощью автоматизированных средств (скрейпинг,
                парсинг) в объёмах, превышающих нормальное использование
              </li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              5.3. Результаты Услуг (сайт, дизайн, контент), созданные для
              Пользователя, передаются ему на условиях, определённых в договоре
              об оказании услуг.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              6. Ограничение ответственности
            </h2>
            <p className="text-muted-foreground">
              6.1. Оператор не несёт ответственности за:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-muted-foreground">
              <li>
                Перебои в работе Сайта, вызванные техническими причинам или
                действиями третьих лиц
              </li>
              <li>
                Содержание сайтов третьих лиц, на которые ведут ссылки с Сайта
              </li>
              <li>
                Ущерб, возникший из-за использования или невозможности
                использования Сайта
              </li>
              <li>
                Результаты, полученные Пользователем при использовании
                рекомендаций и информации, размещённых на Сайте
              </li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              6.2. Оператор стремится обеспечить бесперебойную работу Сайта, но не
              гарантирует отсутствие ошибок или сбоев.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              7. Оплата и возврат средств
            </h2>
            <p className="text-muted-foreground">
              7.1. Условия оплаты и порядок расчётов определяются в договоре об
              оказании услуг, заключаемом между Оператором и Пользователем.
            </p>
            <p className="mt-2 text-muted-foreground">
              7.2. Подача Заявки через Сайт является бесплатной и не влечёт
              финансовых обязательств для Пользователя.
            </p>
            <p className="mt-2 text-muted-foreground">
              7.3. Возврат средств осуществляется в порядке, предусмотренном
              действующим законодательством РФ и условиями договора.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              8. Заключительные положения
            </h2>
            <p className="text-muted-foreground">
              8.1. Настоящее Соглашение регулируется и толкуется в соответствии с
              законодательством Российской Федерации.
            </p>
            <p className="mt-2 text-muted-foreground">
              8.2. Все споры, возникающие из Соглашения, стороны стремятся
              разрешить путём переговоров. В случае невозможности разрешения спора
              мирным путём, он подлежит рассмотрению в суде по месту нахождения
              Оператора.
            </p>
            <p className="mt-2 text-muted-foreground">
              8.3. Если какое-либо положение Соглашения будет признано
              недействительным, остальные положения продолжают действовать.
            </p>
            <p className="mt-2 text-muted-foreground">
              8.4. Бездействие со стороны Оператора в случае нарушения Пользователем
              положений Соглашения не лишает Оператора права на защиту своих
              интересов позднее.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              9. Контактная информация
            </h2>
            <p className="text-muted-foreground">
              По всем вопросам, связанным с Соглашением, обращайтесь:
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
