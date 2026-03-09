import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что вообще такое RocketChill?",
      answer:
        "Это браузерная игра-релаксация. Ты управляешь ракетой, летишь вперёд и ни о чём не думаешь. Простая механика специально настроена для того, чтобы мозг входил в состояние потока и отдыхал.",
    },
    {
      question: "Нужно что-то устанавливать?",
      answer:
        "Нет. Открываешь сайт в браузере — и сразу играешь. Работает на телефоне, планшете и ноутбуке без регистрации и загрузок.",
    },
    {
      question: "Это правда помогает расслабиться?",
      answer:
        "Да. Монотонные игры с простым управлением активируют зону мозга, отвечающую за отдых. Это похоже на медитацию, только не нужно ничему учиться — просто лети.",
    },
    {
      question: "Сколько времени нужно, чтобы почувствовать эффект?",
      answer:
        "Большинство пользователей отмечают расслабление уже через 3–5 минут. Для полной перезагрузки — 10–15 минут.",
    },
    {
      question: "Это не превратится в зависимость?",
      answer:
        "В игре нет системы наград, уровней или достижений, которые создают зависимость. Это как кофе-пауза — приятная, но без крючков.",
    },
    {
      question: "Можно ли использовать на работе?",
      answer:
        "Именно для этого и создан RocketChill — для осознанных перерывов между задачами. Открыл, полетел 5 минут, закрыл и вернулся к работе свежим.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хотел узнать о релаксе через игру — но не знал, у кого спросить.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
