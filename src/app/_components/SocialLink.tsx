import Link from "next/link";

interface ISocialLinkProps {
  href: string;
  svgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const SocialLink = ({ href, svgIcon: SvgIcon }: ISocialLinkProps) => {
  return (
    <Link href={href}>
      <SvgIcon className="my-1 mx-1 grow-0 w-6 h-6 fill-text" />
    </Link>
  );
};
