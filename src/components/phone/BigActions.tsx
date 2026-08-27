import { Button } from "@/components/ui/button";
import { mapsHref, telHref } from "@/lib/shops";

export function BigActions({
  phone,
  mapsQuery,
  website,
}: {
  phone?: string;
  mapsQuery: string;
  website?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {phone ? (
        <Button asChild size="lg">
          <a href={telHref(phone)}>CALL</a>
        </Button>
      ) : website ? (
        <Button asChild size="lg">
          <a href={website} target="_blank" rel="noreferrer">
            SITE
          </a>
        </Button>
      ) : (
        <div />
      )}
      <Button asChild size="lg">
        <a href={mapsHref(mapsQuery)} target="_blank" rel="noreferrer">
          MAPS
        </a>
      </Button>
    </div>
  );
}
