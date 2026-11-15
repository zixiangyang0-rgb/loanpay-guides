type MastheadProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function PublicationMasthead({ kicker, title, lede }: MastheadProps) {
  return (
    <div className="g-pub-mast">
      <p className="g-pub-kicker">{kicker}</p>
      <h1 className="g-pub-title">{title}</h1>
      <p className="g-pub-lede">{lede}</p>
    </div>
  );
}

export function ChapterNumber({ index }: { index: number }) {
  return <span className="g-pub-no">No. {index}</span>;
}

type FigureProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
};

export function PublicationFigure({ src, width, height, alt, caption, credit }: FigureProps) {
  return (
    <figure className="g-pub-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={width} height={height} alt={alt} loading="lazy" />
      <figcaption>
        {caption} <span className="g-pub-credit">{credit}</span>
      </figcaption>
    </figure>
  );
}
