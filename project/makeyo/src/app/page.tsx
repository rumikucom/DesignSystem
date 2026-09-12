import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function MakeyoShowcase() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Scheme 1: Warm Cream (Default root) */}
      <section className="flex-1 p-8 lg:p-24 bg-background text-foreground flex flex-col items-center justify-center space-y-8">
        <div className="max-w-4xl text-center space-y-6">
          <Badge className="bg-badge-bg text-badge-fg border border-badge-border rounded-[4rem] text-[1.4rem] px-6 py-2">Makeyo Drops</Badge>
          <h1 className="text-[4rem] lg:text-[6.4rem] font-bold leading-tight">NFC-Enabled Anime Keychain Collectibles</h1>
          <p className="text-[1.8rem] opacity-75">Connect physical merchandise with digital experiences.</p>
          <div className="flex justify-center gap-4 pt-4">
            <Button className="rounded-[12px] text-[1.6rem] px-8 py-6 border border-primary bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-none">Shop Now</Button>
            <Button className="rounded-[12px] text-[1.6rem] px-8 py-6 border border-foreground bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity shadow-none">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Scheme 3: Vivid Yellow */}
      <section className="scheme-yellow bg-background text-foreground p-8 lg:p-24 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="rounded-none border-foreground/10 bg-transparent shadow-none">
            <div className="h-[24rem] bg-black/5 flex items-center justify-center relative">
              <Badge className="absolute top-4 left-4 bg-badge-bg text-badge-fg border border-badge-border rounded-[4rem] text-[1.2rem] px-4">Ultra Rare</Badge>
              <img src="https://placehold.co/400x400/transparent/313335?text=DRAGON" alt="Dragon Keychain" className="w-[16rem] h-[16rem] object-contain" />
            </div>
            <CardHeader className="text-left px-0 pb-2">
              <CardTitle className="text-[2.4rem] font-bold">Crimson Dragon</CardTitle>
              <CardDescription className="text-[1.6rem] opacity-75">Series 1 • Tap NFC to view stats</CardDescription>
            </CardHeader>
            <CardContent className="text-left px-0 pb-6">
              <p className="text-[1.5rem] font-normal opacity-75">A legendary keychain embedded with a high-capacity NFC chip. Unlocks exclusive in-app character skins.</p>
            </CardContent>
            <CardFooter className="px-0">
              <Button className="w-full rounded-[12px] text-[1.6rem] py-6 border border-primary bg-primary text-primary-foreground hover:opacity-90 shadow-none">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-none border-foreground/10 bg-transparent shadow-none">
            <div className="h-[24rem] bg-black/5 flex items-center justify-center relative">
              <img src="https://placehold.co/400x400/transparent/313335?text=NINJA" alt="Ninja Keychain" className="w-[16rem] h-[16rem] object-contain" />
            </div>
            <CardHeader className="text-left px-0 pb-2">
              <CardTitle className="text-[2.4rem] font-bold">Shadow Shinobi</CardTitle>
              <CardDescription className="text-[1.6rem] opacity-75">Series 1 • Tap NFC to view stats</CardDescription>
            </CardHeader>
            <CardContent className="text-left px-0 pb-6">
              <p className="text-[1.5rem] font-normal opacity-75">Sleek acrylic keychain featuring a stealth shinobi. NFC unlocks hidden lore entries.</p>
            </CardContent>
            <CardFooter className="px-0">
              <Button className="w-full rounded-[12px] text-[1.6rem] py-6 border border-primary bg-primary text-primary-foreground hover:opacity-90 shadow-none">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
          
          {/* Card 3 (Dark Scheme Nested inside Yellow for contrast demo) */}
          <div className="scheme-dark bg-background text-foreground p-6 rounded-none border border-foreground/10 shadow-none flex flex-col">
            <div className="h-[22rem] bg-white/5 flex items-center justify-center relative mb-6">
              <Badge className="absolute top-4 left-4 bg-badge-bg text-badge-fg border border-badge-border rounded-[4rem] text-[1.2rem] px-4">Limited</Badge>
              <img src="https://placehold.co/400x400/transparent/ffffff?text=MECHA" alt="Mecha Keychain" className="w-[16rem] h-[16rem] object-contain" />
            </div>
            <div className="text-left pb-2 flex-grow">
              <h3 className="text-[2.4rem] font-bold">Neon Mecha</h3>
              <p className="text-[1.6rem] opacity-75 mt-1">Series 1 • Tap NFC to view stats</p>
              <p className="text-[1.5rem] font-normal opacity-75 mt-4">Cyberpunk-inspired mecha keychain. NFC chip provides early access to beta builds.</p>
            </div>
            <div className="pt-4 mt-auto">
              <Button className="w-full rounded-[12px] text-[1.6rem] py-6 border border-primary bg-primary text-primary-foreground hover:opacity-90 shadow-none">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Orange: CTA Section */}
      <section className="scheme-orange bg-background text-foreground p-8 lg:p-24 flex flex-col items-center justify-center space-y-8 text-center">
        <h2 className="text-[3.6rem] lg:text-[4.8rem] font-bold">Link your collection</h2>
        <p className="text-[1.8rem] opacity-75 max-w-2xl">Tap any Makeyo keychain to your phone to register it to your account. Enter your invite code below to get started.</p>
        <div className="flex w-full max-w-md gap-4 pt-4">
          <Input placeholder="Enter NFC Code..." className="rounded-none border-foreground/55 bg-transparent text-[1.6rem] py-6 h-auto shadow-none focus-visible:ring-0 focus-visible:border-foreground" />
          <Button className="rounded-[12px] text-[1.6rem] px-8 py-6 border border-primary bg-primary text-primary-foreground hover:opacity-90 shadow-none">Verify</Button>
        </div>
      </section>
    </div>
  );
}
