import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function RokupiShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col p-8 lg:p-24 space-y-16">
      <header className="flex justify-between items-center border-b-4 border-foreground pb-8">
        <div>
          <h1 className="text-4xl lg:text-6xl font-semibold uppercase">Rokupi Drops</h1>
          <p className="text-lg mt-2 font-light">NFC-Enabled Anime Keychain Collectibles</p>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Button variant="default" className="text-lg px-8 py-6 rounded-xl">Shop Now</Button>
          <Button variant="outline" className="text-lg px-8 py-6 rounded-xl border-foreground text-foreground hover:bg-foreground hover:text-background transition-none">Learn More</Button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Keychain 1 */}
        <Card className="rounded-xl border-4 border-foreground shadow-none bg-white text-black overflow-hidden group">
          <div className="h-64 bg-zinc-100 flex items-center justify-center border-b-4 border-black relative">
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm uppercase px-3 py-1 font-semibold rounded-full border-2 border-black">Ultra Rare</Badge>
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-black group-hover:rotate-12 transition-transform">
              DRAGON
            </div>
          </div>
          <CardHeader className="text-left pb-2">
            <CardTitle className="text-2xl font-semibold uppercase">Crimson Dragon</CardTitle>
            <CardDescription className="text-black/70 text-lg font-light">Series 1 • Tap NFC to view stats</CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="rounded-full border-black font-semibold uppercase">Fire Element</Badge>
              <Badge variant="outline" className="rounded-full border-black font-semibold uppercase">Lvl 99</Badge>
            </div>
            <p className="text-base font-normal">A legendary keychain embedded with a high-capacity NFC chip. Unlocks exclusive in-app character skins.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg py-6 rounded-xl bg-primary hover:bg-black hover:text-white transition-none text-white border-2 border-transparent">
              Add to Cart - $29.99
            </Button>
          </CardFooter>
        </Card>

        {/* Keychain 2 */}
        <Card className="rounded-xl border-4 border-foreground shadow-none bg-white text-black overflow-hidden group">
          <div className="h-64 bg-zinc-100 flex items-center justify-center border-b-4 border-black relative">
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-black group-hover:-rotate-12 transition-transform">
              NINJA
            </div>
          </div>
          <CardHeader className="text-left pb-2">
            <CardTitle className="text-2xl font-semibold uppercase">Shadow Shinobi</CardTitle>
            <CardDescription className="text-black/70 text-lg font-light">Series 1 • Tap NFC to view stats</CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="rounded-full border-black font-semibold uppercase">Dark Element</Badge>
              <Badge variant="outline" className="rounded-full border-black font-semibold uppercase">Lvl 45</Badge>
            </div>
            <p className="text-base font-normal">Sleek acrylic keychain featuring a stealth shinobi. NFC unlocks hidden lore entries.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg py-6 rounded-xl bg-black hover:bg-primary transition-none text-white border-2 border-transparent">
              Add to Cart - $19.99
            </Button>
          </CardFooter>
        </Card>

        {/* Dark Theme Demo */}
        <div className="dark">
          <Card className="rounded-xl border-4 border-white shadow-none bg-black text-white overflow-hidden group h-full flex flex-col">
            <div className="h-64 bg-zinc-900 flex items-center justify-center border-b-4 border-white relative">
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm uppercase px-3 py-1 font-semibold rounded-full border-2 border-white">Limited</Badge>
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-white group-hover:scale-110 transition-transform">
                MECHA
              </div>
            </div>
            <CardHeader className="text-left pb-2 flex-grow">
              <CardTitle className="text-2xl font-semibold uppercase">Neon Mecha</CardTitle>
              <CardDescription className="text-white/70 text-lg font-light">Series 1 • Tap NFC to view stats</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="rounded-full border-white font-semibold uppercase">Tech Element</Badge>
                <Badge variant="outline" className="rounded-full border-white font-semibold uppercase">Lvl 80</Badge>
              </div>
              <p className="text-base font-normal">Cyberpunk-inspired mecha keychain. NFC chip provides early access to beta builds.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 rounded-xl bg-primary hover:bg-white hover:text-black transition-none text-white border-2 border-transparent">
                Add to Cart - $24.99
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <section className="bg-primary text-primary-foreground p-8 lg:p-16 border-4 border-foreground rounded-xl">
        <h2 className="text-3xl lg:text-5xl font-semibold uppercase mb-4 text-left">Link your collection</h2>
        <p className="text-xl mb-8 font-light text-left max-w-2xl">Tap any Rokupi keychain to your phone to register it to your account. Enter your invite code below to get started.</p>
        <div className="flex max-w-md gap-4">
          <Input placeholder="Enter NFC Code..." className="rounded-xl border-4 border-foreground bg-white text-black text-lg py-6" />
          <Button className="rounded-xl border-4 border-foreground bg-black hover:bg-white hover:text-black text-white text-lg py-6 px-8 transition-none">Verify</Button>
        </div>
      </section>
    </div>
  );
}
