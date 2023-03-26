import { CSSProperties, useEffect, useState } from 'react';
import media from './utils';
import Media from './types';

type MediaCardProps = {
  mediaId: string;
  width?: string;
};

const MediaCard = ({ mediaId, width = '175px' }: MediaCardProps) => {
  const [mediaData, setMediaData] = useState<Media | undefined>(undefined);

  useEffect(() => {
    setMediaData(media.find((item) => item.id === mediaId));
  }, [mediaId]);

  if (!mediaData) {
    return <div className="media-card">No media.</div>;
  }

  return (
    <div style={{ '--card-width': width } as CSSProperties} className="media-card">
      <img className="media-card__background" src={mediaData.image} />
      <div className="media-card__foreground">
        <div className="media-card__title">{mediaData.name}</div>
      </div>
    </div>
  );
};

export default MediaCard;
