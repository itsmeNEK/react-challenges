import styles from "@/assets/challenge1/styles.module.css"
import Image from "next/image"
import CardHeader from "@/assets/challenge1/images/illustration-article.svg"
import Avatar from "@/assets/challenge1/images/image-avatar.webp"

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <Image src={CardHeader} />
          </div>
          <div className={styles.card_body}>
            <button className={styles.button}>Learning</button>
            <h5>Publish 21 Dec 2023</h5>
            <a href="">
              <h3>HTML & CSS foundations</h3>
            </a>
            <p className={styles.body_text}>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className={styles.card_footer}>
            <Image src={Avatar} className={styles.avatar} />
            <p>Greg Hooper</p>
          </div>
        </div>
      </div>
    </>
  )
}
