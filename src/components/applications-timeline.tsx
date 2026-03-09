import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Снятие стресса",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Монотонная игровая механика — лучший способ отвлечься от тревожных мыслей. Мозг переключается
            в режим «здесь и сейчас», перерабатывая накопившееся напряжение.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Снижение уровня кортизола уже через 3–5 минут
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Отвлечение от негативных мыслей и руминации
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Лучше сна после вечерней сессии
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Перезагрузка между задачами",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            5-минутный перерыв с RocketChill помогает мозгу переключиться между задачами эффективнее,
            чем скроллинг соцсетей или кофе. Возвращайся к работе свежим.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Восстановление концентрации и фокуса
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Повышение продуктивности после перерыва
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Профилактика выгорания при длинном рабочем дне
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Состояние потока",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Правильно настроенный баланс сложности и простоты вводит игрока в состояние потока —
            то самое медитативное «ни о чём не думаю», которое психологи называют оптимальным опытом.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Полное присутствие в моменте
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Лёгкая удовлетворённость без усилий
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ощущение времени замедляется
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Что происходит с тобой</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            RocketChill — это не просто игра. Это простой ритуал перезагрузки, который работает
            без медитаций, приложений и усилий.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
