import styles from "./page.module.css";
import { MediaFetcher} from "@/app/media-fetcher/media-fetcher";
import Gallery from "@/app/components/images-gallery/gallery";

export default async function Home() {
  const mediaFetcher = new MediaFetcher();
  const fetchedDataRes = await mediaFetcher.getDataById('1');
  return (
    <main className={styles.main}>
        <div>
            <h1 id={styles.title} >Gal Epshtein&apos;s home assignment</h1>
            <Gallery images={fetchedDataRes.data} />
        </div>
    </main>
  );
}
