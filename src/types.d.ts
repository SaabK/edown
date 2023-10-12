export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export interface SVGIconProps {
  width: number;
  height: number;
  viewBox: string;
  opacity?: string;
  d: string;
  pathFill: string;
}

export interface PriceCardProps {
  heading: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  points: {
    image: string;
    statement: string;
  }[];
}
