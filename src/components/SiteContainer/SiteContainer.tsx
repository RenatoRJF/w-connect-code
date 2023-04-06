import './SiteContainer.css'

interface SiteContainerProps {
  url: string;
  title: string;
}

export default function SiteContainer({ url, title }: SiteContainerProps) {
  return (
    <div>
      <h2 className="site-content-title">{title}</h2>

      <iframe width="100%" height="600" src={url} title={title}></iframe>
    </div>
  );
}
