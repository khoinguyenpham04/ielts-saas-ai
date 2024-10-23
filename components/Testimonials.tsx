import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                &quot;This AI tool helped me improve my IELTS writing score from 6.5 to 7.5 in just a month! The feedback is
                incredibly detailed and helpful.&quot;
              </p>
              <p className="font-semibold">- Sarah K., Band 7.5</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                &quot;The speaking practice feature is a game-changer. It&apos;s like having a personal IELTS tutor available 24/7.&quot;
              </p>
              <p className="font-semibold">- Ahmed M., Band 8</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                &quot;I love how the AI provides instant feedback. It&apos;s helped me identify and correct my mistakes quickly.&quot;
              </p>
              <p className="font-semibold">- Li Wei, Band 7</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 text-center text-muted-foreground">
          <p className="text-2xl font-semibold">4.8/5</p>
          <p>based on 2,000+ user ratings</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;