import styles from "./page.module.css";
import { MediaFetcher} from "@/app/media-fetcher/media-fetcher";
import Gallery from "@/app/components/images-gallery/gallery";

export default async function Home() {
  const mediaFetcher = new MediaFetcher();
  const id = String(Math.floor(Math.random() * 3 + 1)); // selecting a random id from the options [1,2,3]
  const fetchedDataRes = await mediaFetcher.getDataById(id);
  return (
    <main className={styles.main}>
        <div>
            <h1 id={styles.title} >Gal Epshtein&apos;s home assignment</h1>
            <Gallery images={fetchedDataRes.data} />
        </div>
    </main>
  );
}
