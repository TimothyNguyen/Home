import { getGridItems, getProfile } from "@/sanity/sanity.query";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ProfileType } from "@/types/ProfileType";
import { GridItemType } from "@/types/GridItemType";
import Social from "@/components/social";
import GridItem from "@/components/grid-item";
import { BiFile } from "react-icons/bi";

export default async function Home() {
  const profile : ProfileType[] = await getProfile();
  const gridItems : GridItemType[] = await getGridItems();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Image
                style={{borderRadius: '20px', overflow: 'hidden'}}
                priority
                loading="eager"
                placeholder="blur"
                src={data.profileImage.image}
                width={200}
                height={200}
                blurDataURL={data.profileImage.image}
                quality={100}
                alt={data.profileImage.alt}
              />
              <div className="text-xl font-medium text-primary">
              </div>
              <h1 className="mt-2 text-4xl font-bold">{data.fullName}</h1>
              <h1 className="text-xl font-medium text-primary">
                {data.headline}
              </h1>
              <p className="text-base py-4 text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={`${data.locationLink}`}
                  rel="noreferer noopener"
                  className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
                >
                  <MapPin size="14" />
                  {data.location}
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
                >
                  <Mail size="14" />
                  Contact Me
                </a>
                <a
                  href={`${data.resumeURL}?dl=${data.fullName}_resume.pdf`}
                  className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
                >
                  <BiFile className="text-base" /> Download Resumé
                </a>
              </div>
              <div className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 xl:overflow-y-auto">
                {gridItems && gridItems.map((item, index) => (
                  <GridItem key={item.title + item.type + index} size={item.layout}>
                    {item.type === "social" ? (
                      <Social item={item} />
                    ) : (
                      <div>Need to create new component type.</div>
                    )}
                  </GridItem>
                ))}
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}