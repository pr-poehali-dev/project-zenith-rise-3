import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Управляй ракетой",
    description: "Запускай ракету и уворачивайся от препятствий — простое и засасывающее управление одним пальцем.",
    icon: "rocket",
    badge: "Игра",
  },
  {
    title: "Режим потока",
    description: "Монотонная механика игры вводит мозг в медитативное состояние потока — стресс уходит сам собой.",
    icon: "wave",
    badge: "Релакс",
  },
  {
    title: "Атмосферный саундтрек",
    description: "Лоу-фай биты и ambient-звуки создают идеальный фон для расслабления во время игры.",
    icon: "music",
    badge: "Звук",
  },
  {
    title: "Без давления",
    description: "Никаких жизней, никаких штрафов, никаких таймеров. Просто лети сколько хочешь.",
    icon: "heart",
    badge: "Без стресса",
  },
  {
    title: "Ежедневный чил",
    description: "5 минут с RocketChill снижают уровень кортизола и перезагружают голову между рабочими задачами.",
    icon: "timer",
    badge: "5 минут",
  },
  {
    title: "Работает везде",
    description: "Открывай в браузере — на ноутбуке, телефоне или планшете. Никаких установок и регистраций.",
    icon: "globe",
    badge: "Везде",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему это работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Игра как инструмент релаксации — не развлечение, а осознанный перерыв
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "rocket" && "🚀"}
                    {feature.icon === "wave" && "🌊"}
                    {feature.icon === "music" && "🎵"}
                    {feature.icon === "heart" && "💜"}
                    {feature.icon === "timer" && "⏱️"}
                    {feature.icon === "globe" && "🌐"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
