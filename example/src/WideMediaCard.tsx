import { CSSProperties, useEffect, useState } from 'react';
import media from './utils';
import Media from './types';

type WideMediaCardProps = {
  mediaId: string;
  height?: string;
};

const WideMediaCard = ({ mediaId, height = '262.5px' }: WideMediaCardProps) => {
  const [mediaData, setMediaData] = useState<Media | undefined>(undefined);

  useEffect(() => {
    setMediaData(media.find((item) => item.id === mediaId));
  }, [mediaId]);

  if (!mediaData) {
    return <div className="media-card media-card__wide">No media.</div>;
  }

  return (
    <div style={{ '--card-height': height } as CSSProperties} className="media-card media-card__wide">
      <img className="media-card__background" src={mediaData.image} />
      <div className="media-card__foreground">
        <div className="media-card__title">{mediaData.name}</div>
      </div>
    </div>
  );
};

export default WideMediaCard;
