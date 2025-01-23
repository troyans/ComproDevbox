import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Shield, Target, Package, Tags  } from "lucide-react"

export default function FeaturesGrid() {
  const features = [
    {
      id: "M/1",
      title: "Responsive design",
      description: (
        <>
          Tampil sempurna di semua perangkat, dari desktop hingga ponsel.
        </>
      ),
      icon: Mail,
    },
    {
      id: "M/2",
      title: "Advanced Security",
      description: (
        <>
          Lindungi data Anda dengan sistem keamanan terbaik.
        </>
      ),
      icon: Shield,
    },
    {
      id: "M/3",
      title: "SEO friendly ",
      description: (
        <>
          Mudah ditemukan di Google untuk menarik lebih banyak pengunjung.
        </>
      ),
      icon: Target,
    },
    {
      id: "M/4",
      title: "Unique design, bukan template",
      description: (
        <>
          Desain eksklusif yang mencerminkan identitas bisnis Anda.
        </>
      ),
      icon: Package,
    },
    {
      id: "M/5",
      title: "Google Analytics",
      description: (
        <>
          Pantau performa website Anda dengan data yang akurat.
        </>
      ),
      icon: Tags,
    },
    
  ]

  return (
    <section className="py-10 mt-0 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.id} className="border-none">
                <CardHeader>
                  <div className="space-y-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5423e7]/10">
                        <Icon className="h-6 w-6 text-[#5423e7]" />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

