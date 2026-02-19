# Portfolio Website

## Deploy

[Versel](http.ok)

## Core

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### Styling & UI

- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Toast:** [Sonner](https://sonner.emilkowal.ski/)

### Utilities

- **Animations:** [Motion](https://motion.dev/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Form:** [@emailjs/browser](https://www.emailjs.com/)

---

### Problem

1. Hero.tsx
   Image>grid Console mendeteksi bahwa gambar Grid.svg adalah elemen terbesar yang dilihat user saat pertama kali membuka . Secara default, Next.js menunda pemuatan gambar.
   Solusinya: Tambahkan loading="eager".
   console mendeteksi " has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.
   Solusi: tambahkan style={{ width: "auto", height: "auto" }}
2. FrameCarousel.tsx
   ada kesalahan penulisan saat import svg dari figma
   clip-path fill-rule clip-rule fill-opacity
   solusi: rename menjadi clipPath fillRule clipRule fillOpacity
3. FrameCarousel.tsx
   ada kesalahan penulisan saat import svg dari figma
   clip-path fill-rule clip-rule fill-opacity
   solusi: rename menjadi clipPath fillRule clipRule fillOpacity
4. About.tsx
   ada kesalahan Error Message Each child in a list should have a unique "key" prop.
   ini terjadi karena kesalahan peletakan key={item,id} karena ingin membuat garis sesuai figma
   solusi dengan menambahkan pembungkus <React.Fragment> agar text didalam pembungkus tersendiri

5. ToolUSe.tsx
   sebelumnya memperlakukan ScrollArea seperti ini yang mengakibatkan gap tidak berfungsi

```bash
<ScrollArea className="flex flex-col w-361 h-529 gap-24 border">
        {Tools.map((item, index) => (
          <React.Fragment key={item.id} >
            <div className="w-361 h-60 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <Image src={item.icon} alt="icon" className="w-60 h-60" />
                <p>{item.name}</p>
              </div>
              <p>{item.Percentase}</p>
            </div>
            {index !== Tools.length - 1 && (
              <div className="w-full border border-neutral-900" />
            )}
          </React.Fragment>
        ))}
</ScrollArea>
```

solusi:
buat pembungkus tambahan untuk map

```bash
<ScrollArea className="flex flex-col w-361 h-529 gap-24">
        <div className="flex flex-col w-361 gap-15">
          {Tools.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="w-361 h-60 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <Image src={item.icon} alt="icon" className="w-60 h-60" />
                  <p>{item.name}</p>
                </div>
                <p>{item.Percentase}</p>
              </div>
              {index !== Tools.length - 1 && (
                <div className="w-full border border-neutral-900" />
              )}
            </React.Fragment>
          ))}
        </div>
</ScrollArea>
```
