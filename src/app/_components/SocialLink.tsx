import Link from "next/link";

interface ISocialLinkProps {
  href: string;
  svgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel: string;
}
export const SocialLink = ({
  href,
  svgIcon: SvgIcon,
  ariaLabel,
}: ISocialLinkProps) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <SvgIcon className="my-1 mx-1 grow-0 w-6 h-6 fill-text" />
    </Link>
  );
};
