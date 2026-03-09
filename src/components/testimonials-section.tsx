import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алина К.",
    role: "Дизайнер, удалёнка",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Открываю RocketChill когда чувствую, что голова перегрелась. 5 минут — и снова в ресурсе. Лучше любого кофе.",
  },
  {
    name: "Максим Р.",
    role: "Разработчик, фриланс",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Я скептик, но реально помогает переключиться между задачами. Заменил утренний скроллинг — и день идёт лучше.",
  },
  {
    name: "Светлана В.",
    role: "Менеджер проектов",
    avatar: "/professional-woman-scientist.png",
    content:
      "Команда начала использовать на встречах вместо кофе-паузы. Атмосфера стала легче, и это заметно всем.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Люди уже чилят</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже запустил ракету и расслабился
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
