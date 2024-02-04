import style from "../about.module.css";
import Image from "next/image";
export default function Sec2() {
  return (
    <div>
      <div className={style.s2container}>
        <div className={style.s2innercontainer}>
          <div className={style.heading}>Our Founding Story</div>
          <div className={style.normal}>
            Our e-learning platform was born out of a shared vision and passion
            for transforming education. It all began with a group of educators,
            technologists, and lifelong learners who recognized the need for
            accessible, flexible, and high-quality learning opportunities in a
            rapidly evolving digital world.
          </div>
          <div className={style.normal}>
            As experienced educators ourselves, we witnessed firsthand the
            limitations and challenges of traditional education systems. We
            believed that education should not be confined to the walls of a
            classroom or restricted by geographical boundaries. We envisioned a
            platform that could bridge these gaps and empower individuals from
            all walks of life to unlock their full potential.
          </div>
        </div>
        <div>
          <Image
            src="/assets/Images/FoundingStory.png"
            width={470}
            height={278}
          />
        </div>
      </div>
    </div>
  );
}
