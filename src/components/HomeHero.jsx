const HomeHero = ({ homeHeroData }) => {
  return (
    <section className="relative text-white ">
      <div
        className="bg-cover bg-top rfs:pb-[130rem] lg:hidden bg-gradient-to-b from-black"
        style={{
          backgroundImage: `url(/.netlify/images?url=${homeHeroData.backgroundImageMobile.sourceUrl})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent via-40% lg:from-black/25" />
      <div
        className="bg-cover bg-no-repeat bg-top rfs:pb-[70rem] 3xl:rfs:pb-[80rem] hidden lg:block"
        style={{
          backgroundImage: `url(/.netlify/images?url=${homeHeroData.backgroundImageDesktop.sourceUrl})`,
        }}
      />
      <div className="container mx-auto absolute rfs:bottom-[10.75rem]">
        <div className="lg:max-w-[40%]">
          <p className="title !leading-snug mb-2">{homeHeroData.title}</p>
          <p className="subtitle uppercase">{homeHeroData.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
export { HomeHero }
