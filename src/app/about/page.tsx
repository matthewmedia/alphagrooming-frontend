import { Button, Card, CardContent, Badge } from "@/ui";
import { Users, Target, Award, Mail, Heart, Scissors } from "lucide-react";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-slate-900 bg-white/90 hover:bg-white"
            >
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              About AlphaGrooming
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Where self-care meets confidence. Two lifelong friends on a
              mission to redefine men&apos;s grooming.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Scissors className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Users className="w-20 h-20 text-white rotate-12" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                We provide content tailored towards men who are trying to
                improve their self-care, self-image, and overall self-esteem. We
                want to show the world that
                <span className="font-bold text-slate-900">
                  {" "}
                  self-care can be ALPHA
                </span>
                .
              </p>
            </div>

            {/* Story Section */}
            <Card className="mb-16 border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-slate-900 text-white">
                      <Award className="w-4 h-4 mr-2" />
                      Est. 2023
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      The Beginning
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      AlphaGrooming was established in early 2023 by two
                      lifelong friends,
                      <span className="font-semibold">
                        {" "}
                        Dave Robinson and Matthew Manning
                      </span>
                      . For us, this is not just brand—it&apos;s a meaningful
                      partnership driven by a genuine passion for the betterment
                      of men who want to level up their appearance.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      We created this platform to not only improve the
                      appearance and boost the confidence of men in today&apos;s
                      society, but also to alleviate the perpetual stigma around
                      men who take grooming seriously.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8 text-center">
                    <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Two Brothers
                    </h4>
                    <p className="text-slate-600">
                      Sharing our journey of leveling up our game with the world
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Makes Us Different */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
                What Makes Us Different
              </h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                      We&apos;re not creating content that we ourselves
                      don&apos;t live by—it&apos;s the complete opposite. What
                      keeps the heart of this platform beating is the fact that
                      <span className="font-bold text-slate-900">
                        {" "}
                        we live what we teach
                      </span>
                      . Two brothers trying to level up their game decided to
                      share all the tips, tricks, failures, and victories they
                      faced along their journey, combined with meticulous
                      research to create what you see today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-slate-700" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Authenticity
                  </h4>
                  <p className="text-slate-600">
                    We share real experiences, failures, and victories from our
                    own grooming journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-slate-700" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Purpose-Driven
                  </h4>
                  <p className="text-slate-600">
                    Breaking stigmas and empowering men to embrace self-care
                    with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-slate-700" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Research-Backed
                  </h4>
                  <p className="text-slate-600">
                    Combining personal experience with meticulous research for
                    reliable content.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Thank You & Contact */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Thank You
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                  Thank you for visiting our blog. We hope you find our content
                  helpful and inspiring. If you have any questions or
                  suggestions, feel free to contact us.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
